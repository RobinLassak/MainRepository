import { useEffect, useState } from "react";
import "./App.css";
import SeznamPsu from "./components/SeznamPsu";
import dogsData from "./dogsData.json";
import FormularProPridani from "./components/FormularProPridani";

function App() {
  const [seznamPsu, setSeznamPsu] = useState(dogsData.dogs); //Seznam psu
  const [aktivniStranka, setAktivniStranka] = useState(1); //Zajisteni prepnuti mezi skladem a seznamem psu
  const [aktualniZasoby, setAktualniZasoby] = useState({
    //Aktualni zasoby na sklade
    granule: 35,
    vakciny: 15,
    leky: 25,
  });
  const [pomocnySklad, setPomocnySklad] = useState({
    //Pomocny sklad - pripisuje se do nej vzdy jeden objekt z tabulky
    granule: "",
    vakciny: "",
    leky: "",
  });
  const [validaceZasoby, setValidaceZasoby] = useState(false);

  //Zasoby nutne pro pridani jednoho psa
  const zasobyProJednoho = {
    granule: 5,
    vakciny: 1,
    leky: 2,
  };

  //Funkce pro smazani psa
  const smazatPsa = (idecko) => {
    const upravenySeznam = seznamPsu.filter(
      (jedenPes) => jedenPes.id !== idecko
    );
    setSeznamPsu(upravenySeznam);
  };
  //Funkce pro pridani psa
  const pridatPsa = (novyPes) => {
    const nutneZasoby = {
      granule: seznamPsu.length * zasobyProJednoho.granule,
      vakciny: seznamPsu.length * zasobyProJednoho.vakciny,
      leky: seznamPsu.length * zasobyProJednoho.leky,
    };
    if (
      nutneZasoby.granule <= aktualniZasoby.granule &&
      nutneZasoby.vakciny <= aktualniZasoby.vakciny &&
      nutneZasoby.leky <= aktualniZasoby.leky
    ) {
      setSeznamPsu((predchoziPsi) => [...predchoziPsi, novyPes]);
      setAktualniZasoby({
        granule: aktualniZasoby.granule - zasobyProJednoho.granule,
        vakciny: aktualniZasoby.vakciny - zasobyProJednoho.vakciny,
        leky: aktualniZasoby.leky - zasobyProJednoho.leky,
      });
    } else {
      alert("Nedostatek zasob pro pridani noveho psa!");
    }
  };
  //Funkce pro pridani zasob do pomocneho skladu (vzdy se bude nachazet jen jeden objekt)
  const handlePomocny = (e) => {
    const zdroj = e.target.name;
    switch (zdroj) {
      case "granule": {
        setPomocnySklad({ ...pomocnySklad, granule: e.target.value });
        break;
      }
      case "vakciny": {
        setPomocnySklad({ ...pomocnySklad, vakciny: e.target.value });
        break;
      }
      case "leky": {
        setPomocnySklad({ ...pomocnySklad, leky: e.target.value });
        break;
      }
      default:
        break;
    }
  };
  //validace tlacitka pridani do skladu
  const kontrolaPridaniZasob = () => {
    if (
      pomocnySklad.granule === "" &&
      pomocnySklad.vakciny === "" &&
      pomocnySklad.leky === ""
    ) {
      setValidaceZasoby(false);
    } else {
      setValidaceZasoby(true);
    }
  };
  useEffect(() => {
    kontrolaPridaniZasob();
  }, [pomocnySklad]);

  //Funkce pro pricteni zasob z pomocneho skladu do hlavniho
  const handlePridaniZasob = () => {
    const aktualizujSklad = {
      granule: aktualniZasoby.granule + Number(pomocnySklad.granule),
      vakciny: aktualniZasoby.vakciny + Number(pomocnySklad.vakciny),
      leky: aktualniZasoby.leky + Number(pomocnySklad.leky),
    };
    setAktualniZasoby(aktualizujSklad);
  };

  return (
    <div>
      <div className="page-container">
        <div className="page-toggler">
          <button
            className={`toggler-btn ${aktivniStranka === 1 ? "active" : ""}`} //Pokud je aktivniStranka 1 nastavi se prvni tlacitko na active
            name="seznamPsu"
            onClick={() => setAktivniStranka(1)} //Po kliknuti se prepne aktivniStranka na 1
          >
            Seznam psu
          </button>
          <button
            className={`toggler-btn ${aktivniStranka === 2 ? "active" : ""}`} //Pokud je aktivniStranka 2 nastavi se druhe tlacitko na active
            name="sklad"
            onClick={() => setAktivniStranka(2)} //Po kliknuti se prepne aktivniStranka na 2
          >
            Sklad utulku
          </button>
        </div>
        {aktivniStranka === 1 && ( //Jestlize je aktivni stranka 1 zobrazi se toto
          <>
            <div className="shelter-form">
              <SeznamPsu data={seznamPsu} smazaniPsa={smazatPsa} />
              <FormularProPridani data={seznamPsu} pridaniPsa={pridatPsa} />
            </div>
          </>
        )}
        {aktivniStranka === 2 && ( //Jestlize je aktivni stranka 2 zobrazi se toto
          <>
            <h1>Sklad</h1>
            <p>Granule: {aktualniZasoby.granule} kg</p>
            <p>Vakciny: {aktualniZasoby.vakciny} ks</p>
            <p>Leky: {aktualniZasoby.leky} ks</p>
            <div className="shelter-form">
              <input
                type="number"
                name="granule"
                id="granule"
                placeholder="Granule (kg)"
                onChange={handlePomocny}
              />
              <input
                type="number"
                name="vakciny"
                id="vakciny"
                placeholder="Vakciny (ks)"
                onChange={handlePomocny}
              />
              <input
                type="number"
                name="leky"
                id="leky"
                placeholder="Leky (ks)"
                onChange={handlePomocny}
              />
              <button disabled={!validaceZasoby} onClick={handlePridaniZasob}>
                Pridej do skladu
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
