import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/slice/theme-config-slice';
import { PageHeader } from '../components';
import { useAxiosCrud } from '../hooks';
import { OrderEndpoints } from '../endpoints';

export const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Dashboard'));
  }, []);
  const { response, isLoading, axiosCrud } = useAxiosCrud();

  const initialTime = Number(localStorage.getItem('timer')) || 0;
  const [elapsedTime, setElapsedTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + 1;
        localStorage.setItem('timer', newTime.toString()); // Save the updated time
        axiosCrud({
          method: 'post',
          url: OrderEndpoints.postTimer(),
          requestConfig: {
            ...{ CurrTime: 'tests', TimeText: 'Test timer' }
          }
        });
        return newTime;
      });
    }, 1000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const formatTime = (time: any) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const timerResp = useMemo(() => {
    return response && response.message;
  }, [isLoading]);

  return (
    <div>
      <PageHeader title={'Dashboard'} sub={'Nickson assessment - Niclausel@gmail.com'} />
      <div className="panel mt-3">
        <HStack as="main" gap={0}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
            w="100%"
            h="100%">
            <VStack maxW="100rem" align={'center'}>
              <Heading as="h3" size="lg" mb={3}>
                Welcome to Nickson assessment
              </Heading>
              <Text fontSize="md" mb={3}>
                Just a proof of concept
              </Text>
            </VStack>
          </Box>
        </HStack>
        <div className="text-center text-primary font-bold text-2xl">
          <h1>Time Spent: {formatTime(elapsedTime)}</h1>
          <small>{timerResp}</small>
        </div>
      </div>
    </div>
  );
};
