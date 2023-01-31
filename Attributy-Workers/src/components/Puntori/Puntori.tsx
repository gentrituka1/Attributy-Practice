import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Puntor } from "../../types";
import Modal from "react-modal";
import "./Puntori.css";

const customStyles = {
  button: {
    backgroundColor: "crimson",
    color: "white",
    border: "none",
    padding: "15px 40px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
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
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <div
          style={{
            backgroundColor: "transparent",
            padding: 50,
            display: "grid",
            justifyContent: "center",
          }}
          className="modal-container"
        >
          <h1 style={{ textAlign: "center" }}>
            Jeni i sigurt qe doni te fshini puntorin?
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "10px",
            }}
            className="modal-buttons"
          >
            <button
              style={customStyles.button}
              onClick={() => {
                fshijPuntorin(puntori.id);
                setShowModal(false);
              }}
            >
              Po
            </button>
            <button
              style={customStyles.button}
              onClick={() => {
                setShowModal(false);
              }}
            >
              Jo
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Puntori;
