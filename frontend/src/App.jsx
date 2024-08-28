import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./routes";

import { AuthProvider } from "./context/AuthContext";
import { ForoProvider } from "./context/foroContext";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigationbar } from "./components/Navbar/Navbar";
import MyFooter from "./components/Footer/Footer";

import { ForoDetailPage } from "./components/Foro/ForoDetails"; 
import { ForoEditPage } from "./components/Foro/ForoEditPage";
import { ForoFormPage } from "./components/Foro/ForoFormPage";
import { ForoPage } from "./components/Foro/ForoPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LandingPageClient = lazy(() => import("./components/LandingPageClient/LandingPageClient"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Recursos = lazy(() => import("./pages/Recursos"));
const ArticulosCliente = lazy(() => import("./components/Recursos/Articulos"));
const PdfCliente = lazy(() => import("./components/Recursos/Pdf"));
const VideosCliente = lazy(() => import("./components/Recursos/Videos"));
const Noticias = lazy(() => import("./pages/Noticias"));
const ReportesCliente = lazy(() => import("./components/Consultoria/Reportes"));
const Terminos = lazy(() => import("./components/Consultoria/Terminos"));


function App() {
  return (
    <AuthProvider>
      <ForoProvider>
        <BrowserRouter>
          <main>
            <Navigationbar />
            <Suspense fallback={<div>Cargando...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/foro" element={<ForoPage />} />
                  <Route path="/add-post" element={<ForoFormPage />} />
                  <Route path="/foro/:id" element={<ForoDetailPage />} />{" "}
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
                </Route>
              </Routes>
            </Suspense>
            <MyFooter />
          </main>
        </BrowserRouter>
      </ForoProvider>
    </AuthProvider>
  );
}

export default App;