import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  HStack,
  ModalOverlay,
  Stack,
  VStack,
  ModalCloseButton
} from '@chakra-ui/react';
import { BsExclamationCircle } from 'react-icons/bs';

export const DelConfirmationDialog = ({ confirmation, message, isOpen, onClose, id }: any) => {
  return (
    <Stack>
      <Modal size={'sm'} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={1}>
            <VStack justify="center" my={3}>
              <BsExclamationCircle size="40px" color="red" />
              <Text textAlign="center" fontSize="lg" fontWeight={700}>
                Are you sure?
              </Text>
            </VStack>
            <Text textAlign="center" fontSize="sm">
              {message}.
            </Text>
            <HStack w={'100%'} py={4} justify="end">
              <Button size="sm" variant="outline" colorScheme="blue" fontWeight={600} onClick={onClose}>
                Cancel
              </Button>
              <Button size="sm" type="submit" colorScheme="red" onClick={() => confirmation(id)}>
                Yes, I am sure
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
