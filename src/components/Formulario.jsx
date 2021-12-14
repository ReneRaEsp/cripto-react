import styled from "@emotion/styled";

import useMoneda from "./../hooks/useMoneda.jsx";

const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "MXN", nombre: "Peso Mexicano" },
    { codigo: "PEN", nombre: "Nuevo Sol Peruano" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "EUR", nombre: "Euro" },
  ];

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

  const [moneda, SelectMonedas, actualizarState] = useMoneda(
    "Elige tu moneda",
    "",
    MONEDAS
  );

  return (
    <form className="formulario">
      <SelectMonedas />
      <h2> Formulario </h2>

      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
