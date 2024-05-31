import { cloneElement, useContext } from "react";
import { ModalContext } from ".";

type TOGGLER_BUTTON = {
  type: "TOGGLER";
  children: React.ReactElement;
  className?: string;
};

type CLOSE_BUTTON = {
  type: "CLOSE";
  text?: string;
  children?: React.ReactElement; //if child, clone it else, just return with onclose
};

type CONFIRM_BUTTON = {
  type: "CONFIRM";
  text?: string;
  closeModalOnConfirm?: boolean; //
  onConfirm: () => void;
  children?: React.ReactElement; //
};

type ButtonProps = TOGGLER_BUTTON | CLOSE_BUTTON | CONFIRM_BUTTON;

export default function Button(props: ButtonProps) {
  const { toggleModal } = useContext(ModalContext);

  //toggles the modal, the user has to pass a child
  if (props.type === "TOGGLER") {
    const cloned = cloneElement(props.children, {
      onClick: () => toggleModal(true),
    });

    return cloned;
  }

  // this are displayed on the footer mainly
  if (props.type === "CLOSE") {
    const { children, text = "Close" } = props;

    return children ? (
      cloneElement(children, {
        onClick: () => toggleModal(),
      })
    ) : (
      <button
        onClick={() => toggleModal(false)}
        className='px-5 py-2 outline-none rounded-xl bg-shade-100 cursor-pointer hover:ring-4 hover:ring-shade-100 hover:ring-offset-1 hover:ring-offset-white text-white'
      >
        {text}
      </button>
    );
  }

  if (props.type === "CONFIRM") {
    const {
      closeModalOnConfirm = true,
      onConfirm,
      children,
      text = "Confirm",
    } = props;

    return children ? (
      children
    ) : (
      <button
        type='button'
        onClick={() => {
          if (!closeModalOnConfirm === false) {
            toggleModal(false);
          }
          onConfirm();
        }}
        className='px-5 py-2 outline-none rounded-xl bg-secondary hover:ring-4 hover:ring-secondary hover:ring-offset-1 hover:ring-offset-white cursor-pointer text-white'
      >
        {text}
      </button>
    );
  }
}
