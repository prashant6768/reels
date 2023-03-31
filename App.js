// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';

// export default function App() {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   return (
//     <View style={styles.container}>
//       <Video
//         ref={video}
//         style={styles.video}
//         source={{
//           uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//         }}
//         useNativeControls
//         resizeMode="cover"
//         isLooping
//         // shouldPlay
//         onPlaybackStatusUpdate={status => setStatus(() => status)}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   video: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0
//   }
// });


import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const App = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={colors}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default App;
