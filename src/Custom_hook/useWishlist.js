import { useState, useEffect } from "react";
import { data_product } from "../Data/ProductInfomation";

function useWishlist({
  currentAccount,
  setUserAccount,
  userAccount,
  setShowLogin,
  setShowRegister,
  setBgLoginRegister,
}) {
  // ✅ STEP 1: Get initial data from currentAccount
  const userIndex = userAccount.findIndex(
    (check) => check.id === currentAccount?.id
  );

  const initialWishlist =
    userIndex !== -1 ? userAccount[userIndex].storeWishlist || [] : [];

  const initialActiveWishlist =
    userIndex !== -1 ? userAccount[userIndex].activeWishlist || {} : {};

  // ✅ STEP 2: Initialize from existing account data
  const [saveDropWishlist, setSaveDropWishlist] = useState(initialWishlist);
  const [updateWishlist, setUpdateWishlist] = useState(initialActiveWishlist);

  // ✅ STEP 3: Update userAccount when wishlist changes
  useEffect(() => {
    if (currentAccount == 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }

    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex !== -1) {
      const updateAccount = [...userAccount];
      const user = { ...updateAccount[userIndex] };
      user.storeWishlist = saveDropWishlist;
      user.activeWishlist = updateWishlist;
      updateAccount[userIndex] = user;
      setUserAccount(updateAccount);
    }
  }, [saveDropWishlist, updateWishlist]);

  // ✅ STEP 4: Toggle Wishlist
  function handleSaveWishlist(id) {
    if (currentAccount == 0) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return;
    }

    const checkProduct = data_product.find((check) => check.id == id);
    if (!checkProduct) return;

    const toggleWishlist = {
      ...updateWishlist,
      [id]: !updateWishlist[id],
    };
    setUpdateWishlist(toggleWishlist);

    const user = userAccount[userIndex];
    const wishlist = user?.storeWishlist || [];
    const isExist = wishlist.some((check) => check.id == id);
    const updatedWishlist = isExist
      ? wishlist.filter((check) => check.id !== id)
      : [checkProduct, ...wishlist];
    setSaveDropWishlist(updatedWishlist);
  }

  return {
    saveDropWishlist,
    updateWishlist,
    handleSaveWishlist,
  };
}

export { useWishlist };
