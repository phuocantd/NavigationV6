import React from 'react';
import {View, Text} from 'react-native';

const ScreenA = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#000',
        }}>
        Screen A
      </Text>
    </View>
  );
};

export default ScreenA;
