import { useState } from "react";

function StoreProduct() {
  function handleCounterPlus(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 0, +1),
    }));
  }
  function handleCounterDash(id) {
    setCounters((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1),
    }));
  }
}
export { StoreProduct };
