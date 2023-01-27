import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Puntor } from "../../types";
import Modal from "react-modal";
import "./Puntori.css";

const customStyles = {
  content: {
    display: "grid",
    placeItems: "center",
    backgroundColor: "lightgrey",
    width: "300px",
  },
};

type Props = {
  puntori: Puntor;
  fshijPuntorin: (id: number) => void;
};

function Puntori({ puntori, fshijPuntorin }: Props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="puntori-container">
      <Link className="links" to={`createOrEditPuntoret/${puntori.id}`}>
        <div className="puntori-h1-div">
          <h1>
            {puntori.emri} {puntori.mbiemri}
          </h1>
        </div>
        <div className="puntori-p-div">
          <p>
            <b>Pozita:</b> {puntori.pozita}
          </p>
          <p>
            <b>Email:</b> {puntori.email}
          </p>
          <p>
            <b>Lindur me:</b> {puntori.dataLindjes}
          </p>
        </div>
      </Link>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Fshij
      </button>
      <Modal
        isOpen={showModal}
        style={customStyles.content}
        onRequestClose={() => setShowModal(false)}
      >
        <h1>Jeni i sigurt qe doni te fshini puntorin?</h1>
        <div className="modal-buttons">
          <button
            onClick={() => {
              fshijPuntorin(puntori.id);
              setShowModal(false);
            }}
          >
            Po
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Jo
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Puntori;
