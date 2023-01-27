import React from "react";
import { useNavigate } from "react-router-dom";
import { Puntor } from "../../types";
import "./Puntori.css";

type Props = {
  puntori: Puntor;
  fshijPuntorin: (id: number) => void;
};

function Puntori({ puntori, fshijPuntorin }: Props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="puntori-container">
      <div className="puntori-h1-div">
        <h1>
          {puntori.emri} {puntori.mbiemri}
        </h1>
      </div>
      <div className="puntori-p-div">
        <p><b>Pozita:</b> {puntori.pozita}</p>
        <p><b>Email:</b> {puntori.email}</p>
        <p><b>Lindur me:</b> {puntori.dataLindjes}</p>
      </div>
        <button onClick={() => {
          fshijPuntorin(puntori.id)
          }}>Fshij</button>
    </div>
  );
}

export default Puntori;
