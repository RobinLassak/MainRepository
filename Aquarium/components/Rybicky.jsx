import React from "react";
import { useState, useEffect } from "react";
import "./Rybicky.css";

function Rybicky({ data, smazatRybu, pridatRybu }) {
  const [novaRyba, setNovaRyba] = useState({
    id: data.length > 0 ? Math.max(...data.map((ryba) => ryba.id)) + 1 : 1,
    name: "",
    size: "mala",
  });
  const [validaceNove, setValidaceNove] = useState(false);

  // Funkce pro validaci nové ryby
  const validuj = () => {
    if (novaRyba.name === "" || novaRyba.size === "") {
      setValidaceNove(false);
    } else {
      setValidaceNove(true);
    }
  };

  // useEffect pro spuštění validace při změně nové ryby
  useEffect(() => {
    validuj();
  }, [novaRyba]);

  const handleNovy = (e) => {
    const zdroj = e.target.name;
    const hodnota = e.target.value;
    let pridejRybu;
    switch (zdroj) {
      case "name":
        pridejRybu = { ...novaRyba, name: hodnota };
        break;
      case "size":
        pridejRybu = { ...novaRyba, size: hodnota };
        break;
      default:
        break;
    }
    setNovaRyba(pridejRybu);
  };
  const resetuj = () => {
    const temp = {
      id: novaRyba.id + 1,
      name: "",
      size: "",
    };
    setNovaRyba(temp);
  };
  return (
    <div>
      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Jmeno</th>
            <th scope="col">Velikost</th>
            <th scope="col" className="text-center">
              Smazat
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((jednaRyba) => (
            <tr key={jednaRyba.id}>
              <th scope="row">{jednaRyba.id}</th>
              <td>{jednaRyba.name}</td>
              <td>{jednaRyba.size}</td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => smazatRybu(jednaRyba.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container my-5">
        <div className="row">
          <div className="col-4">
            {" "}
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Jmeno:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={handleNovy}
                value={novaRyba.name}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="mb-3 my-4">
              <select
                name="size"
                value={novaRyba.size}
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                onChange={handleNovy}
              >
                <option value="mala">Mala</option>
                <option value="velka">Velka</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <div className="my-4">
              <button
                type="button"
                className="btn btn-success btn-lg"
                disabled={!validaceNove}
                onClick={() => {
                  pridatRybu(novaRyba), resetuj();
                }}
              >
                Pridat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rybicky;
