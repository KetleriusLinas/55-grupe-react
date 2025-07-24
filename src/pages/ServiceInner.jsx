import { useParams } from "react-router";
import { Header } from "../components/Header";
export function ServiceInner() {

    const { service } = useParams();

    return (
        <>
            <Header />
            <main>
                Service Inner PAGE - {service}
            </main>
        </>
    );
}