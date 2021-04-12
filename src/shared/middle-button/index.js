/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {styles} from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {hp, wp} from '../responsive-dimesion';
import {normalColors as colors} from '../../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const MiddleButton = () => {
  const refRBSheet = React.useRef();
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [showTime, setShowTime] = React.useState(false);
  const [showDate, setShowDate] = React.useState(false);

  const [value, setValue] = React.useState({
    index: '1',
    task: 'Important',
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDate(true);
  };

  const showTimepicker = () => {
    setShowTime(true);
  };

  const selectType = (id, value) => {
    setValue({index: id, task: value});
  };

  console.log(value);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => refRBSheet.current.open()}>
        <Icon name="plus" size={hp(40)} color={colors.white} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="slide"
        height={hp(580)}
        customStyles={{
          container: {
            borderTopLeftRadius: hp(30),
            borderTopRightRadius: hp(30),
            height: '70%',
          },
          wrapper: {
            backgroundColor: 'transparent',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          },

          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>Create a Task</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeader}>Task Title</Text>
            <TextInput placeholder="Task Title" style={styles.textInput} />
          </View>
          <View style={[styles.inputContainer, {marginTop: hp(20)}]}>
            <Text style={styles.inputHeader}>Task Type</Text>
            <View style={styles.taskLevelContainer}>
              {TaskType.map(item => (
                <TouchableOpacity
                  key={item.id + item.type}
                  style={[
                    styles.taskLevelButton,
                    {
                      backgroundColor:
                        value.index === item.id ? colors.purple300 : '#F7F8FA',
                    },
                  ]}
                  onPress={() => selectType(item.id, item.type)}
                  activeOpacity={0.7}>
                  <Text
                    style={[
                      styles.taskLevelButtonText,
                      {
                        color: value.index === item.id ? colors.white : '#000',
                      },
                    ]}>
                    {item.type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={[styles.inputContainer, {marginTop: hp(30)}]}>
            <Text style={styles.inputHeader}>Choose date & time</Text>
            <View style={styles.taskScheduleContainer}>
              <View>
                <TouchableOpacity
                  onPress={showDatepicker}
                  style={styles.taskScheduleDate}>
                  <Icon name="calendar-plus" size={20} />
                  <Text style={styles.scheduleText}>Select a date</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={showTimepicker}
                style={styles.taskScheduleTime}>
                <Icon name="clock-time-three-outline" size={20} />
                <Text style={styles.scheduleText}>Select time</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={styles.scheduleText}
              />
            )}
            {showTime && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={styles.scheduleText}
              />
            )} */}
          <View style={[styles.inputContainer, {marginTop: hp(30)}]}>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => refRBSheet.current.close()}
                style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const TaskType = [
  {
    id: '1',
    type: 'Important',
  },

  {
    id: '2',
    type: 'Planned',
  },
];

export default MiddleButton;
