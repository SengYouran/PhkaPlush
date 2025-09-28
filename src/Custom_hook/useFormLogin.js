import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useLoginRegisterPanel({ setCurrentAccount }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectProvince, setSelectProvince] = useState(false);
  const [form, setform] = useState({
    gender: "",
    fullName: "",
    telephone: "",
    date: "",
    email: "",
    country: "Cambodia",
    provinces: "",
    password: "",
  });
  const handleSelectProvince = (province) => {
    setform({ ...form, provinces: province }); // ✅ correct key
    setSelectProvince(false);
  };
  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  function handleCreateAccount(userAccount, setUserAccount, password2) {
    function generateUserId() {
      let userId = userAccount.length + 1;
      return userId.toString().padStart(4, "0");
    }
    if (
      form.gender === "" ||
      form.fullName === "" ||
      form.telephone === "" ||
      form.email === "" ||
      form.provinces === ""
    ) {
    } else {
      const userData = {
        id: generateUserId(),
        fullName: form.fullName,
        telephone: form.telephone,
        email: form.email,
        country: form.country,
        provinces: form.provinces,
        date: form.date,
        password: password2,
      };
      setUserAccount([userData, ...userAccount]);
      setform({
        gender: "",
        fullName: "",
        telephone: "",
        email: "",
        country: "Cambodia",
        provinces: "",
        password: "",
      });
      alert("Update to storageUser");
    }
  }
  function handleLogout() {
    localStorage.removeItem("storeCurrentAccount");
    setCurrentAccount([]);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  return {
    showLogin,
    setShowLogin,
    form,
    setform,
    handleCreateAccount,
    showRegister,
    setShowRegister,
    handleSelectProvince,
    handleChange,
    selectProvince,
    setSelectProvince,
    handleLogout,
  };
}
export { useLoginRegisterPanel };
