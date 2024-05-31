import { useContext } from "react";
import { ModalContext } from ".";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";

type ContentProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Content({ children, title }: ContentProps) {
  const { isOpen, toggleModal } = useContext(ModalContext);

  if (isOpen)
    return createPortal(
      <Overlay onClose={toggleModal} title={title}>
        {children}
      </Overlay>,
      document.body
    );
}
