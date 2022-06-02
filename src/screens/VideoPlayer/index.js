import React, { useRef, useState, useEffect, useCallback } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import YoutubePlayer from "react-native-youtube-iframe";

const VIDEO_WIDTH = Dimensions.get("window").height;
const VIDEO_HEIGHT = Dimensions.get("window").width;
const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      // Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    const changeOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE,
      );
    };
    changeOrientation();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      /> */}
      <YoutubePlayer
        height={VIDEO_HEIGHT}
        width={VIDEO_WIDTH}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    width: VIDEO_WIDTH,
    height: VIDEO_HEIGHT,
  },
});

export default VideoPlayer;
