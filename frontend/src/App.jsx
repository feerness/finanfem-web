import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./routes";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ForoFormPage } from "./pages/ForoFormPage";
import { ForoPage } from "./pages/ForoPage";
import { ForoProvider } from "./context/foroContext";
import MyFooter from "./components/Footer";
import LandingPageClient from "./pages/LandingPageClient";
import Profile from "./pages/Profile";
import Recursos from "./pages/Recursos";
import ArticulosCliente from "./components/Recursos/Articulos";
import PdfCliente from "./components/Recursos/Pdf";
import VideosCliente from "./components/Recursos/Videos";
import Noticias from "./pages/Noticias";
import ReportesCliente from "./components/Consultoria/Reportes";
import Terminos from "./components/Consultoria/Terminos";
import { ForoDetailPage } from "./pages/ForoDetails"; // Asegúrate de que el nombre sea correcto
import { ForoEditPage } from "./pages/ForoEditPage";
import TestComponent from './pages/TestComponent.jsx';
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ForoProvider>
        <BrowserRouter>
          <main>
            <Navigationbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/foro" element={<ForoPage />} />
                <Route path="/add-post" element={<ForoFormPage />} />
                <Route path="/foro/:id" element={<ForoDetailPage />} />{" "}
                {/* Ruta para ver y editar la publicación */}
                <Route path="/foro/edit/:id" element={<ForoEditPage />} />
                <Route
                  path="/LandingPageClient"
                  element={<LandingPageClient />}
                />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Recursos" element={<Recursos />} />
                <Route path="/Articulos" element={<ArticulosCliente />} />
                <Route path="/Pdf" element={<PdfCliente />} />
                <Route path="/Videos" element={<VideosCliente />} />
                <Route path="/Noticias" element={<Noticias />} />
                <Route path="/Reportes" element={<ReportesCliente />} />
                <Route path="/Terminos" element={<Terminos />} />
                {/* Agrega la siguiente línea temporalmente */}
                <Route path="/test" element={<TestComponent />} />
              </Route>
            </Routes>
            <MyFooter />
          </main>
        </BrowserRouter>
      </ForoProvider>
    </AuthProvider>
  );
}

export default App;
