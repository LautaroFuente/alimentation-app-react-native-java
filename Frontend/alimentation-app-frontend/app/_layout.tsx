import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

const PublicLayout = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Header general</Text>
      <StatusBar style="auto" />
      <Stack />
    </View>
  );
};

export default PublicLayout;
