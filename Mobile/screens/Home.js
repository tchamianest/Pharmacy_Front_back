import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import React from "react";
import Searchsections from "../components/Searchsections";

export default function HomePage() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      {/* Search icons  */}
      <Searchsections />
    </SafeAreaView>
  );
}
