import { Box, Skeleton, Stack } from '@chakra-ui/react';

export const CardSkeletonLoader = () => (
  <Box padding="6" boxShadow="lg" bg="white" data-testid="card-skeleton" width={'100%'}>
    <Skeleton height="200px" mb="4" />
    <Stack spacing="4">
      <Skeleton height="20px" width="70%" />
      <Skeleton height="15px" width="80%" />
      <Skeleton height="15px" width="60%" />
    </Stack>
  </Box>
);
