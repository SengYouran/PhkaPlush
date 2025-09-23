import React, { useState } from "react";
import { useControlData } from "../Context";

function Password() {
  const [currentPassd, setCurrentPassd] = useState("");
  const [newPassd, setNewPassd] = useState("");
  const [confirmPassd, setConfirmPassd] = useState("");
  const [matchPassed, setMacthPassed] = useState(false);
  const [matchNewPassed, setMacthNewPassed] = useState(false);

  const { userAccount, currentAccount, setUserAccount, showHidden } =
    useControlData();

  function handleChangePassword(e) {
    e.preventDefault();

    const user = userAccount.find((u) => u.id === currentAccount.id);

    // Reset warnings
    setMacthPassed(false);
    setMacthNewPassed(false);

    // Check current password
    if (user?.password !== currentPassd) {
      setMacthPassed(true);
      return;
    }

    // Check new password match
    if (newPassd !== confirmPassd) {
      setMacthNewPassed(true);
      return;
    }

    // Update password
    const updatedUsers = userAccount.map((u) =>
      u.id === currentAccount.id ? { ...u, password: newPassd } : u
    );

    setUserAccount(updatedUsers);

    // Reset fields after successful update
    setCurrentPassd("");
    setNewPassd("");
    setConfirmPassd("");
  }

  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[75vh] ${
        showHidden ? "hidden md:flex" : "flex"
      } flex-col gap-4`}
    >
      <h2 className="text-center text-xl font-medium">Change password</h2>
      <form onSubmit={handleChangePassword} className="flex flex-col gap-6">
        <div>
          <h2>Current password</h2>
          <input
            className={`border w-full h-[2.5rem] outline-0 pl-2 text-[15px] ${
              matchPassed ? "border-red-600" : ""
            }`}
            type="password"
            name="currentPassword"
            placeholder="Enter current password"
            value={currentPassd}
            onChange={(e) => setCurrentPassd(e.target.value)}
          />
        </div>
        <div>
          <h2>New password</h2>
          <input
            className={`border w-full h-[2.5rem] outline-0 pl-2 text-[15px] ${
              matchNewPassed ? "border-red-600" : ""
            }`}
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={newPassd}
            onChange={(e) => setNewPassd(e.target.value)}
          />
        </div>
        <div>
          <h2>Confirm new password</h2>
          <input
            className={`border w-full h-[2.5rem] outline-0 pl-2 text-[15px] ${
              matchNewPassed ? "border-red-600" : ""
            }`}
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={confirmPassd}
            onChange={(e) => setConfirmPassd(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-black w-full h-[2.5rem] text-[17px] font-medium text-white cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Password;
