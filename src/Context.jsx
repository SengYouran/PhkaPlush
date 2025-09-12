import { createContext, useContext, useState, useEffect } from "react";
import { LoginRegisterPanel } from "./Custom_hook/useFormLogin";
import { StoreProduct } from "./Custom_hook/useStoreProduct";
import { CheckoutProceed } from "./Custom_hook/useCheckout";

// Step 1: Create context
const ControlDataContext = createContext();

// Step 2: Hook for accessing context
const useControlData = () => useContext(ControlDataContext);

// Step 3: Context provider
function ContextProvider({ children }) {
  const [bgLoginRegister, setBgLoginRegister] = useState(false);
  const [bgCart, setBgCart] = useState(false);
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
  const [counters, setCounters] = useState(() => {
    try {
      const counter = localStorage.getItem("storeCounter");
      return counter ? JSON.parse(counter) : {};
    } catch {
      return {};
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
  const {
    handleCounterDash,
    handleCounterPlus,
    handleCart,
    showCart,
    setShowCart,
    handleDeleteItem,
  } = StoreProduct({
    setCounters,
    counters,
    currentAccount,
    setShowLogin,
    showRegister,
    setShowRegister,
    setBgLoginRegister,
    userAccount,
    setUserAccount,
  });
  const {
    deliveryAdd,
    setDeliveryAdd,
    handleSaveAddress,
    deliveryAddressProvince,
    handleDelivery,
    handleBanks,
    handleContact,
  } = CheckoutProceed({
    currentAccount,
    setUserAccount,
    userAccount,
  });
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
        counters,
        setCounters,
        handleCounterDash,
        handleCounterPlus,
        handleCart,
        bgCart,
        setBgCart,
        showCart,
        setShowCart,
        handleDeleteItem,
        deliveryAdd,
        setDeliveryAdd,
        handleSaveAddress,
        deliveryAddressProvince,
        handleDelivery,
        handleBanks,
        handleContact,
      }}
    >
      {children}
    </ControlDataContext.Provider>
  );
}

export { useControlData };
export default ContextProvider;
