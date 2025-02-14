import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from '../screens/TaskList';
import Projects from '../screens/Projects';

const Tab = createBottomTabNavigator();

const RootNavigaion = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Tasks" component={TaskList} />
            <Tab.Screen name="Projects" component={Projects} />
        </Tab.Navigator>
    )
}

export default RootNavigaion