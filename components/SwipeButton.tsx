import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


export default function SwipeButton(props: any) {
  const {
    onOpen,
    onClose
  } = props;

  const renderRightActions = () => (
    <>
      <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'lightseagreen' }]}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'orchid' }]}>
        <Text>2</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <>
      <View>
        <Text style={styles.text}>SwipeButton</Text>
      </View>

      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={onOpen}
        onSwipeableClose={onClose}
      >
        <View style={[styles.listItem, { backgroundColor: 'salmon' }]}>
          <Text>Example 1</Text>
        </View>
      </Swipeable>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  rightSwipeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  listItem: {
    padding: 20,
  },
})