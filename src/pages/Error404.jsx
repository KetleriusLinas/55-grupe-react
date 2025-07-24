import { useParams } from "react-router";
import { Header } from "../components/Header";
export function Error404() {
    let { '*': splat } = useParams();
    return (
        <>
            <Header />
            <main>
                Error404 - Puslapis nerastas - {splat}
            </main>
        </>
    );
}