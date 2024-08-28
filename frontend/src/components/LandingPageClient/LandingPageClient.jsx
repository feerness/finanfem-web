import { Saludo } from "./Saludo";
import  { Suspense, lazy } from "react";

// Lazy load del componente CustomCards
const CustomCards = lazy(() => import("./cardsTres"));

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
