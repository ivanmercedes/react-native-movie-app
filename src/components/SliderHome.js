import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Chip } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import Skeleton from "../skeleton";

import globalStyles from "../../style/globalStyles";

const SLIDER_WIDTH = Dimensions.get("window").width + 100;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const SliderHome = ({ movies, navigation }) => {
  const isCarousel = React.useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableWithoutFeedback
          onPress={()=> navigation.navigate("MovieDetailsScreen", {
            item,
          })}
        >
          <Image
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w780/${item.poster_path}`,
            }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>

        <View style={styles.header}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Chip
              containerStyle={{ marginHorizontal: 5 }}
              style={{ background: "#fff" }}
              title={
                item.release_date ? item.release_date : item.first_air_date
              }
            />
            <Chip
              containerStyle={{ marginHorizontal: 5 }}
              title={item.vote_average > 0 ? item.vote_average : "0"}
              icon={{
                name: "star",
                type: "font-awesome",
                size: 20,
                color: "orange",
              }}
              iconLeft
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: globalStyles.text.color,
              fontSize: 20,
              fontWeight: "bold",
              justifyContent: "center",
              padding: 10,
            }}
          >
            {item.title ? item.title : item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.containerSafe}>
      {movies.length > 0 ? (
        <Carousel
          layout="default"
          autoplay={true}
          loop={true}
          layoutCardOffset={9}
          ref={isCarousel}
          data={movies}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={false}
        />
      ) : (
        <View
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Skeleton
            bones={[
              {
                key: "uno",
                width: SLIDER_WIDTH,
                height: 500,
                marginBottom: 20,
              },
            ]}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginTop: 20,
  },
  container: {
    // backgroundColor: "#000000",
    overflow: "hidden",
    width: "100%",
    paddingBottom: 0,
    // shadowColor: "#000",
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
    overflow: "hidden",
    width: `100%`,
    height: globalStyles.height,
  },
  header: {
    color: "#f5f5f5",
    padding: 10,
    paddingTop: 10,
    width: "100%",
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default SliderHome;
