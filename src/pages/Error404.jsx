import { useParams } from "react-router";

export function Error404() {
    let { '*': splat } = useParams();
    return (
        <>
            <main>
                Error404 - Puslapis nerastas - {splat}
            </main>
        </>
    );
}