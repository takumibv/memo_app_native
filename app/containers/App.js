import { connect } from 'react-redux';
import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { SafeAreaView, View } from 'react-native';
import Main from './Main';

export default createSwitchNavigator({
  Main,
}, {
  initialRouteName: 'Main',
});
