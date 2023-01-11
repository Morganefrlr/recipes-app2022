import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Erreur from "./pages/Erreur";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Recipe from "./pages/Recipe";
import './style/styles.scss';


function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/*' element={<Erreur />} />
        <Route path='/liked' element={<Liked />} />
    </Routes>
</Router>
  );
}

export default App;
