import { useState } from "react";

function CheckoutProceed({ currentAccount, setUserAccount, userAccount }) {
  const [deliveryAdd, setDeliveryAdd] = useState({
    fullname: "",
    telephone: "",
    currentAddress: "",
    province: "",
    country: "Cambodia",
  });
  function handleSaveAddress() {
    if (
      !deliveryAdd.fullname ||
      !deliveryAdd.telephone ||
      !deliveryAdd.currentAddress ||
      !deliveryAdd.province
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        shippingAddress: deliveryAdd,
      };
      setUserAccount(updatedAccount); // ✅ Commit data
    }
  }
  function handleDelivery(selectedDelivery) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        shippingDelivery: selectedDelivery,
      };
      setUserAccount(updatedAccount);
    }
  }
  function handleBanks(selectedBanks) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        banks: selectedBanks,
      };
      setUserAccount(updatedAccount);
    }
  }
  function handleContact(selectedContact) {
    const userIndex = userAccount.findIndex(
      (check) => check.id === currentAccount.id
    );

    if (userIndex !== -1) {
      const updatedAccount = [...userAccount];
      updatedAccount[userIndex] = {
        ...updatedAccount[userIndex],
        contactVia: selectedContact,
      };
      setUserAccount(updatedAccount);
    }
  }
  const deliveryAddressProvince = (province) => {
    setDeliveryAdd({ ...deliveryAdd, province: province }); // ✅ correct key
  };
  return {
    deliveryAdd,
    setDeliveryAdd,
    handleSaveAddress,
    deliveryAddressProvince,
    handleDelivery,
    handleBanks,
    handleContact,
  };
}
export { CheckoutProceed };
