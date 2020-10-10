import React, { useState } from "react";
import { TextInput, Text, Button, View } from "react-native";

export const TargetWord = ({ depths, graph }) => {
  const [target, setTarget] = useState();
  const [difficultyLevel, setDifficultyLevel] = useState(3);
  const [value, setValue] = useState(3);
  if (!target || graph.nodes.map((n) => n.id).includes(target)) {
    const wordsOfThisDepth = Object.keys(depths).filter(
      (word) => depths[word] === difficultyLevel
    );
    const choiceIndex = Math.floor(Math.random() * wordsOfThisDepth.length);
    setTarget(wordsOfThisDepth[choiceIndex]);
  }
  const onPress = () => {
    setDifficultyLevel(parseInt(value));
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
        onSubmitEditing={onPress}
        blurOnSubmit={false}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <Button onPress={onPress} title={"Input"} />
      <Text>Try finding the word </Text>
      <Text style={{ color: "red" }}>{target}</Text>
    </View>
  );
};
