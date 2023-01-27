import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Puntor } from "../../types";
import "./CreatePuntorin.css";

type Props = {
  setPuntoret: (puntoret: Puntor[]) => void;
  puntoret: Puntor[];
};

function CreatePuntorin({ setPuntoret, puntoret }: Props) {
  let params = useParams();
  let navigate = useNavigate();

  const puntori = puntoret.find((puntori) => puntori.id === Number(params.id));

  function createHandler(event: any) {
    event.preventDefault();
    const newPuntor = {
      id: Math.floor(Math.random() * 1000),
      emri: event.target.emri.value,
      mbiemri: event.target.mbiemri.value,
      pozita: event.target.pozita.value,
      email: event.target.email.value,
      dataLindjes: event.target.dataLindjes.value,
    };

    if (
      newPuntor.dataLindjes !== "" ||
      newPuntor.email !== "" ||
      newPuntor.emri !== "" ||
      newPuntor.mbiemri !== "" ||
      newPuntor.pozita !== ""
    ) {
      setPuntoret([...puntoret, newPuntor]);
    }

    event.target.emri.value = "";
    event.target.mbiemri.value = "";
    event.target.pozita.value = "";
    event.target.email.value = "";
    event.target.dataLindjes.value = "";

    navigate("/puntoret");
  }

  function editHandler(event: any) {
    event.preventDefault();
    const newPuntor = {
      id: params.id,
      emri: event.target.emri.value,
      mbiemri: event.target.mbiemri.value,
      pozita: event.target.pozita.value,
      email: event.target.email.value,
      dataLindjes: event.target.dataLindjes.value,
    };

    const puntori = puntoret.find(
      (puntori) => puntori.id === Number(params.id)
    );

    if (
      puntori &&
      (newPuntor.dataLindjes !== "" ||
        newPuntor.email !== "" ||
        newPuntor.emri !== "" ||
        newPuntor.mbiemri !== "" ||
        newPuntor.pozita !== "")
    ) {
      puntori.emri = newPuntor.emri;
      puntori.mbiemri = newPuntor.mbiemri;
      puntori.pozita = newPuntor.pozita;
      puntori.email = newPuntor.email;
      puntori.dataLindjes = newPuntor.dataLindjes;
    }

    setPuntoret([...puntoret]);

    event.target.emri.value = "";
    event.target.mbiemri.value = "";
    event.target.pozita.value = "";
    event.target.email.value = "";
    event.target.dataLindjes.value = "";

    navigate("/puntoret");
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-main">
          <form
            onSubmit={(event) => {
              params.id ? editHandler(event) : createHandler(event);
            }}
          >
            <label>
              <span>Emri</span>
              <input
                type="text" 
                defaultValue={puntori?.emri}
                name="emri"
                placeholder="Emri..."
                required
              />
            </label>
            <label>
              <span>Mbiemri</span>
              <input
                type="text"
                defaultValue={puntori?.mbiemri}
                name="mbiemri"
                placeholder="Mbiemri..."
                required
              />
            </label>
            <label>
              <span>Pozita</span>
              <input
                type="text"
                defaultValue={puntori?.pozita}
                name="pozita"
                placeholder="Pozita..."
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                defaultValue={puntori?.email}
                name="email"
                placeholder="Email..."
                required
              />
            </label>
            <label>
              <span>Data e Lindjes</span>
              <input
                type="date"
                name="dataLindjes"
                placeholder="Data e lindjes..."
                defaultValue={puntori?.dataLindjes}
                required
              />
            </label>
            <button type="submit">{params.id ? "Edito" : "Krijo"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePuntorin;
