import { Image, StyleSheet, Platform, TouchableHighlight, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
//@ts-ignore
import Swipeable from 'react-native-swipeable';

import SwipeButton from '@/components/SwipeButton';

export default function TestScreen() {
  // const leftContent = <ThemedText type="subtitle">Pull to activate</ThemedText>;

  // const rightButtons = [
  //   <TouchableHighlight><ThemedText type="subtitle">Button 1</ThemedText></TouchableHighlight>,
  //   <TouchableHighlight><ThemedText type="subtitle">Button 2</ThemedText></TouchableHighlight>
  // ];

  // const MyListItem = () => {
  //   return (
  //     <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
  //       <ThemedText type="subtitle">My swipeable content</ThemedText>
  //     </Swipeable>
  //   );
  // };
  const leftContent = <Text>Pull to activate</Text>;

  const rightButtons = [
    <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
  ];

  const MyListItem = () => {
    return (
      <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
        <Text>My swipeable content</Text>
      </Swipeable>
    );
  }


  return (
    <>
       <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
          <ThemedText type="subtitle">My swipeable content</ThemedText>
          <SwipeButton />
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
