import React from 'react';
import {View, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Screen A'}
        onPress={() => navigation.navigate('ScreenA')}
      />
    </View>
  );
};

export default Home;
