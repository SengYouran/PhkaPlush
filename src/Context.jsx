import { createContext, useContext, useState, useEffect } from "react";
import { LoginRegisterPanel } from "./Custom_hook/useFormLogin";

// Step 1: Create context
const ControlDataContext = createContext();

// Step 2: Hook for accessing context
const useControlData = () => useContext(ControlDataContext);

// Step 3: Context provider
function ContextProvider({ children }) {
  const [bgLoginRegister, setBgLoginRegister] = useState(false);
  const [search, setSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [userAccount, setUserAccount] = useState(() => {
    try {
      const stored = localStorage.getItem("UserAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [currentAccount, setCurrentAccount] = useState(() => {
    try {
      const stored = localStorage.getItem("storeCurrentAccount");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save userAccount changes to localStorage
  useEffect(() => {
    localStorage.setItem("UserAccount", JSON.stringify(userAccount));
    localStorage.setItem("storeCurrentAccount", JSON.stringify(currentAccount));
  }, [userAccount, currentAccount]);

  // Custom hook for login/register state and form
  const {
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
  } = LoginRegisterPanel();

  return (
    <ControlDataContext.Provider
      value={{
        userAccount,
        setUserAccount,
        currentAccount,
        setCurrentAccount,
        showLogin,
        setShowLogin,
        form,
        setform,
        handleCreateAccount,
        showRegister,
        setShowRegister,
        bgLoginRegister,
        setBgLoginRegister,
        handleSelectProvince,
        selectProvince,
        setSelectProvince,
        handleChange,
        search,
        setSearch,
        valueSearch,
        setValueSearch,
      }}
    >
      {children}
    </ControlDataContext.Provider>
  );
}

export { useControlData };
export default ContextProvider;
