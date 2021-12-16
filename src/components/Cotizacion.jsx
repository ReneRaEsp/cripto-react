import styled from "@emotion/styled";

const Cotizacion = ({ resultado, moneda, criptomoneda }) => {
  const Resultado = styled.div`
    font-weight: bold;
    font-family: Helvetica;
    font-size: 2rem;
    color: rgba(233, 233, 244, 0.7);
    .alto {
      color: rgba(40, 140, 100, .9);
      font-size: 1.3rem;
    }
    .bajo {
      color: rgba(200, 40, 70, .9);
      font-size: 1.3rem;
    }
  `;
  if (Object.keys(resultado).length === 0) return null;
  console.log(resultado);
  return (
    <Resultado>
      <p> El precio del { criptomoneda } es {resultado.PRICE} </p>
      <p className="alto"> Precio mas alto del dia {resultado.HIGHDAY} </p>
      <p className="bajo"> Precio mas bajo del dia {resultado.LOWDAY}</p>
    </Resultado>
  );
};

export default Cotizacion;
