import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Chip, Tile } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import * as ScreenOrientation from "expo-screen-orientation";

import { getCast } from "../../api/tmdb";
import ActorList from "../../components/ActorList";

import globalStyles from "../../../style/globalStyles";
import styles from "./styles";

const MovieScreen = ({ route, navigation }) => {
  const {
    id,
    original_title,
    backdrop_path,
    name,
    overview,
    vote_average,
    release_date,
    first_air_date,
    media_type,
  } = route.params.item;

  const [cast, setCast] = useState([]);

  const loadingCast = async () => {
    const castResult = await getCast(id, media_type);
    // console.log(castResult);

    const actor = castResult.filter(
      (cast) => cast.known_for_department == "Acting",
    );
    setCast({
      ...cast,
      actor,
    });
  };

  useEffect(() => {
    const onMount = async () => {
      await loadingCast();
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    };
    onMount();

  }, []);

  return (
    <ScrollView style={globalStyles.bg}>
      <Tile
        onPress={() => navigation.navigate("VideoPlayer")}
        style={{
          marginBottom: 0,
        }}
        icon={{
          backgroundColor: "red",
          borderRadius: 30,
          paddingVertical: 8,
          paddingHorizontal: 10,
          color: "white",
          borderRadius: 50,
          name: "play",
          type: "font-awesome",
          size: 15,
        }}
        featured={true}
        activeOpacity={0.8}
        imageSrc={{
          uri: `https://image.tmdb.org/t/p/w780/${backdrop_path}`,
        }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "transparent", "#111111c1", "#111111f6"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 240,
          height: 100,
          zindex: -1,
        }}
      />

      <View
        style={{
          padding: 10,
          flex: 1,
          flexDirection: "row",
          // justifyContent: "start",
          marginTop: 20,
        }}
      >
        <Chip
          containerStyle={{ marginHorizontal: 5 }}
          style={{ background: "#fff" }}
          title={release_date ? release_date : first_air_date}
        />
        <Chip
          containerStyle={{ marginHorizontal: 5 }}
          title={vote_average > 0 ? vote_average : "0"}
          icon={{
            name: "star",
            type: "font-awesome",
            size: 20,
            color: "orange",
          }}
          iconLeft
        />
      </View>

      <View style={globalStyles.container}>
        <Text style={styles.title}>
          {original_title ? original_title : name}
        </Text>

        <Text style={styles.description}>{overview}</Text>
      </View>

      <View>{cast.actor ? <ActorList actors={cast.actor} /> : null}</View>
    </ScrollView>
  );
};

export default MovieScreen;
