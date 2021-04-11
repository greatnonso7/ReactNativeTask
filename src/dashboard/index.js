/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {styles} from './style';

import {images} from '../images';
import {hp} from '../shared/responsive-dimesion';

const {profile} = images;

const Dashboard = () => {
  const refRBSheet = React.useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.name}>Abdur Rahman</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={profile.user}
              resizeMode="contain"
              style={styles.profile}
            />
          </View>
        </View>
      </View>
      <View style={{marginTop: hp(40)}}>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={styles.navButtons}>
              <Text style={styles.buttonTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: hp(50)}}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View
        style={{
          marginTop: hp(20),
          marginHorizontal: hp(20),
        }}>
        <Text style={styles.taskTitle}>Tasks</Text>

        <FlatList
          data={Tasks}
          renderItem={({item}) => (
            <View key={item.id} style={styles.tasksContainer}>
              <View>
                <Text style={styles.taskHeading}>{item.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="calendar-today" size={25} />
                  <Text>{item.date}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="alarm" size={20} />
                  <Text>{item.time}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <View style={styles.radio} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingRight: hp(50)}}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={{marginTop: hp(20), marginHorizontal: hp(20)}}>
        <Text style={styles.taskTitle}>Completed</Text>

        <FlatList
          data={Completed}
          renderItem={({item}) => (
            <View key={item.id} style={styles.tasksContainer}>
              <View>
                <Text style={styles.completedHeading}>{item.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="calendar-today" size={25} />
                  <Text>{item.date}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="alarm" size={20} />
                  <Text>{item.time}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Icon name="check-circle" color="#5a3ea4" size={35} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingRight: hp(50)}}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => refRBSheet.current.open()}
        />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View>
            <Text>Create a Task</Text>
          </View>
        </RBSheet>
      </View>
      <View style={{position: 'absolute', bottom: 0, right: hp(180)}}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const Data = [
  {
    id: '1',
    title: 'My Day',
  },
  {
    id: '2',
    title: 'Important',
  },
  {
    id: '3',
    title: 'Planned',
  },
];

const Tasks = [
  {
    id: '1',
    title: 'Meeting with Alex',
    date: '12/20/2019',
    time: '12:30 PM - 01:00 PM',
  },
  {
    id: '2',
    title: 'Project Review: Crodox',
    date: '12/20/2019',
    time: '2:30 PM - 03:34 PM',
  },
];
const Completed = [
  {
    id: '1',
    title: 'Meeting with Mark',
    date: '12/20/2019',
    time: '12:30 PM - 01:00 PM',
  },
];

export default Dashboard;
