import react from "react";
import Login from './components/Auth/Login'
import SignIn from './components/Auth/SignIn'
import Projects from './components/Projects/Projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
