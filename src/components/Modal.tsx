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
    <Card
      className={`fixed top-0 left-0 right-0  w-1/4 h-fit m-auto transition-all ease-in-out duration-300 ${showModal ? 'bottom-0 opacity-100': 'bottom-[-1000px] opacity-0'}`}
      decoration="top"
      decorationColor="indigo"
    >
      <Flex flexDirection="col" alignItems="start">
        <header className="flex justify-between w-full">
          <Title className="text-center text-2xl">Timer Settings</Title>
          <Button onClick={handleClose} icon={XIcon} color="red"></Button>
        </header>
        <main className="w-full">{children}</main>
      </Flex>
    </Card>
  );
};

export default Modal;
