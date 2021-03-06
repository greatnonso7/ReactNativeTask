/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {normalColors as colors} from '../colors';
import {connect} from 'react-redux';
import {images} from '../images';
import Moment from 'moment';
import {hp} from '../shared/responsive-dimesion';

const {profile} = images;

const Dashboard = props => {
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  const [value, setValue] = React.useState({
    index: '1',
    task: 'My Day',
  });
  const selectType = (id, value) => {
    setValue({index: id, task: value});
  };

  React.useEffect(() => {
    props.getTasks();
    forceUpdate();
    console.log('Called how many times');
  });
  const tasks = props.tasks;

  const completeTask = async id => {
    await props.completeTask(id);
    console.log(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.name}>Ichoku Chinonso</Text>
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
              onPress={() => selectType(item.id, item.type)}
              style={[
                styles.navButtons,
                {
                  backgroundColor:
                    value.index === item.id ? colors.purple300 : '#F7F8FA',
                },
              ]}>
              <Text
                style={[
                  styles.buttonTitle,
                  {
                    color: value.index === item.id ? colors.white : '#000',
                  },
                ]}>
                {item.title}
              </Text>
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

        {tasks &&
          tasks.map(item => (
            <View>
              <Text>{item.task}</Text>
            </View>
          ))}

        {/* {props.tasks.length === 0 ? (
          <View>
            <Text>No Tasks have been added</Text>
          </View>
        ) : (
          <FlatList
            data={props.tasks}
            renderItem={({item}) => (
              <View key={item.taskId} style={styles.tasksContainer}>
                <View>
                  <Text style={styles.taskHeading}>{item.task}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="calendar-today" size={25} />
                    <Text>{Moment(item.date).format('DD-MM-YYYY')}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="alarm" size={23} />
                    <Text>{Moment(item.time).format('LT')}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity onPress={() => completeTask(item.taskId)}>
                    <View style={styles.radio} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingRight: hp(50)}}
            keyExtractor={item => item.taskId.toString()}
          />
        )} */}
      </View>
      <View style={{marginTop: hp(20), marginHorizontal: hp(20)}}>
        <Text style={styles.taskTitle}>Completed</Text>
        <FlatList
          data={props.tasks}
          renderItem={({item}) =>
            props.tasks.length && item.isCompleted === '1' ? (
              <View key={item.id} style={styles.tasksContainer}>
                <View>
                  <Text style={styles.completedHeading}>{item.task}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="calendar-today" size={25} />
                    <Text>{Moment(item.date).format('DD-MM-YYYY')}</Text>
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
            ) : (
              <Text>No Completed Task</Text>
            )
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingRight: hp(50)}}
          keyExtractor={item => item.task.toString()}
        />
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

const mapStateToProps = ({Task}) => ({
  tasks: Task.tasks,
});

const mapDispatchToProps = ({Task: {getTasks, completeTask}}) => ({
  getTasks: () => getTasks(),
  completeTask: id => completeTask(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
