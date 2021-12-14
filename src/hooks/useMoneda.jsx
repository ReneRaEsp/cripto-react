import { Fragment, useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  //State de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => {
    return (
      <Fragment>
        <label>{label}</label>
        <select>
          <option value="MXN"> Peso Mexicano </option>
          {opciones.map((opcion) => (
            <option key={ opcion.codigo } value={opcion.codigo}> {opcion.nombre} </option>
          ))}
        </select>
      </Fragment>
    );
  };

  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
