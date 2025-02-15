import React, { useEffect, useState } from "react";
import "./FormularProPridani.css";

function FormularProPridani({ data, pridaniPsa }) {
  const [novyPes, setNovyPes] = useState({
    id: data.length > 0 ? Math.max(data.id) + 1 : 0,
    name: "",
    breed: "",
    age: "",
  });
  const [validacePsa, setValidacePsa] = useState(false);

  const handleAdd = (e) => {
    const zdroj = e.target.name;
    const hodnota = e.target.value;
    let pridejPsa;

    switch (zdroj) {
      case "name":
        pridejPsa = { ...novyPes, name: hodnota };
        break;
      case "breed":
        pridejPsa = { ...novyPes, breed: hodnota };
        break;
      case "age":
        pridejPsa = { ...novyPes, age: hodnota };
        break;
      default:
        break;
    }
    setNovyPes(pridejPsa);
  };
  //Validace noveho psa - pokud neni zadana jedina hodnota ve formulari, tlacitko je neaktivni
  const kontrolaPridaniPsa = () => {
    if (novyPes.name === "" || novyPes.breed === "" || novyPes.age === "") {
      setValidacePsa(false);
    } else {
      setValidacePsa(true);
    }
  };
  useEffect(() => {
    kontrolaPridaniPsa();
  }, [novyPes]);

  return (
    <div>
      <div>
        <form className="dog-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jmeno"
            value={novyPes.name}
            onChange={handleAdd}
          />
          <input
            type="text"
            name="breed"
            id="breed"
            placeholder="Rasa"
            value={novyPes.breed}
            onChange={handleAdd}
          />
          <input
            type="Number"
            name="age"
            id="age"
            placeholder="Vek"
            value={novyPes.age}
            onChange={handleAdd}
          />
        </form>
        <button disabled={!validacePsa} onClick={() => pridaniPsa(novyPes)}>
          Pridej psa
        </button>
      </div>
    </div>
  );
}

export default FormularProPridani;
