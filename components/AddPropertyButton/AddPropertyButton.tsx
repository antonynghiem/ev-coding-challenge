import { Button, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AddPropertyFormDrawer } from "../AddPropertyFormDrawer/AddPropertyFormDrawer";

export const AddPropertyButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        size="md"
        bg="red.500"
        color="white"
        onClick={onOpen}
      >
        Add Property
      </Button>
      <AddPropertyFormDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
