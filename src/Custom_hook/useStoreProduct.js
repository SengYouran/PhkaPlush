import { useState } from "react";
import { data_product } from "../Data/ProductInfomation";

function StoreProduct({
  setCounters,
  counters, // ✅ ចាំបាច់បន្ថែម
  currentAccount,
  setShowLogin,
  setShowRegister,
  setBgLoginRegister,
  userAccount,
  setUserAccount,
}) {
  const [showCart, setShowCart] = useState(false);
  function handleCart(id) {
    if (!currentAccount) {
      setShowLogin(true);
      setShowRegister(true);
      setBgLoginRegister(true);
      return; // ✅ បន្ថែម return នៅទីនេះដែរ
    }

    const cartItem = data_product.find((check) => check.id == id);
    if (!cartItem) return;

    const { product, product_name, product_price, product_text, discount } =
      cartItem;
    const counterValue = counters?.[id] ?? 1;

    const priceNumber = parseFloat(String(product_price).replace("$", ""));
    if (counterValue <= 0) {
      alert("Please add counter.");
      return;
    }

    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex !== -1) {
      const updatedCartItem = {
        id,
        product,
        product_name,
        product_price,
        discount,
        product_text,
        counter: counterValue,
        totalPrice: priceNumber * counterValue,
      };

      const updatedAccounts = [...userAccount];
      const user = { ...updatedAccounts[userIndex] };
      const oldCart = user.storeBags || [];

      const existingItemIndex = oldCart.findIndex((check) => check.id === id);
      let newCart;

      if (existingItemIndex !== -1) {
        newCart = [...oldCart];
        newCart[existingItemIndex] = updatedCartItem;
      } else {
        newCart = [...oldCart, updatedCartItem]; // ✅ ជួសជុលទីនេះ
      }

      user.storeBags = newCart;
      updatedAccounts[userIndex] = user;

      setUserAccount(updatedAccounts);
    }
  }

  function handleCounterPlus(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  function handleCounterDash(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  }
  function handleDeleteItem(id) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );
    if (userIndex === -1) return;
    const storeBag = userAccount[userIndex]?.storeBags || [];
    const deleteItem = storeBag.filter((check) => check.id !== id);

    const updatedAccounts = [...userAccount];
    const user = { ...updatedAccounts[userIndex] };
    user.storeBags = deleteItem;

    updatedAccounts[userIndex] = user;
    setUserAccount(updatedAccounts);
    setCounters((prev) => {
      const newCounters = { ...prev };
      delete newCounters[id];
      return newCounters;
    });
  }
  return {
    handleCounterDash,
    handleCounterPlus,
    handleCart,
    showCart,
    setShowCart,
    handleDeleteItem,
  };
}

export { StoreProduct };
