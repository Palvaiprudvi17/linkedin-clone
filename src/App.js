import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// export const Homes = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//     </div>
//   );
// };

export default App;
