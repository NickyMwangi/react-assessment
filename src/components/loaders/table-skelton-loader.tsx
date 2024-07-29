import { Box, Skeleton, Stack } from '@chakra-ui/react';

export const TableSkeletonLoader = () => (
  <Box width="100%" overflowX="auto" data-testid="table-skeleton">
    <Stack>
      {[...Array(5)].map((_, index) => (
        <Box key={index} display="flex" padding="4" borderBottom="1px solid" borderColor="gray.200">
          <Skeleton height="20px" width="10%" />
          <Skeleton height="20px" width="20%" marginLeft="4" />
          <Skeleton height="20px" width="30%" marginLeft="4" />
          <Skeleton height="20px" width="40%" marginLeft="4" />
          <Skeleton height="20px" width="40%" marginLeft="4" />
          <Skeleton height="20px" width="40%" marginLeft="4" />
        </Box>
      ))}
    </Stack>
  </Box>
);
