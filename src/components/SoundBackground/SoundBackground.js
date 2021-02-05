
import React from "react";

export default function BackgroundSound() {
  return (
    <div>
      <object>
            <param name="autostart" value="true"/>
            <param name="src" value="./backgroundSound.mp3"/>
            <param name="autoplay" value="true"/> 
            <param name="controller" value="true"/>
            <embed src="./backgroundSound.mp3" controller="true" autoplay="true" autostart="True" type="audio/mp3" />
            </object>

  </div>
   
  );
}
