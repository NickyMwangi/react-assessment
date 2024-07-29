import { ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useTheme,
  Icon,
  Text,
  HStack,
  Button,
  Spinner
} from '@chakra-ui/react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';

interface DataTableProps<TData, TValue> {
  definedColumns: ColumnDef<TData, TValue>[];
  data: any[];
  columnFilters?: any[];
  deleteAction?: any;
  editAction?: any;
  confirmAction?: any;
  actions: {
    hasBtnDelete?: boolean;
    hasBtnEdit?: boolean;
    hasBtnConfirm?: boolean;
  };
  pagination: any;
  totalRecords: number;
  loadTableData?: any;
  onPaginationChange: any;
  tableLoading?: boolean;
}

export function DataTable<TData, TValue>({
  definedColumns,
  data,
  columnFilters,
  deleteAction,
  editAction,
  confirmAction,
  actions,
  totalRecords,
  tableLoading,
  pagination,
  onPaginationChange
}: DataTableProps<TData, TValue>) {
  const theme = useTheme();
  const tableInstance = useReactTable({
    columns: definedColumns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    rowCount: totalRecords,
    state: {
      columnFilters: columnFilters,
      pagination
    },
    enableRowSelection: true,
    onPaginationChange,
    meta: {
      removeAction: (rowIndex: number) => {
        deleteAction(data[rowIndex].id);
      },
      onEditTblAction: (rowIndex: number) => {
        editAction(data[rowIndex], rowIndex);
      },
      onConfirmTblAction: (rowIndex: number) => {
        confirmAction(data[rowIndex], rowIndex);
      },

      hasEditBtn: () => {
        return actions.hasBtnEdit;
      },
      hasDelBtn: () => {
        return actions.hasBtnDelete;
      },
      hasConfirmBtn: () => {
        return actions.hasBtnConfirm;
      }
    }
  });
  return (
    <TableContainer w="100%" data-testid="event-data-table">
      <Table variant="striped" size="sm" colorScheme="blackAlpha">
        <Thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((n) => {
                  return (
                    <Th textTransform={'capitalize'} h="38px" key={n.id}>
                      {flexRender(n.column.columnDef.header, n.getContext())}
                      {n.column.getCanSort() && (
                        <Icon
                          as={ArrowDownIcon}
                          color={theme.colors?.brand?.secondary}
                          mx={2}
                          fontSize={12}
                          onClick={n.column.getToggleSortingHandler()}
                        />
                      )}
                    </Th>
                  );
                })}
              </Tr>
            );
          })}
        </Thead>
        <Tbody>
          {tableLoading ? (
            <Tr>
              <Td textAlign="left" colSpan={definedColumns.length}>
                <Spinner thickness="4px" speed="0.35s" emptyColor="gray.200" color="blue.500" size="lg" />
              </Td>
            </Tr>
          ) : (
            tableInstance.getRowModel().rows.map((rowEl) => {
              return (
                <Tr key={rowEl.id}>
                  {rowEl.getVisibleCells().map((cellEl) => {
                    return (
                      <Td h="52px" key={cellEl.id}>
                        {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
      {data && totalRecords > data.length ? (
        <HStack justify={'center'} align={'center'} my={2} mx={5}>
          <Button
            size="sm"
            variant="outline"
            leftIcon={<ChevronLeftIcon />}
            colorScheme="blue"
            isDisabled={!tableInstance.getCanPreviousPage()}
            onClick={() => tableInstance.previousPage()}>
            Previous
          </Button>
          <Text fontSize="sm" align={'center'}>
            Page {tableInstance.getState().pagination.pageIndex + 1} of {tableInstance.getPageCount()}
          </Text>
          <Button
            size="sm"
            variant="outline"
            leftIcon={<ChevronRightIcon />}
            colorScheme="blue"
            isDisabled={!tableInstance.getCanNextPage()}
            onClick={() => tableInstance.nextPage()}>
            Next
          </Button>
        </HStack>
      ) : (
        data.length === 0 && (
          <Text fontSize="sm" padding={2} align={'center'}>
            No data available
          </Text>
        )
      )}
    </TableContainer>
  );
}
