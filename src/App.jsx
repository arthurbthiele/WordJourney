import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { WordInput } from "./WordInput";
import { Graph } from "./Graph";

export function App() {
  const [graph, setGraph] = useState({
    nodes: [{ id: "a", label: "a" }],
    edges: [],
  });
  const [selectedWord, setSelectedWord] = useState();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WordInput
        setGraph={setGraph}
        graph={graph}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
      />
      <Graph graph={graph} setSelectedWord={setSelectedWord} selectedWord />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999999",
    alignItems: "center",
    paddingTop: 24,
  },
});
