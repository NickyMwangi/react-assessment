import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DeliveryTabs } from '../utils';
import { setPageTitle } from '../store/slice/theme-config-slice';
import { CombinedDelivery, EarlyDelivery, LateDelivery, PageHeader } from '../components';

export const Deliveries = () => {
  const tabs = DeliveryTabs;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Deliveries'));
  }, []);

  return (
    <div>
      <PageHeader title={'Deliveries'} sub={'Early and Late Deliveries'} />
      <div className="panel mt-3">
        <Box>
          <Tabs defaultIndex={0} variant="enclosed" isLazy isManual data-testid="settings-tabs">
            <TabList bg={'inherit'} color={'#667085'} p={'5px'} borderRadius={'8px'}>
              {tabs.map((tab) => (
                <Tab
                  className="bg-black-light dark:bg-black-dark-light"
                  _selected={{
                    color: 'text-primary',
                    bg: 'bg-secondary-light',
                    shadow: 'md'
                  }}
                  _focus={{ boxShadow: 'md', bg: 'bg-primary' }}
                  fontWeight={600}
                  fontSize={'14px'}
                  lineHeight={'20px'}
                  key={tab.stepName}>
                  {`${tab.stepName} | ${tab.title}`}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <CombinedDelivery />
              </TabPanel>
              <TabPanel>
                <EarlyDelivery />
              </TabPanel>
              <TabPanel>
                <LateDelivery />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};
