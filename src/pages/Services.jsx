import { useState } from "react";
import { ServicesList } from "../components/services/ServicesList";



export function Services() {
    const [id, setId] = useState(6);
    const [list, setList] = useState([
        { id: 1, value: 'design' },
        { id: 2, value: 'development' },
        { id: 3, value: 'managment' },
        { id: 4, value: 'UX' },
        { id: 5, value: 'UI' },
    ]);

    // const list = ['design', 'development', 'managment', 'UX', 'UI' ]


    // function handleClick() {
    //     setList(currentList => currentList.concat(
    //         { id: id, value: 'asdsadsadas' },
    //     ));
    //     setId(n => n + 1)
    // }
    function handleClick() {
        setList(currentList => [...currentList, { id: id, value: 'asdsadsadas' }]);
        setId(n => n + 1)
    }

    return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button onClick={handleClick} className="btn btn-primary">Prideti nauja paslauga</button>
                            <ServicesList services={list} />

                        </div>
                    </div>
                </div>
            </main>
    );
}