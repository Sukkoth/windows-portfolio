import { createContext, useContext, useState } from "react";
import Button from "./Button";
import Content from "./Content";
import Footer from "./Footer";

//DEFINE CONTEXT
export const ModalContext = createContext<{
  isOpen: boolean;
  toggleModal: (setOpen?: boolean) => void;
}>({
  isOpen: false,
  toggleModal: () => {},
});

type ModalProps = {
  children: React.ReactNode;
};

//MODAL
function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleModal(setOpen?: boolean) {
    setIsOpen((prev) => (setOpen !== undefined ? setOpen : !prev));
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
  return useContext(ModalContext);
}

Modal.Button = Button;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
