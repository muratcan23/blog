import { Route, Routes } from "react-router-dom";

import Header from "./componenets/Header/Header";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth/Auth";
import CreateFilms from "./pages/CreateFilm";
import DeleteFilm from "./pages/DeleteFilm";
import EditFilm from "./pages/EditFilm";
import Home from "./pages/Home";
import ShowFilm from "./pages/ShowFilm/ShowFilm";
import WelcomePage from "./pages/WelcomePage";
import Footer from "./pages/components/Footer";
import Trends from "./pages/components/Trends";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-700 text-lg text-white text-center">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/create" element={<CreateFilms />} />
          <Route path="/films/details/:id" element={<ShowFilm />} />
          <Route path="/films/edit/:id" element={<EditFilm />} />
          <Route path="/films/delete/:id" element={<DeleteFilm />} />
          <Route path="/films/trends" element={<Trends />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
