import { FC, ReactNode } from 'react';
import { Box, Divider, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { MdEvent } from 'react-icons/md';

interface IPageHeaderProps {
  title: string;
  sub?: string;
  subcomponent?: ReactNode;
  ActionButton?: FC;
  breadcrumbs?: ReactNode[];
}
export function PageHeader({ title, sub, ActionButton, breadcrumbs }: IPageHeaderProps) {
  return (
    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
      <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
        <MdEvent />
      </div>
      <Box data-testid="pageheader" ps={'4px'} w={'100%'} mb={1}>
        <HStack align="center">
          <VStack pb={1} w={'100%'} align="flex-start">
            {breadcrumbs && breadcrumbs}
            <HStack>
              <Heading fontSize={30} fontWeight={600}>
                {title}
              </Heading>
              {ActionButton && <ActionButton />}
              {ActionButton && <Spacer />}
            </HStack>
            {sub && (
              <Text fontSize={14} fontWeight={300}>
                {sub}
              </Text>
            )}
          </VStack>
          <Spacer />
        </HStack>

        <Divider orientation="horizontal" />
      </Box>
    </div>
  );
}
