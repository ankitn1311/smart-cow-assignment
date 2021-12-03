import React, { useState } from "react";
import "./AlignmentTab.scss";

const AlignmentTab = () => {
  const [activeAlignment, setActiveAlignment] = useState("Left");
  const [alignments, setAlignments] = useState([
    { name: "Left" },
    { name: "Center" },
    { name: "Right" },
  ]);

  return (
    <div className="Alignment">
      {alignments.map((alignment) => (
        <div
          onClick={() => setActiveAlignment(alignment.name)}
          className={`Alignment__card ${
            alignment.name === activeAlignment && "Alignment__card--active"
          }`}>
          <div className="Alignment__card--name">{alignment.name}</div>
        </div>
      ))}
    </div>
  );
};

export default AlignmentTab;
