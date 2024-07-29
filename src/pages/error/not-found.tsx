import { Box, Grid, Heading, Text, VStack, Image, Button } from '@chakra-ui/react';
import { NotFoundImage } from '../../assets';
import { Link } from 'react-router-dom';
import { defaultRoute } from '../../routes/app-routes';
import { BsArrowLeft } from 'react-icons/bs';

export function NotFound() {
  return (
    <Grid minHeight="100vh" templateColumns={{ base: '1fr', md: '6fr 6fr' }} gap={6}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '20px'
        }}
        w="100%"
        h="100%">
        <VStack maxW="24rem" align={'start'}>
          <Heading as="h2" size="xl" mb={3}>
            Uh oh... We could not load this page.
          </Heading>
          <Text fontSize="md" mb={3}>
            Click the reload page button below so that we can try load this page again. If the problem persists please
            inform an IT admin.
          </Text>

          <Button
            colorScheme="red"
            as={Link}
            to={defaultRoute}
            leftIcon={<BsArrowLeft />}
            fontWeight={400}
            variant="solid">
            Back Home
          </Button>
        </VStack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '20px'
        }}
        w="100%"
        h="100%">
        <Image src={NotFoundImage} alt="Not Found" />
      </Box>
    </Grid>
  );
}
