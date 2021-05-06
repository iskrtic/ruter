import React, { useState, useReducer } from "react";

// ostvarite funkcionalnost modala za domaći
// izdizajnirajte bolje

const reducer = (state, akcija) => {
  switch (akcija.type) {
    case "promjena_inputa":
      return { ...state, ime: akcija.payload };
      break;
    case "unesi":
      const novaOsoba = {
        id: new Date().getTime().toString(),
        ime: akcija.payload,
      };
      return { ...state, ime: "", osobe: [...state.osobe, novaOsoba] };
      break;
    case "obrisi":
      const noveOsobe = state.osobe.filter(
        (osoba) => osoba.id !== akcija.payload
      );
      return { ...state, osobe: noveOsobe };
      break;
    default:
      throw new Error("Nema takve radnje!");
      break;
  }
};

const initialState = {
  ime: "",
  osobe: [
    { id: "1", ime: "Šime" },
    { id: "2", ime: "Frane" },
  ],
  showModal: false,
  textModal: "",
};

const ReducerGlupi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='container'>
      <div className='col-md-6' style={{ margin: "auto" }}>
        <div style={{ width: "100%" }} name='modal'>
          a
        </div>
        <div style={{ width: "100%" }} name='unos'>
          <input
            type='text'
            name='novaOsoba'
            placeholder='Unesite ime nove osobe:'
            value={state.ime}
            onChange={(e) =>
              dispatch({ type: "promjena_inputa", payload: e.target.value })
            }
          />
          <button
            type='button'
            name='posalji'
            onClick={() => {
              dispatch({ type: "unesi", payload: state.ime });
            }}>
            Unesi
          </button>
        </div>
        <div style={{ width: "100%" }} name='lista'>
          <h4>Unesene osobe:</h4>
          {state.osobe.map((osoba, index) => {
            return (
              <div
                className='row'
                style={{ justifyContent: "space-around" }}
                key={osoba.id}>
                <h6>{osoba.ime}</h6>
                <i
                  class='fas fa-trash'
                  onClick={() =>
                    dispatch({ type: "obrisi", payload: osoba.id })
                  }></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReducerGlupi;
