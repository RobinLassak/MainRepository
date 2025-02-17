import React from "react";
import { useState } from "react";
import "./Akvarium.css";

function Akvarium(pozadovanyObjem) {
  const [velikostAkvaria, setVelikostAkvaria] = useState({
    sirka: 0,
    delka: 0,
    vyska: 0,
  });
  const [jeValidni, setJeValidni] = useState(false);

  const handleRozmery = (e) => {
    const zdroj = e.target.name;
    const hodnota = e.target.value;
    let zjistiRozmer;

    switch (zdroj) {
      case "sirka":
        zjistiRozmer = { ...velikostAkvaria, sirka: hodnota };
        break;
      case "delka":
        zjistiRozmer = { ...velikostAkvaria, delka: hodnota };
        break;
      case "vyska":
        zjistiRozmer = { ...velikostAkvaria, vyska: hodnota };
        break;
      default:
        break;
    }
    setVelikostAkvaria(zjistiRozmer);
    validace(zjistiRozmer);
  };

  const validace = (akvarium) => {
    let celkovyObjem =
      Number(akvarium.sirka) * Number(akvarium.vyska) * Number(akvarium.delka);
    console.log(akvarium);
    console.log(celkovyObjem);
    console.log(pozadovanyObjem);
    if (Number(pozadovanyObjem.pozadovanyObjem) <= celkovyObjem) {
      setJeValidni(true);
    } else {
      setJeValidni(false);
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="mb-3 mx-2">
          <label htmlFor="sirka" className="label-form">
            Sirka:
          </label>
          <input
            type="number"
            value={velikostAkvaria.sirka}
            className="form-control"
            name="sirka"
            id="sirka"
            onChange={handleRozmery}
          />
        </div>
        <div className="mb-3 mx-2">
          <label htmlFor="delka" className="label-form">
            Delka:
          </label>
          <input
            type="number"
            value={velikostAkvaria.delka}
            className="form-control"
            name="delka"
            id="delka"
            onChange={handleRozmery}
          />
        </div>
        <div className="mb-3 mx-2">
          <label htmlFor="vyska" className="label-form">
            Vyska:
          </label>
          <input
            type="number"
            value={velikostAkvaria.vyska}
            className="form-control"
            name="vyska"
            id="vyska"
            onChange={handleRozmery}
          />
        </div>
        <div className="mb-3 mx-2 my-4">
          <button
            className={`btn ${jeValidni ? "btn-success" : "btn-danger"}`}
            disabled={!jeValidni}
          >
            Schvalit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Akvarium;
