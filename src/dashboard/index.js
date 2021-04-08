import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
};

export default Dashboard;
