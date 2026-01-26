import { useState } from "react";

export const useMobileMenu = () => {
  const [isOPen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return { isOPen, toggle, close, open };
};
