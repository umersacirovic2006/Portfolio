import { useViewportSize } from "@mantine/hooks";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({} as any);

interface UseAppProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: UseAppProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggled, setToggled] = useState(false);

  const values = {
    isDarkMode,
    setIsDarkMode,
    isMobile,
    setIsMobile,
    toggled,
    setToggled
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
