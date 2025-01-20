
import { useState, useEffect } from "react";

const useIsMdOrLess = () => {
  const [isMdOrLess, setIsMdOrLess] = useState<boolean | null>(null);

  useEffect(() => {
    // Vérifie si le code s'exécute côté client
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setIsMdOrLess(window.innerWidth <= 1366);
    };

    // Initialisation au chargement
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMdOrLess;
};

export default useIsMdOrLess;


