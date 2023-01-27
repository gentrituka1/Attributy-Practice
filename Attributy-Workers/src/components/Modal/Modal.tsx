import React from 'react'
import { Puntor } from '../../types';
import './Modal.css'

type Props = {
    fshijPuntorin: (id: number) => void;
    puntori: Puntor;
    setShowModal: (showModal: boolean) => void;
}

function Modal( {fshijPuntorin, puntori, setShowModal }: Props) {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <h1 className='modal-title'>Are you sure</h1>
            <div>
                <button onClick={() => {
                    fshijPuntorin(puntori.id)
                    setShowModal(false)
                    }} className='modal-button'>Yes</button>
                <button onClick={() => {
                    setShowModal(false)
                    }
                } className='modal-button'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Modal