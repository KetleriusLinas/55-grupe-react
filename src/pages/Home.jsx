import { TextList } from "../components/text-list/TextList";

export function Home() {
    const list = ['Pomidoras', 'Agurkas', 'Svogunas', 'Cesnakas', 'Bulve'];
    const liList = list.map(text => <li key={text}>{text}</li>);
    // list.map(text => <li>{text}</li>
    // for (const text of list) {

    //     if (text.length > 5){
    //         liList.push(<li>{text}</li>)
    //     }
    // }
    return (
        <>
            <main>
                <section className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <ul><TextList /></ul>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <ul>
                                {liList}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}



// {<img src="/src/assets/react.svg" alt="Logo" />} - veikia, bet geriau importuotis , nes lengviau klaidas ieskoti jas parodo ekrane.