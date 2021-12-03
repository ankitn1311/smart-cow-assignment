import React, { useState } from "react";
import ActorTab from "./actor-tab/ActorTab";
import AlignmentTab from "./alignment-tab/AlignmentTab";
import BackgroundTab from "./background-tab/BackgroundTab";
import "./VideoTabs.scss";
import VoiceTab from "./voice-tab/VoiceTab";

const VideoTabs = () => {
  const tabs = ["Actor", "Voice", "Alignment", "Background"];
  const [activeTab, setActiveTab] = useState("Actor");

  const renderContent = () => {
    switch (activeTab) {
      case "Actor":
        return <ActorTab />;
      case "Voice":
        return <VoiceTab />;
      case "Alignment":
        return <AlignmentTab />;
      case "Background":
        return <BackgroundTab />;
      default:
        return null;
    }
  };

  return (
    <div className="VideoTabs">
      <ul className="VideoTabs__tab">
        {tabs.map((value) => (
          <li
            onClick={() => setActiveTab(value)}
            className={`VideoTabs__tab--item ${
              value === activeTab && "VideoTabs__tab--item--active"
            }`}>
            {value}
          </li>
        ))}
      </ul>
      {renderContent()}
    </div>
  );
};

export default VideoTabs;
