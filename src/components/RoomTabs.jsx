import HouseRule from '../components/HouseRule';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from './Reviews';

const RoomTabs = ({roomId}) => {
    return (
        <div className='w-2/3 mx-auto py-5 mb-16'>

            <Tabs>
                <TabList>
                    <Tab><span className='font-medium'>House Rules</span></Tab>
                    <Tab> <span className='font-medium'>Reviews</span></Tab>
                </TabList>

                <TabPanel>
                    <HouseRule></HouseRule>
                </TabPanel>
                <TabPanel>
                    <Reviews roomId={roomId}></Reviews>
                </TabPanel>
            </Tabs>


            </div>
    );
};

export default RoomTabs;