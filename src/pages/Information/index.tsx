import { useParams } from "react-router-dom";

export function Information() {
  const { name, payment, time } = useParams();
  return (
    <div>
      <h1>Informações</h1>
      <p>Nome: {name}</p>
      <p>Valor: {payment}</p>
      <p>Tempo: {time}</p>
    </div>
  );
}
