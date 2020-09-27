import GraphVis from "react-graph-vis";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const options = {
  edges: {
    arrows: {
      to: false,
    },
  },
};

export const Graph = ({ graph, setSelectedWord, selectedWord }) => {
  const [selectedNodes, setSelectedNodes] = useState();
  const events = {
    select: (event) => {
      setSelectedNodes(event.nodes);
      setSelectedWord(event.nodes[0]);
    },
  };
  return (
    <>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderWidth: 2,
          width: 800,
          height: 500,
          backgroundColor: "white",
        }}
      >
        <GraphVis
          graph={graph}
          options={options}
          events={events}
          selectedNodes={[selectedWord]}
        />
      </View>
      {selectedNodes && selectedNodes[0] !== undefined && (
        <Text>{`The currently selected word is ${selectedNodes[0]}`}</Text>
      )}
    </>
  );
};
