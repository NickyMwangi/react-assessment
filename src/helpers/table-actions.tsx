import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { BsPencil } from 'react-icons/bs';
import { DeleteIcon } from '@chakra-ui/icons';
import { DelConfirmationDialog } from '../utils';
import { LuUserCheck } from 'react-icons/lu';

export const TableActions = ({ row, table }: any) => {
  const meta = table.options.meta;
  const { isOpen: confirmIsOpen, onOpen: confirmOnOpen, onClose: confirmOnClose } = useDisclosure();

  const onConfirmDel = () => {
    meta?.removeAction(row.index);
    confirmOnClose();
  };

  const onClickEdit = () => {
    meta?.onEditTblAction(row.index);
  };

  const onClickConfirm = () => {
    meta?.onConfirmTblAction(row.index);
  };

  return (
    <HStack>
      {meta.hasDelBtn() && (
        <IconButton
          data-testid="tbl-delete-btn"
          m={0}
          p={0}
          size="xs"
          variant="ghost"
          colorScheme="red"
          aria-label="delete-btn"
          fontSize="15px"
          icon={<DeleteIcon />}
          onClick={confirmOnOpen}
        />
      )}

      {meta.hasEditBtn() && (
        <IconButton
          data-testid="tbl-edit-btn"
          m={0}
          p={0}
          size="xs"
          variant="ghost"
          colorScheme="purple"
          aria-label="edit-btn"
          fontSize="15px"
          icon={<BsPencil />}
          onClick={onClickEdit}
        />
      )}
      {meta.hasConfirmBtn() && (
        <IconButton
          data-testid="tbl-confirm-btn"
          m={0}
          p={0}
          size="xs"
          variant="ghost"
          colorScheme="blue"
          aria-label="confirm-btn"
          fontSize="15px"
          icon={<LuUserCheck />}
          onClick={onClickConfirm}
        />
      )}

      <DelConfirmationDialog
        message="Do you really want to delete this record? This process cannot be undone"
        confirmation={onConfirmDel}
        isOpen={confirmIsOpen}
        onClose={confirmOnClose}
      />
    </HStack>
  );
};
