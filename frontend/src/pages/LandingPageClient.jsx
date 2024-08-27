import { Saludo } from "../components/LandingPageClient/Saludo";
import CustomCards from "../components/LandingPageClient/cardsTres";

function LandingPageClient() {
    return (
        <div className="Pagina">
            <Saludo />
            <CustomCards />
        </div>
    );
};

export default LandingPageClient;