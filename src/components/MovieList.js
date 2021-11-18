import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import globalStyles from "../../style/globalStyles";
import Skeleton from "../skeleton";

const CardMovie = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MovieDetailsScreen", {
          item,
        })
      }
      style={styles.cardImage}
    >
      <Image
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`,
        }}
        style={styles.Image}
      />
      {/* <Text style={styles.title}>{item.original_title? item.original_title : item.name}</Text> */}
    </TouchableOpacity>
  );
};

const MovieList = ({ movies, title, navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      {movies.length > 0 ? (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.containerFlex}>
            {movies.map((movie) => (
              <CardMovie
                navigation={navigation}
                route={route}
                key={movie.id}
                item={movie}
              />
            ))}
          </View>
        </>
      ) : 
      <>
        <Skeleton
          bones={[
            { key: "uno", width: `80%`, height: 50, marginBottom: 20 },
          ]}
        />
        <View style={styles.containerFlex}>
         
        <Skeleton
          bones={[
            { key: "uno", width: `95%`, height: 280, marginBottom: 15 },
          ]}
        />
        <Skeleton
          bones={[
            { key: "uno", width: `95%`, height: 280, marginBottom: 15 },
          ]}
        />
        </View>
        </>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  containerFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: globalStyles.text.color,
  },
  cardImage: {
    flex: 0,
    display: "flex",
    width: "50%",
    height: 280,
    margin: 0,
    padding: 5,
    borderWidth: 0,
  },
  Image: {
    borderRadius: 10,
    flex: 1,
  },
});

export default MovieList;
