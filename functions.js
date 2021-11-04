import 'react-native-reanimated';

export const sayHello = cb => {
  'worklet';
  console.log('Hello from UI thread:');
  cb();
};
