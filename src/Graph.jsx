import GraphVis from "react-graph-vis";
import React, { useState } from "react";
import { View, Text } from "react-native";

const options = {
  edges: {
    arrows: {
      to: false,
    },
  },
};

export const Graph = ({ graph, setSelectedWord, selectedWord }) => {
  const [selectedNodes, setSelectedNodes] = useState();

  const [network, setNetwork] = useState();
  const setNetworkInstance = (nw) => {
    setNetwork(nw);
  };

  const events = {
    select: (event) => {
      setSelectedNodes(event.nodes);
      setSelectedWord(event.nodes[0]?.id || event.nodes[0]);
    },
    afterDrawing: () => {
      if (selectedWord !== network?.getSelectedNodes()[0])
        network?.setSelection({ nodes: [selectedWord] });
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
          getNetwork={setNetworkInstance}
        />
      </View>
    </>
  );
};
