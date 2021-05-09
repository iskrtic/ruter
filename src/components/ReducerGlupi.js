import React, { useState, useReducer, useEffect } from "react";

// ostvarite funkcionalnost modala za domaći
// izdizajnirajte bolje

const reducer = (state, akcija) => {
  switch (akcija.type) {
    case "promjena_inputa":
      //console.log("pišem");
      return { ...state, ime: akcija.payload, showModal:false,  textModal: "" };
      break;
    case "unesi":
      const novaOsoba = {
        id: new Date().getTime().toString(),
        ime: akcija.payload,
      };
      console.log("Dodajem osobu");
      return { ...state, ime: "", osobe: [...state.osobe, novaOsoba], 
               showModal:true,  
               textModal: "Unesena osoba " + akcija.payload,
               modalBackColor: "lightgreen ",
              };
      break;

    case "obrisi":

      const obrisanaOsoba = state.osobe.filter(
        (osoba) => osoba.id === akcija.payload
      );
/*      
      state.osobe.forEach((osoba) => {console.log(osoba.id + " " + osoba.ime)});
      console.log("obrisanaOsoba akcija.payload=" + akcija.payload); 
      console.log("obrisanaOsoba=" + obrisanaOsoba[0].ime);
*/
      const noveOsobe = state.osobe.filter(
        (osoba) => osoba.id !== akcija.payload
      );


      console.log("Brišem osobu");
      return { ...state, osobe: noveOsobe, 
               showModal:true,               
               textModal: "Obrisana osoba " + obrisanaOsoba[0].ime,
               modalBackColor: "red",
             };
      break;
    
      case "no_modal":
        console.log("no_modal");
        return { ...state, showModal:false,  textModal: "" };
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
  modalBackColor: "",
};

const ReducerGlupi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let modalBackColor ="red";

  useEffect(() => {

    const timer = setTimeout(() => {
        dispatch({ type: "no_modal", payload: "" })
        console.log('This will run after 2 seconds!');
        }, 2000);
    return () => {clearTimeout(timer);}

  }, [state.showModal]); 


  return (
    <div className='container'>
      <div className='col-md-6' style={{ margin: "auto" }}>
        <div style={{width: "100%", backgroundColor: state.modalBackColor}} name='modal'>
          {state.textModal}
        </div>
        <br/>
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
