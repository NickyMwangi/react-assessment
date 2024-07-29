import { Box, Button, Card, HStack, Stack, VStack, Image, Text, Heading } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { checkCircle } from '../../assets';

type ToastProps = {
  msg: string;
  onClose: any;
  title?: string;
  bgColor?: string;
};

export const CustomToastMsg = ({ msg, onClose, title, bgColor }: ToastProps) => {
  return (
    <Stack mt={10} maxW="380px" border="1px solid" borderColor="#D0D5DD" borderRadius="12px">
      <Card padding={1} className="bg-primary">
        <HStack align="stretch" spacing={2}>
          <Box>
            <Image src={checkCircle} alt="no Company" />
          </Box>
          <VStack spacing={1}>
            <Box width="100%">
              <Heading fontSize="md" fontWeight={600} textColor={bgColor}>
                {title}
              </Heading>
              <Text fontSize="sm" textColor={bgColor}>
                {msg}
              </Text>
            </Box>
          </VStack>
          <Button variant="ghost" onClick={() => onClose()} p="8px">
            <FiX />
          </Button>
        </HStack>
      </Card>
    </Stack>
  );
};
