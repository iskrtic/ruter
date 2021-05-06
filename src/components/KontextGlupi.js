import React, { useState, useContext } from "react";

const OsobeKontekst = React.createContext();

const KontextGlupi = () => {
  const [state, setState] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const removeItem = (id) => {
    setState((state) => {
      return state.filter((item) => item !== id);
    });
  };
  return (
    <OsobeKontekst.Provider value={{ removeItem, state }}>
      <h4>Lista brojeva:</h4>
      <Lista />
    </OsobeKontekst.Provider>
  );
};

const Lista = () => {
  const unosimIzKonteksta = useContext(OsobeKontekst);
  return (
    <ul>
      {unosimIzKonteksta.state.map((item, index) => (
        <li key={index}>
          {item}&nbsp;&nbsp;&nbsp;
          <IzbrisiElement id={index} />
        </li>
      ))}
    </ul>
  );
};

const IzbrisiElement = ({ id }) => {
  const { removeItem } = useContext(OsobeKontekst);
  return <i class='fas fa-trash' onClick={() => removeItem(id)}></i>;
};

export default KontextGlupi;
