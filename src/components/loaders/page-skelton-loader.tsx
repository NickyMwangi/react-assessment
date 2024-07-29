import { Box, Skeleton, Stack } from '@chakra-ui/react';

export const PageSkeletonLoader = () => (
  <Stack data-testid="page-skeleton" width={'100%'}>
    <Skeleton height="20px" width="100%" />
    <Box>
      <Skeleton height="15px" width="80%" />
      <Skeleton height="15px" width="90%" />
      <Skeleton height="15px" width="85%" />
    </Box>
    <Box>
      <Skeleton height="250px" />
    </Box>
  </Stack>
);
