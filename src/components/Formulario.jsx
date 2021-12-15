import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useMoneda from "./../hooks/useMoneda.jsx";
import useCriptomoneda from "./../hooks/useCriptomodeda.jsx";
import axios from "axios";

const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "PEN", nombre: "Nuevo Sol Peruano" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "EUR", nombre: "Euro" },
  ];
  const [error, saveError] = useState(false);
  const [criptos, saveCriptos] = useState([
    {
      CoinInfo: {
        Name: "BTC",
        FullName: "Bitcoin",
      },
    },
  ]);

  const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #326ac0;
    }
  `;

  const Error = styled.p`
    color: rgb(190, 70, 90);
    font-weight: 700;
    text-align: center;
  `;

  const [moneda, SelectMonedas, actualizarState] = useMoneda(
    "Elige tu moneda",
    "",
    MONEDAS
  );
  const [criptomoneda, SelectCripto, actualizarCripto] = useCriptomoneda(
    "Elige tu criptomoneda",
    "",
    criptos
  );

  // Cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();

    //validar si ambos campos están llenos
    if (moneda === "" || criptomoneda === "") {
      saveError(true);
      return;
    }
    //pasar los datos al componente principal
    saveError(false);
  };

  //Ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=14&tsym=USD";
      const header = {
        authorization: {
          Apikey:
            "56948945b88b9b1e7a0635de75beb967c7e9cff372ecfd334eba82a90fbff848",
        },
      };

      const { data } = await axios.get(url, header);
      const { Data } = data;
      saveCriptos(Data);
      console.log(Data);
    };
    consultarAPI();
  }, []);

  return (
    <Form onSubmit={cotizarMoneda} className="formulario">
      <SelectMonedas />
      <SelectCripto />
      {error ? <Error> Todos los campos son necesarios </Error> : null}
      <Boton type="submit" value="Calcular" />
    </Form>
  );
};

export default Formulario;
