import React, { useEffect, useRef, useState } from "react";
import { useControlData } from "../Context";

function Profile() {
  const refData = useRef(null);
  const {
    userAccount,
    setUserAccount,
    currentAccount,
    form,
    setform,
    showHidden,
  } = useControlData();
  useEffect(() => {
    const userData = userAccount.find(
      (check) => check.id === currentAccount.id
    );

    if (userData) {
      setform({
        fullName: userData.fullName || "",
        telephone: userData.telephone || "",
        email: userData.email || "",
        gender: userData.gender || "",
        dob: userData.dob || "",
      });
    }
  }, [userAccount, currentAccount]);

  const handleUpdate = (e) => {
    //this function for update account that has userAccount === currentAccount
    e.preventDefault();
    const updatedAccounts = userAccount.map((acc) =>
      acc.id === currentAccount.id ? { ...acc, ...form } : acc
    );
    setUserAccount(updatedAccounts);
  };

  return (
    <div
      className={`md:w-[73%] md:ml-[27%] mt-4 min-h-[70vh] ${
        showHidden ? "hidden md:blcok" : "blcok"
      }`}
    >
      <h2 className="text-center text-xl font-medium">Profile</h2>
      <form onSubmit={handleUpdate} className="mt-4 flex flex-col gap-4">
        {/* Gender */}
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-medium">Gender*</h2>
          <label className="font-[15px] flex items-center gap-2">
            <input
              type="radio"
              className="w-[20px] h-[20px] accent-pink-500 cursor-pointer"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={(e) => setform({ ...form, gender: e.target.value })}
            />
            Male
          </label>
          <label className="font-[15px] flex items-center gap-2">
            <input
              type="radio"
              className="w-[20px] h-[20px] accent-pink-500 cursor-pointer"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={(e) => setform({ ...form, gender: e.target.value })}
            />
            Female
          </label>
        </div>

        {/* Fullname */}
        <div className="relative">
          <h2 className="text-sm">Fullname</h2>
          <input
            className="border w-full h-[2.5rem] outline-0 pl-2 font-medium"
            type="text"
            name="fullName"
            value={form.fullName}
            placeholder="Your fullname"
            onChange={(e) => setform({ ...form, fullName: e.target.value })}
          />
          <i className="fa-solid fa-check border-pink-500 text-pink-600 border-l-2 border-r-1 border-b-2 p-[3px] rounded-[50%] absolute top-1/2 right-3"></i>
        </div>

        {/* Telephone */}
        <label className="relative">
          <h2 className="text-sm">Telephone</h2>
          <input
            className="border w-full h-[2.5rem] outline-0 pl-2 font-medium"
            type="text"
            name="telephone"
            value={form.telephone}
            placeholder="Your Telephone"
            onChange={(e) => setform({ ...form, telephone: e.target.value })}
          />
          <i className="fa-solid fa-check border-pink-500 text-pink-600 border-l-2 border-r-1 border-b-2 p-[3px] rounded-[50%] absolute top-1/2 right-3"></i>
        </label>

        {/* Email */}
        <label className="relative">
          <h2 className="text-sm">Email</h2>
          <input
            className="border w-full h-[2.5rem] outline-0 pl-2 font-medium"
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            onChange={(e) => setform({ ...form, email: e.target.value })}
          />
          <i className="fa-solid fa-check border-pink-500 text-pink-600 border-l-2 border-r-1 border-b-2 p-[3px] rounded-[50%] absolute top-1/2 right-3"></i>
        </label>

        {/* Birthdate */}
        <div
          onClick={() => refData.current?.showPicker?.()}
          className="relative cursor-pointer"
        >
          <h2 className="text-sm">Set birthdate (DD/MM/YYYY)</h2>
          <input
            ref={refData}
            type="date"
            name="dob"
            value={form.dob}
            onChange={(e) => setform({ ...form, dob: e.target.value })}
            onMouseEnter={(e) => e.target.focus()}
            className="border w-full h-[2.5rem] outline-0 pl-2 pr-10 font-medium cursor-pointer appearance-none"
          />
          <i
            className="fa-solid fa-calendar-days text-xl text-pink-600 absolute top-1/2 right-3 cursor-pointer"
            onClick={() => refData.current?.showPicker?.()}
          ></i>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black w-full h-[2.5rem] cursor-pointer text-white font-medium text-[15px]"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
