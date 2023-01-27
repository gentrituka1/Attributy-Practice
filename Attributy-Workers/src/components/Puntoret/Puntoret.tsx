import React from "react";
import { Link } from "react-router-dom";
import { Puntor } from "../../types";
import Puntori from "../Puntori/Puntori";
import "./Puntoret.css";

type Props = {
  puntoret: Puntor[];
  fshijPuntorin: (id: number) => void;
};

function Puntoret({ puntoret, fshijPuntorin }: Props) {
  return (
    <div className="puntoret-container">
      {puntoret.map((puntori: Puntor) => (
        <Puntori
          key={puntori.id}
          puntori={puntori}
          fshijPuntorin={fshijPuntorin}
        />
      ))}
    </div>
  );
}

export default Puntoret;
