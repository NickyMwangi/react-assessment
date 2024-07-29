import { useEffect, useMemo } from 'react';
import { useAxiosCrud, usePagination } from '../../hooks';
import { OrderEndpoints } from '../../endpoints';
import { TableSkeletonLoader } from '../loaders/table-skelton-loader';
import { DataTable } from '../../utils';
import { DeliveryColumnsDef } from '../../helpers';
import { Box, Heading, HStack, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const LateDelivery = () => {
  const { pagination, onPaginationChange, pageIndex, pageSize } = usePagination();
  const { response, isLoading, axiosCrud } = useAxiosCrud();

  const lateDeliveries = useMemo(() => {
    return response;
  }, [isLoading]);

  useEffect(() => {
    getDelivery();
  }, [pageIndex]);

  const getDelivery = () => {
    axiosCrud({
      method: 'get',
      url: OrderEndpoints.lateDelivery(pageIndex, pageSize)
    });
  };

  return (
    <div>
      {isLoading ? (
        <TableSkeletonLoader />
      ) : (
        lateDeliveries &&
        lateDeliveries.data.length > 0 && (
          <div className="panel mt-3">
            <Stack>
              <Box px={5}>
                <HStack justify={'space-between'} align={'center'} width={'100%'} mb={3}>
                  <Heading as="h3" size="md" mb={3}>
                    List of late Deliveries
                  </Heading>
                  <HStack>
                    <InputGroup size="md" data-testid="search-input-group">
                      <InputLeftElement pointerEvents="none">
                        <Search2Icon color="gray.300" />
                      </InputLeftElement>
                      <Input type="text" borderRadius={8} placeholder="Search" name="searchInput" />
                    </InputGroup>
                  </HStack>
                </HStack>
              </Box>
            </Stack>

            <div className="datatables">
              <DataTable
                definedColumns={DeliveryColumnsDef()}
                data={lateDeliveries.data}
                actions={{ hasBtnDelete: true }}
                pagination={pagination}
                onPaginationChange={onPaginationChange}
                totalRecords={lateDeliveries.metadata.totalItems}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};
