import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { getTrending } from "../../api/tmdb";
import MovieList from "../../components/MovieList";
import SliderHome from "../../components/SliderHome";
import globalStyles from "../../../style/globalStyles";

const HomeScreen = ({ navigation, route }) => {
  const [trending, setTrending] = useState([]);
  const [upComing, setUpComing] = useState([]);

  const loadingTrending = async () => {
    const { trendingWeek, upcoming } = await getTrending();
    setTrending(trendingWeek);
    setUpComing(upcoming);
  };

  useEffect(() => {
    loadingTrending();
  }, []);

  return (
    <ScrollView style={globalStyles.bg}>
      <SliderHome movies={upComing} navigation={navigation} />
      <View style={{ flex: 1 }}>
        <MovieList
          navigation={navigation}
          route={route}
          movies={trending}
          title="Trending this Week"
          style={{ flex: 1 }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
