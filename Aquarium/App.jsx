import { useEffect, useState } from "react";
import "./App.css";
import Rybicky from "./components/Rybicky";
import Akvarium from "./components/Akvarium";
import rawData from "./rawData.json";

function App() {
  const [aktivniTlacitko, setAktivniTlacitko] = useState(1);
  const [seznamRyb, setSeznamRyb] = useState(rawData.ryby);
  const [pozadovanyObjem, setPozadovanyObjem] = useState(0);

  const smazatRybu = (idecko) => {
    let upravenySeznam = seznamRyb.filter(
      (jednaRyba) => jednaRyba.id !== idecko
    );
    setSeznamRyb(upravenySeznam);
  };
  const pridatRybu = (novaRyba) => {
    setSeznamRyb((predchoziRyby) => [...predchoziRyby, novaRyba]);
  };

  const spocitePozadovanyObjem = () => {
    let pocetMalych = 0;
    let pocetVelkych = 0;
    pocetMalych = seznamRyb.filter(
      (jednaRyba) => jednaRyba.size === "mala"
    ).length;
    pocetVelkych = seznamRyb.filter(
      (jednaRyba) => jednaRyba.size === "velka"
    ).length;
    let potrebnyObjem = pocetMalych * 10 + pocetVelkych * 20;
    setPozadovanyObjem(potrebnyObjem);
  };

  useEffect(() => {
    spocitePozadovanyObjem();
  }, [seznamRyb]);

  return (
    <div className="container">
      <div className="row my-5 text-center">
        <div className="col">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={() => setAktivniTlacitko(1)}
          >
            Rybicky
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={() => setAktivniTlacitko(2)}
          >
            Akvarium
          </button>
        </div>
      </div>
      <div className="row my-3">
        {aktivniTlacitko === 1 && (
          <div className="container">
            <span className="text-left py-3">
              Pozadovany objem: {pozadovanyObjem} l
            </span>
            <Rybicky
              data={seznamRyb}
              smazatRybu={smazatRybu}
              pridatRybu={pridatRybu}
            />
          </div>
        )}
        {aktivniTlacitko === 2 && (
          <div>
            <Akvarium pozadovanyObjem={pozadovanyObjem} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
