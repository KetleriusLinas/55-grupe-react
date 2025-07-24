import { useParams } from "react-router";

export function ServiceInner() {

    const { service } = useParams();

    return (
        <>
            <main>
                Service Inner PAGE - {service}
            </main>
        </>
    );
}