import { Badge, Box, HStack, Text } from '@chakra-ui/react';

export const ColorIcon = ({ color, ...props }: any) => (
  <Box width="8px" height="8px" bg={color} borderRadius="50%" {...props} />
);

// eslint-disable-next-line react/prop-types
export const TableEarlyLate = ({ getValue }: any) => {
  const value = getValue() || '';
  return (
    <>
      {value === 'Early' ? (
        <Badge
          border="1px"
          borderColor="inherit"
          colorScheme="white"
          borderRadius="6px"
          px="8px"
          py="2px"
          textTransform={'capitalize'}>
          <HStack>
            <ColorIcon color="#36D181" /> <Text>{value}</Text>
          </HStack>
        </Badge>
      ) : (
        ''
      )}

      {value === 'Late' ? (
        <Badge
          border="1px"
          borderColor="inherit"
          colorScheme="white"
          borderRadius="6px"
          px="8px"
          py="2px"
          textTransform={'capitalize'}>
          <HStack>
            <ColorIcon color="#FF5151" /> <Text>{value}</Text>
          </HStack>
        </Badge>
      ) : (
        ''
      )}
    </>
  );
};
