import React, { useRef } from "react";
import { wordGraph } from "./graphEntries";
import { TextInput, Text, Button, View } from "react-native";
import { wordsAreConnected } from "./wordAreConnected";

export const WordInput = ({
  setGraph,
  graph,
  selectedWord,
  setSelectedWord,
}) => {
  const [value, setValue] = React.useState("");
  const textInputRef = useRef();

  const wordIsValid = value in wordGraph;
  const message = wordIsValid
    ? "This word is in the dictionary!"
    : "This is NOT in the dictionary";
  const onPress = () => {
    const newNode = { id: value, label: value };
    const newEdges = [{ from: selectedWord, to: value }];
    if (selectedWord && wordIsValid && wordsAreConnected(value, selectedWord)) {
      setGraph({
        nodes: [...graph.nodes, newNode],
        edges: [...graph.edges, ...newEdges],
      });
      setSelectedWord(newNode.id);
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
        onSubmitEditing={() => {
          onPress();
          textInputRef.current._handleFocus();
        }}
        blurOnSubmit={false}
        selectTextOnFocus
        ref={textInputRef}
        onChangeText={(text) => setValue(text)}
        placeholder="Please enter a word..."
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
