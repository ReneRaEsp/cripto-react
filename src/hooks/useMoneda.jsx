import { useState } from "react";
import styled from "@emotion/styled";

const useMoneda = (label, stateInicial, opciones) => {
  //State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => {
    const Div = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 10rem;
    `;
    const Label = styled.label`
      font-size: 1.5rem;
      font-family: Helvetica;
      margin-right: 1rem;
      color: rgba(211, 211, 211, 0.7);
    `;
    const Select = styled.select`
      display: flex;
      justify-content: center;
      font-size: 1rem;
      text-align: center;
      font-weight: 700;
      color: white;
      background: rgba(21, 21, 22, 0.9);
      border-radius: 4px;
      border: 4px solid rgba(21, 21, 22, 0.9);
      width: 19rem;
      height: 3rem;
    `;
    const Option = styled.option`
      font-size: 1rem;
      font-weight: 800;
    `;
    return (
      <Div>
        <Label>{label}: </Label>
        <Select value={state} onChange={(e) => actualizarState(e.target.value)}>
          <Option value=""> ------ Seleccionar Moneda ------ </Option>
          {opciones.map((opcion) => (
            <Option key={opcion.codigo} value={opcion.codigo}>
              {" "}
              {opcion.nombre}{" "}
            </Option>
          ))}
        </Select>
      </Div>
    );
  };

  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
