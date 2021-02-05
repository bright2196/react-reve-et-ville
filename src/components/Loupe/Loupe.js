import React from "react";
import Magnifier from "react-magnifier";
import tableau from "../../img/tableaux/NatureMorte.jpg";

export default function ExampleComponent() {
  return (
    <div>
      <Magnifier src={tableau} width={"auto"} zoomFactor={2} />
    </div>
  );
}
