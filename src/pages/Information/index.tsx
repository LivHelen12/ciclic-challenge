import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { FormattedPayment } from "../../utils/formatted-payment";
import { Description } from "../../components/Description";

export function Information() {
  const navigate = useNavigate();
  const { storagedValue, clearLocalStorage } = useLocalStorage("simulation");

  const handleBackToSimulation = () => {
    navigate("/");
    clearLocalStorage();
  };

  return (
    <Description.Root>
      <Description.Title>Informações</Description.Title>
      <Description.Paragraph>
        Olá <b>{storagedValue.name}</b>,
      </Description.Paragraph>
      <Description.Paragraph>
        Juntando <b>{FormattedPayment(storagedValue.payment)}</b> todo mês você
        terá <b>{FormattedPayment(storagedValue.result)}</b> em{" "}
        {storagedValue.time} ano(s).
      </Description.Paragraph>
      <Description.Action onClick={handleBackToSimulation}>
        Simular novamente
      </Description.Action>
    </Description.Root>
  );
}
