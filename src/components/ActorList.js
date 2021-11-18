import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { Avatar, Divider, Text } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

import theme from "../../style/theme";

const SLIDER_WIDTH = Dimensions.get("window").width + 0;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const ActorList = ({ actors }) => {
  const isCarousel = React.useRef(null);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        key={index}
      >
        <Avatar
          containerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          icon={{ name: "person" }}
          size="xlarge"
          onPress={() => console.log(item)}
          activeOpacity={0.7}
          rounded
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${item.profile_path}`,
          }}
        />
        <Text
          style={{
            color: theme.color,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {item.character}
        </Text>
        <Text style={styles.actorName}>{item.original_name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 10,
          color: theme.color,
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        Actor
      </Text>

      <SafeAreaView style={{}}>
        <View style={{}}>
          <Carousel
            layout={"default"}
            ref={isCarousel}
            data={actors}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={200}
            inactiveSlideShift={1}
            autoplay={true}
            loop={true}
            layoutCardOffset={9}
            useScrollView={true}
            //   onSnapToItem = { index => this.setState({activeIndex:index}) }
          />
        </View>
      </SafeAreaView>

      {/* <View style={styles.containerFlex}>
        {actors.map((actor) => (
          <View style={styles.AvatarCard} key={actor.id}>
            <Avatar
              containerStyle={{
                flex: 0,
                marginLeft: 20,
              }}
              icon={{ name: "person" }}
              size="xlarge"
              onPress={() => console.log(actor)}
              activeOpacity={0.7}
              rounded
              source={{
                uri: `https://image.tmdb.org/t/p/w185/${actor.profile_path}`,
              }}
            />
            <Text
              style={{
                color: theme.color,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {actor.character}
            </Text>
            <Text style={styles.actorName}>{actor.original_name}</Text>
          </View>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 0,
  },
  containerFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  AvatarCard: {
    width: "50%",
    marginBottom: 10,
    textAlign: "center",
  },
  actorName: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ActorList;
