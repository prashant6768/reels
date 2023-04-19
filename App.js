import * as React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { colors } from 'react-native-swiper-flatlist/src/themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { data } from 'data';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { FlatList } from 'react-native';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const renderItem = () => {
    return (
      <View>
        <Text>Ddddddd</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <FlatList
        data={data}
        renderItem={renderItem}
      />
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        // useNativeControls
        resizeMode="cover"
        isLooping
        // shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <SafeAreaView style={{ margin: 16 }}>
        <View style={styles.flexHorizontal}>
          <Text style={styles.textStyle}>Reels</Text>
          <Ionicons name="camera-outline" size={28} color="white" />
        </View>
      </SafeAreaView>
      <View style={styles.bottomView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" }}
            style={styles.profileImageStyle}
          />
          <Text style={{ marginHorizontal: 8 }}>Prashant Hanamghar</Text>
          <TouchableOpacity>
            <Text>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text numberOfLines={1} style={{ flex: 1 }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</Text>
          <TouchableOpacity>
            <Text>more</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.flexHorizontal, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="heart-outline" size={28} color="white" />
            <Ionicons style={{ marginHorizontal: 8 }} name="chatbubble-outline" size={28} color="white" />
            <Ionicons name="paper-plane-outline" size={28} color="white" />
            <Ionicons style={{ marginHorizontal: 8 }} name="bookmark-outline" size={28} color="white" />
            <Ionicons name="ellipsis-horizontal" size={28} color="white" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="heart" size={15} color="white" />
              <Text style={{ marginHorizontal: 4 }}>94.6k</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="chatbubble" size={15} color="white" />
              <Text style={{ marginLeft: 4 }}>112</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  flexHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  profileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});


// import React from 'react';
// import { Text, Dimensions, StyleSheet, View } from 'react-native';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';

// const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

// const App = () => (
//   <View style={styles.container}>
//     <SwiperFlatList
//       autoplay
//       autoplayDelay={2}
//       autoplayLoop
//       index={2}
//       showPagination
//       data={colors}
//       renderItem={({ item }) => (
//         <View style={[styles.child, { backgroundColor: item }]}>
//           <Text style={styles.text}>{item}</Text>
//         </View>
//       )}
//     />
//   </View>
// );

// const { width } = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   child: { width, justifyContent: 'center' },
//   text: { fontSize: width * 0.5, textAlign: 'center' },
// });

// export default App;
