import "./App.css";
import {Routes, Route} from "react-router-dom";
import Layout from "./frontend/Layout.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
