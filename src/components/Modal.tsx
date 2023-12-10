import { XIcon } from "@heroicons/react/outline";
import { Button, Card, Flex, Title } from "@tremor/react";
import { ReactNode } from "react";

interface ModalProps {
  handleClose: () => void;
  children: ReactNode;
  showModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ handleClose, children, showModal }) => {
  return (
    <>
    <Card
      className={`fixed z-10 top-0 left-0 right-0  w-1/4 h-fit m-auto transition-all ease-in-out duration-300 ${showModal ? 'bottom-0 opacity-100': 'bottom-[-1000px] opacity-0'}`}
      decoration="top"
      decorationColor="indigo"
    >
      <Flex flexDirection="col" alignItems="start">
        <header className="flex justify-between w-full">
          <Title className="text-center text-2xl">Timer Settings</Title>
          <Button className="transition-colors duration-300" onClick={handleClose} icon={XIcon} color="red"></Button>
        </header>
        <main className="w-full">{children}</main>
      </Flex>
    </Card>
    <div onClick={handleClose} className={`fixed z-0 w-screen h-screen bg-neutral-800 right-0 left-0 transition-opacity ease-in-out duration-200  ${showModal ? 'top-0 opacity-30': 'top-[-1000px] opacity-0'}`}></div>
    </>
  );
};

export default Modal;
