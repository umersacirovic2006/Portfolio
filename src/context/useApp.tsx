import { useViewportSize } from "@mantine/hooks";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({} as any);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const values = {
    isDarkMode,
    setIsDarkMode,
    isMobile,
    setIsMobile,
  };

  const { width } = useViewportSize();
  useEffect(() => {
    width < 768 ? setIsMobile(true) : setIsMobile(false);
  }, [width]);

  return (
    <AppContext.Provider value={values}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
