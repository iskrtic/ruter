import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function VjezbaSwitch() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <h1>Dobrodošli na početnu stranicu</h1>
        </Route>
        <Route path='/o-nama'>
          <h1>Dobrodošli na stranicu o nama</h1>
        </Route>
        <Route path='/nasi-proizvodi'>
          <h1>Dobrodošli na stranicu naši proizvodi</h1>
        </Route>
        <Route path='*'>
          <h1>Error - Tražena stranica ne postoji</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default VjezbaSwitch;
