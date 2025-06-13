import { useState, useEffect } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("popupShown", "true");
  };

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("popupShown");

    if (!hasShownPopup) {
      openPopup();
    }
  }, []);

  return { isOpen, openPopup, closePopup };
};

export default usePopup;
