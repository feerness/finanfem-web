import { Saludo } from "../components/LandingPageClient/Saludo";
import  { Suspense, lazy } from "react";

// Lazy load del componente CustomCards
const CustomCards = lazy(() => import("../components/LandingPageClient/cardsTres"));

function LandingPageClient() {
    return (
        <div className="Pagina">
            <Suspense fallback={<div>Cargando...</div>}>
                <Saludo />
                <CustomCards />
            </Suspense>
        </div>
    );
}

export default LandingPageClient;
