import { useEffect, useState } from "react";
import "./App.css";
import RbGroup from "./components/RbGroup";
import ChbGroup from "./components/ChbGroup";
import NumImp from "./components/NumImp";
import Select from "./components/Select";
import Range from "./components/Range";
import Clock from "./components/Clock";
import ProgressBar from "./components/ProgressBar";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import File from "./components/File";

function App() {
  const [prichut, setPrichut] = useState("vanilkova");
  const [pridavky, setPridavky] = useState([]);
  const [kopecky, setKopecky] = useState("");
  const [druh, setDruh] = useState("nizkotucna");
  const [disk, setDisk] = useState(40);
  const zacatekOdpocitavani = 20;
  const [odpocitavani, setOdpocitavani] = useState(zacatekOdpocitavani);
  const [scitanec1, setScitanec1] = useState(0);
  const [scitanec2, setScitanec2] = useState("");
  const [text, setText] = useState("");
  const [soubor, setSoubor] = useState("");
  const [vysledek, setVysledek] = useState("");

  useEffect(() => {
    let temp;
    while (temp === null || isNaN(temp) || temp.trim() === "") {
      temp = prompt("Zadejte prvního člena součtu");
    }

    setScitanec1(parseFloat(temp));
  }, []);

  const handlerEvent = (source) => {
    switch (source) {
      case "btn-soucet":
        secti();
        break;
      default:
        break;
    }
  };

  const secti = () => {
    if (
      scitanec1 !== "" &&
      scitanec2 !== "" &&
      !isNaN(scitanec1) &&
      !isNaN(scitanec2)
    ) {
      setVysledek(
        `Vysledek je ${parseFloat(scitanec1) + parseFloat(scitanec2)}`
      );
    } else {
      setVysledek("Zadejte validni scitance a zadejte tlacitko vypoctu");
    }
  };

  const handleSouborDoTextArea = () => {
    console.log("Aktuální obsah souboru:", soubor);
    setText(soubor);
  };

  useEffect(() => {
    if (odpocitavani > 0) {
      const casovac = setInterval(() => {
        setOdpocitavani((prevOdpocitavani) => prevOdpocitavani - 1);
      }, 1000);

      return () => clearInterval(casovac); // Správně vynuluje interval
    }
  }, [odpocitavani]);

  const progress =
    odpocitavani > 0
      ? ((zacatekOdpocitavani - odpocitavani) / zacatekOdpocitavani) * 100
      : 100;

  const handleData = (data, zmrzlina) => {
    switch (zmrzlina) {
      case "rb-prichut":
        setPrichut(data);
        break;
      case "chb-group":
        setPridavky(data);
        break;
      case "num-imp":
        if (data > 0 && data < 5) {
          setKopecky(data);
        }
        break;
      case "select-druh":
        setDruh(data);
        break;
      case "range":
        setDisk(data);
        break;
      case "scitanec1":
        setScitanec1(data);
        break;
      case "scitanec2":
        setScitanec2(data);
        break;
      case "textArea":
        setText(data);
        break;
      case "vyberSoubor":
        setSoubor(data);
        setText(data);
        break;
      default:
        break;
    }
  };

  console.log(scitanec1);
  console.log(scitanec2);

  return (
    <div className="bg-info-subtle vw-100 vh-100 py-5">
      <div className="container bg-warning-subtle">
        <div className="row">
          <div className="col-6">
            <div className="my-3">
              <p>
                {prichut} {kopecky} kopecky s{" "}
                {pridavky.map((pridavek) => pridavek + "")}, {druh}
              </p>
            </div>
            <div className="my-3">
              <RbGroup
                label="Prichut zmrzliny:"
                id="rb-prichut"
                dataIn={[
                  { label: "vanilkova", value: "vanilkova" },
                  { label: "cokoladova", value: "cokoladova" },
                  { label: "michana", value: "michana" },
                ]}
                handleData={handleData}
                selectedValue={prichut}
              />
            </div>
            <div className="my-3">
              <ChbGroup
                label="Pridavek:"
                id="chb-group"
                dataIn={[
                  { label: "kousky orisku", value: "kousky orisku" },
                  { label: "coko hoblinky", value: "coko hoblinky" },
                  {
                    label: "karamelove krupinky",
                    value: "karamelove krupinky",
                  },
                ]}
                handleData={handleData}
                selectedValue={pridavky}
              />
            </div>
            <div className="my-3">
              <NumImp
                label="Pocet kopecku (max. 4):"
                id="num-imp"
                dataIn={kopecky}
                handleData={handleData}
                selectedValue={kopecky}
              />
            </div>
            <div className="my-3">
              <Select
                label="Vyberte druh zmrzliny:"
                id="select-druh"
                dataIn={["smetanova", "jogurtova", "nizkotucna"]}
                handleData={handleData}
                selectedValue={druh}
              />
            </div>
            <div className="my-3">
              <Range
                label="Misto na disku:"
                id="range"
                min={0}
                max={100}
                dataIn={disk}
                handleData={handleData}
              />
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-3">
                  <Clock />
                </div>
                <div className="col-9">
                  <p>Zbyva {disk}% mista na disku.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="my-3">
              <ProgressBar id="progress" dataIn={progress} />
            </div>
            <div className="my-3">
              <p>Instalace probiha, cekejte {odpocitavani} sekund.</p>
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-6">
                  <TextBox
                    label="Scitanec 1:"
                    id="scitanec1"
                    dataIn={scitanec1}
                    selectedValue={scitanec1}
                    handleData={handleData}
                  />
                </div>
                <div className="col-6">
                  <TextBox
                    label="Scitanec 2:"
                    id="scitanec2"
                    dataIn={scitanec2}
                    selectedValue={scitanec2}
                    handleData={handleData}
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-6">
                  <Button
                    label="Secti"
                    id="btn-soucet"
                    handleEvent={handlerEvent}
                  />
                </div>
                <div className="col-6">
                  <span>
                    <b>{vysledek}</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="my-3">
              <TextArea
                height={150}
                id="textArea"
                dataIn={text}
                selectedValue={text}
                handleData={handleData}
              />
            </div>
            <div className="my-3">
              <div className="row">
                <div className="col-8">
                  <File id="vyberSouboru" handleData={handleData} />
                </div>
                <div className="col-4">
                  <Button
                    label="Stahni soubor"
                    id="btn-stazeni"
                    handleEvent={handleSouborDoTextArea}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
