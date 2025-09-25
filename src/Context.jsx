import { createContext, useContext, useState, useEffect } from "react";
import { LoginRegisterPanel } from "./Custom_hook/useFormLogin";
import { StoreProduct } from "./Custom_hook/useStoreProduct";
import { CheckoutProceed } from "./Custom_hook/useCheckout";
import { useWishlist } from "./Custom_hook/useWishlist";
import { useAccountInfomation } from "./Custom_hook/useAccountProfile";

// Step 1: Create context
const ControlDataContext = createContext();

// Step 2: Hook for accessing context
const useControlData = () => useContext(ControlDataContext);

// Step 3: Context provider
function ContextProvider({ children }) {
  const [navActive, setNavActive] = useState(0); //link header
  const [bgLoginRegister, setBgLoginRegister] = useState(false);
  const [bgCart, setBgCart] = useState(false);
  const [search, setSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [policy, setPolicy] = useState(false);
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
    bgCheckBag,
    setBgCheckBag,
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
  const { setSaveDropWishlist, setUpdateWishlist, handleSaveWishlist } =
    useWishlist({
      currentAccount,
      setUserAccount,
      userAccount,
      setShowLogin,
      setShowRegister,
      setBgLoginRegister,
    });
  const {
    purchased,
    setPurchased,
    handleCheckoutClearStoreBags,
    detail,
    setDetail,
    showHidden,
    setShowHidden,
  } = useAccountInfomation({
    userAccount,
    setUserAccount,
    currentAccount,
    setCounters,
  });
  return (
    <ControlDataContext.Provider
      value={{
        navActive,
        setNavActive,
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
        bgCheckBag,
        setBgCheckBag,
        setShowCart,
        handleDeleteItem,
        deliveryAdd,
        setDeliveryAdd,
        handleSaveAddress,
        deliveryAddressProvince,
        handleDelivery,
        handleBanks,
        handleContact,
        setSaveDropWishlist,
        setUpdateWishlist,
        handleSaveWishlist,
        purchased,
        setPurchased,
        handleCheckoutClearStoreBags,
        detail,
        setDetail,
        showHidden,
        setShowHidden,
        policy,
        setPolicy,
      }}
    >
      {children}
    </ControlDataContext.Provider>
  );
}

export { useControlData };
export default ContextProvider;
