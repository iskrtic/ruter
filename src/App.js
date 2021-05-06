import VjezbaSwitch from "./components/VjezbaSwitch";
import ReducerGlupi from "./components/ReducerGlupi";
import ReducerPametni from "./components/ReducerPametni";
import KontextGlupi from "./components/KontextGlupi";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <KontextGlupi />
      <hr />
      <ReducerPametni />
      <hr />
      <ReducerGlupi />
      <hr />
      <VjezbaSwitch />
    </div>
  );
}

export default App;
