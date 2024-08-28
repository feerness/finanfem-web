import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./routes";
import { ForoProvider } from "./context/foroContext";
import MyFooter from "./components/Footer";
import "./App.css";
import { ForoDetailPage } from "./pages/ForoDetails"; // Asegúrate de que el nombre sea correcto
import { ForoEditPage } from "./pages/ForoEditPage";
import { ForoFormPage } from "./pages/ForoFormPage";
import { ForoPage } from "./pages/ForoPage";
// En tu archivo index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';


// Lazy load de las páginas
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LandingPageClient = lazy(() => import("./pages/LandingPageClient"));
const Profile = lazy(() => import("./pages/Profile"));
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