import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { WordInput } from "./WordInput";
import { Graph } from "./Graph";
import { initialiseDepths, updateDepths } from "./wordDepths";
import { TargetWord } from "./TargetWord";

export function App() {
  const [graph, setGraph] = useState({
    nodes: [{ id: "a", label: "a" }],
    edges: [],
  });
  const [selectedWord, setSelectedWord] = useState("a");

  const [depths, setDepths] = useState(initialiseDepths());
  updateDepths(depths, graph.nodes);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>
        Your current score is: {graph.nodes.length} /{" "}
        {Object.keys(depths).length}
      </Text>
      <WordInput
        setGraph={setGraph}
        graph={graph}
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
      />
      <Graph
        graph={graph}
        setSelectedWord={setSelectedWord}
        selectedWord={selectedWord}
      />
      <TargetWord depths={depths} graph={graph} />
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
