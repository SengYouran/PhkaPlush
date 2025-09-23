import { useEffect, useState } from "react";

function useAccountInfomation({
  userAccount,
  setUserAccount,
  currentAccount,
  setCounters,
}) {
  const [purchased, setPurchased] = useState([]);
  const [detail, setDetail] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  function handleCheckoutClearStoreBags() {
    const now = new Date();
    const dateTime = now.toLocaleString("en-US", {
      timeZone: "Asia/Phnom_Penh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // ប្រៀបធៀប currentAccount.id ប្រសិនបើ currentAccount ជា object
    const userIndex = userAccount.findIndex(
      (check) => check.id === (currentAccount.id || currentAccount)
    );

    if (userIndex === -1) return;

    const user = userAccount[userIndex];
    const storeBags = user?.storeBags || [];

    const purchasedWithDate = storeBags.map((update) => ({
      ...update,
      dateOfPurchasing: dateTime,
    }));

    const updateAccount = [...userAccount];
    updateAccount[userIndex] = {
      ...updateAccount[userIndex],
      storeBags: [],
      storepurchased: [...(user?.storepurchased || []), ...purchasedWithDate],
    };

    setUserAccount(updateAccount);
    setCounters({});
    setPurchased(purchasedWithDate);
  }

  // អ្នកអាចលុប useEffect នេះបើ handleCheckoutClearStoreBags បានធ្វើការអាប់ដេតហើយ
  // បើអ្នកចង់ទុកវា បញ្ចូល dependency រួច
  useEffect(() => {
    if (purchased.length > 0) {
      const userIndex = userAccount.findIndex(
        (check) => check.id === (currentAccount.id || currentAccount)
      );
      if (userIndex !== -1) {
        const updateAccount = [...userAccount];
        const user = { ...updateAccount[userIndex] };
        const oldPurchased = user?.storepurchased || [];
        const merged = [...oldPurchased, ...purchased].reduce((acc, item) => {
          if (!acc.find((i) => i.id === item.id)) acc.push(item);
          return acc;
        }, []);
        user.storepurchased = merged;
        updateAccount[userIndex] = user;
        setUserAccount(updateAccount);
        setPurchased([]);
      }
    }
  }, [purchased, userAccount, currentAccount]);

  return {
    purchased,
    setPurchased,
    handleCheckoutClearStoreBags,
    detail,
    setDetail,showHidden, setShowHidden
  };
}

export { useAccountInfomation };
