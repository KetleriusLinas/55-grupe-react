import { Calc } from "./components/Calc.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { Title } from "./components/Title.jsx";

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Title text="Labas rytas, Lietuva!" desc="" />
        <div>🟨🟩🟥</div>

        <Calc a={7} b={5} />
        <Calc a={77} b={55} />
        <Calc a={-13} b={-66} />

        <Title text="Apie mus" />
        <Title text="Paslaugos" desc="Musu teikiamu paslaugu aprasymas" />
        <Title text="Kontaktai" desc="Zinau kur tu gyveni, todel geriau net nekontaktuok 👀" />
      </Main>
      <Footer />
    </>
  );
}


// <button onClick={() => setCount((count) => count + 1)}>
//   skaicius yra: {count}
// </button>