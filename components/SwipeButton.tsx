import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//@ts-ignore
import Swipeable from 'react-native-swipeable';


export default function SwipeButton(props: any) {
  const {
    onOpen,
    onClose
  } = props;
  return (
    <View>
      <Text style={styles.text}>SwipeButton</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
})