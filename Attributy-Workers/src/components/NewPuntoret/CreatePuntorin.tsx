import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Puntor } from "../../types";
import EditPuntorin from "./EditPuntorin";
import "./CreatePuntorin.css";

type Props = {
  setPuntoret: (puntoret: Puntor[]) => void;
  puntoret: Puntor[];
};

function CreatePuntorin({ setPuntoret, puntoret }: Props) {
  let params = useParams();
  let navigate = useNavigate()

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

    setPuntoret([...puntoret, newPuntor]);

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

    const puntori = puntoret.find((puntori) => puntori.id === Number(params.id));

    if (puntori) {
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
        <form onSubmit={(event) => {params.id ? editHandler(event) : createHandler(event)} }>
          <label>
            <span>Emri</span>
            <input type="text" name="emri" placeholder="Emri..." />
          </label>
          <label>
            <span>Mbiemri</span>
            <input type="text" name="mbiemri" placeholder="Mbiemri..." />
          </label>
          <label>
            <span>Pozita</span>
            <input type="text" name="pozita" placeholder="Pozita..." />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Email..." />
          </label>
          <label>
            <span>Data e Lindjes</span>
            <input type="date" name="dataLindjes" placeholder="Data e lindjes..." />
          </label>
          <button type="submit">{params.id ? "Edito" : "Krijo"}</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreatePuntorin;
