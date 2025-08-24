import { createContext, useContext, useState } from "react";

// Step 1: Create context (with correct name)
const ControlDataContext = createContext();

// Step 2: Create hook to access context
const useControlData = () => useContext(ControlDataContext);

// Step 3: Context provider component
function ContextProvider({ children }) {
  const [controlData, setControlData] = useState([]);

  return (
    <ControlDataContext.Provider value={{ controlData, setControlData }}>
      {children}
    </ControlDataContext.Provider>
  );
}

export { useControlData };
export default ContextProvider;
