import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoritesPage from "../../components/health-seeker-flow/profile/favourites";
import { Header } from "../../utilities/headers";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Header title="Favourites" profileCompletion="" />

      <FavoritesPage />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
