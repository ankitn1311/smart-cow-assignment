import React, { useState } from "react";
import "./AlignmentTab.scss";

const AlignmentTab = () => {
  const [activeAlignment, setActiveAlignment] = useState("Left");
  const alignments = ["Left", "Center", "Right"];

  return (
    <div className="Alignment">
      {alignments.map((alignment) => (
        <div
          key={alignment}
          onClick={() => setActiveAlignment(alignment)}
          className={`Alignment__card ${
            alignment === activeAlignment && "Alignment__card--active"
          }`}>
          <div className="Alignment__card--name">{alignment}</div>
        </div>
      ))}
    </div>
  );
};

export default AlignmentTab;
