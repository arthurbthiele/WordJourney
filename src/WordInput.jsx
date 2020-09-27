import React from "react";
import { words } from "./words";
import { TextInput, Text, Button, View } from "react-native";
import { wordsAreConnected } from "./wordAreConnected";

export const WordInput = ({
  setGraph,
  graph,
  selectedWord,
  setSelectedWord,
}) => {
  const [value, setValue] = React.useState("Please Enter a Word");
  const wordIsValid = words.includes(value);
  const message = wordIsValid
    ? "This word is in the dictionary!"
    : "This is NOT in the dictionary";
  const onPress = () => {
    const newNode = { id: value, label: value };
    const newEdges = [{ from: selectedWord, to: value }];
    if (wordIsValid && selectedWord && wordsAreConnected(value, selectedWord)) {
      setGraph({
        nodes: [...graph.nodes, newNode],
        edges: [...graph.edges, ...newEdges],
      });
      setSelectedWord(newNode);
    }
  };

  return (
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 0.5,
          justifyContent: "center",
          padding: 12,
        }}
        onChangeText={(text) => setValue(text)}
        value={value}
      />

      <Text
        style={{
          marginTop: 10,
          marginBottom: 10,
          color: wordIsValid ? "green" : "red",
        }}
      >
        {message}
      </Text>
      <Button onPress={onPress} title={"Input node and edge"} />
    </View>
  );
};