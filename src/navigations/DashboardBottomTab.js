import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {hp, wp, getBottomSpace} from '../shared/responsive-dimesion';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {globalStyle} from '../style';
import {consumerNormalColors as colors} from '../colors';
import Dashboard from '../dashboard';
import Setting from '../dashboard/setting';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

const hapticOptions = {
  enableVibrationFallBack: true,
  ignoreAndroidSystemSettings: false,
};

const {main} = globalStyle(colors);

function LeftButton({isVisible}) {
  if (isVisible) {
    return (
      <View style={styles.leftButtonsContainer}>
        <TabButton routeName={'Home'} />
      </View>
    );
  }
}

function RightButton({isVisible}) {
  if (isVisible) {
    return (
      <View style={styles.rightButtonsContainer}>
        <TabButton routeName={'Setting'} />
      </View>
    );
  }
}

const Tab = createBottomTabNavigator();

const getIcon = name => {
  switch (name.toLowerCase()) {
    case 'home':
      return <Icon name="home" size={20} />;
    case 'setting':
      return <Icon name="setting" size={20} />;

    default:
      break;
  }
};

function DashboardBottomTab() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowHidden, setOverflowHidden] = useState(false);

  const handleLauncherPress = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => setOverflowHidden(false), 300);
      return;
    }
    setIsExpanded(true);
    setOverflowHidden(true);
    ReactNativeHapticFeedback.trigger('impactHeavy', hapticOptions);
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#303041',
        tabStyle: {
          height: wp(60),
          paddingTop: wp(10),
          // borderWidth: 1,
        },
        style: {
          height: wp(60) + getBottomSpace(),
          // backgroundColor: 'aqua',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <LeftButton isVisible={!isExpanded} />,
        }}
        name=" "
        component={Dashboard}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Home');
          },
        })}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            // <MiddleButton
            // // handleLauncherPress={handleLauncherPress}
            // // isExpanded={isExpanded}
            // // isOverflowHidden={isOverflowHidden}
            // />
            <Icon name="plussquare" size={50} style={styles.addButton} />
          ),
        }}
        name="  "
        component={Dashboard}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            // navigation.navigate('Nearby');
            console.log('wrong');
          },
        })}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <RightButton isVisible={!isExpanded} />,
        }}
        name="   "
        component={Setting}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Setting');
          },
        })}
      />
    </Tab.Navigator>
  );
}

const TabButton = ({routeName, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName)}
      accessibilityRole="button"
      style={styles.tabContainer}>
      {getIcon(routeName)}
    </TouchableOpacity>
  );
};

export default DashboardBottomTab;

const styles = StyleSheet.create({
  //end of arch styles
  tabText: {
    ...main.semiBoldText12,
    color: '#303041',
  },
  rightButtonsContainer: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonsContainer: {
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    bottom: hp(20),
    height: hp(50),
  },
  arrowIcon: {
    marginLeft: wp(25),
    marginRight: wp(30),
  },

  tabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(4),
    height: hp(48),
    width: 80,
  },

  container: {
    backgroundColor: '#fff',
    zIndex: 1000,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    shadowOpacity: 0,
  },
});