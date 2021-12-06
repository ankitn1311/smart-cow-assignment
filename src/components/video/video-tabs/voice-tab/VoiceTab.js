import React, { useState } from "react";
import PauseIcon from "../../../../assets/svg/PauseIcon";
import PlayIcon from "../../../../assets/svg/PlayIcon";
import "./VoiceTab.scss";

const VoiceTab = () => {
  const [activeVoice, setActiveVoice] = useState("Asian");
  const [voices, setVoices] = useState([
    { name: "Asian", play: false },
    { name: "British", play: false },
    { name: "American", play: false },
  ]);

  const playAudio = (e, name) => {
    e.stopPropagation();
    const changedVoices = voices.map((voice) =>
      voice.name === name ? { ...voice, play: !voice.play } : voice
    );
    setVoices(changedVoices);
  };

  return (
    <div className="Voice">
      {voices.map((voice) => (
        <div
          key={voice.name}
          onClick={() => setActiveVoice(voice.name)}
          className={`Voice__card ${
            voice.name === activeVoice && "Voice__card--active"
          }`}>
          <div
            className="Voice__card--icon"
            onClick={(e) => playAudio(e, voice.name)}>
            {voice.play ? <PauseIcon /> : <PlayIcon />}
          </div>
          <div className="Voice__card--name">{voice.name}</div>
        </div>
      ))}
    </div>
  );
};

export default VoiceTab;
