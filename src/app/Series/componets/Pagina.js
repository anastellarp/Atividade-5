import { Container } from "react-bootstrap";
import BarraNavegacao from "./BarraDeNavegacao";

export default function Pagina({ titulo, children }) {
    return (
        <>
            <BarraNavegacao />
            <div className="bg-secondary text-white text-center py-3">
                <h1>{titulo}</h1>
            </div>

            <Container className="mt-3">
                {children}
            </Container>
        </>
    );
}
