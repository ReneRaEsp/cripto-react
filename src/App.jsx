import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import imagen from "./cripto.png";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media screen and (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  `;
  const Heading = styled.h1`
    font-family: "Bebas Neue", cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;
    &::after {
      content: "";
      width: 300px;
      height: 6px;
      background-color: #66a2fe;
      display: block;
    }
  `;
  const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
  `;

  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [resultado, guardarResultado] = useState("");

  useEffect(async () => {
    // evitamos la ejecución la primera vez
    if (moneda === "") return;
    console.log("cotizando");

    //consultar la api para obtener la cotizacion
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const header = {
      authorization: {
        Apikey:
          "56948945b88b9b1e7a0635de75beb967c7e9cff372ecfd334eba82a90fbff848",
      },
    };
    const { data } = await axios.get(url, header);
    guardarResultado(data.DISPLAY[criptomoneda][moneda]);
  }, [moneda, criptomoneda]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Cripto" />
      </div>
      <div>
        <Heading> Cotiza criptomonedas al instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        <Cotizacion
          resultado={resultado}
          moneda={moneda}
          criptomoneda={criptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;
