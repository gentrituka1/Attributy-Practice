import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Puntoret from './components/Puntoret/Puntoret'
import React from 'react'
import { Puntor } from './types'
import CreatePuntorin from './components/NewPuntoret/CreatePuntorin'
import Header from './components/Header/Header'

function App() {
  const [puntoret, setPuntoret] = React.useState<Puntor[]>([]);

  React.useEffect(() => {
    const puntoret = JSON.parse(localStorage.getItem("puntoret") || "[]");
    setPuntoret(puntoret);
  }, [])

  React.useEffect(() => {
    localStorage.setItem("puntoret", JSON.stringify(puntoret));
  }, [puntoret])

  function fshijPuntorin(id: number) {
    setPuntoret((puntoret) => {
      return puntoret.filter((puntori) => puntori.id !== id);
    });

    // remove from local storage
    localStorage.setItem("puntoret", JSON.stringify(puntoret));
  }

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={<Puntoret puntoret={puntoret} fshijPuntorin={fshijPuntorin}/>} />
          <Route path="puntoret" element={<Puntoret puntoret={puntoret} fshijPuntorin={fshijPuntorin}/>} />
          <Route path="puntoret/createOrEditPuntoret" element={<CreatePuntorin puntoret={puntoret} setPuntoret={setPuntoret}/>} />
          <Route path='puntoret/createOrEditPuntoret/:id' element={<CreatePuntorin puntoret={puntoret} setPuntoret={setPuntoret}/>} />
        </Routes>
    </div>
  )
}

export default App
