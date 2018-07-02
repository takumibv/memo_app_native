// 必要なリソース追加する
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import { Icon } from 'native-base';
import {
  NavigationActions,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';
import MemoList from '../MemoList/index';

// import VisibleMemoList from '../VisibleMemoList'
// import MemoList from '../MemoList'

const menu_dict = {
  MemoList: ['ダッシュボード', 'bar-chart-o'],
  Inbox: ['受信箱', 'inbox'],
  UserListTop: ['ユーザー整理', 'users'],
  TweetManager: ['ツイートマネージャ', 'comments'],
};

const Tab = createBottomTabNavigator({
    MemoList: {screen: MemoList},
    // Inbox: {screen: UserList},
    // UserListTop: {screen: UserListTop},
    // TweetManager: {screen: TweetManager},
  },
  {
    navigationOptions: ({navigation}) => {
      const item = menu_dict[navigation.state.routeName];
      return {
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name={item[1]} type="FontAwesome"/>;
        },
        tabBarLabel: item[0],
      };
    },
    initialRouteName: 'MemoList',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tab/>
      </View>
    );
    // return (
    //   <View style={styles.container}>
    //     <VisibleMemoList />
    //     <MemoList />
    //   </View>
    // );
  }
}

// ビューのスタイル修正
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#1D9FF2"
  }
});

// このContainerを利用できるためエクスポートします
export default MainContainer;
