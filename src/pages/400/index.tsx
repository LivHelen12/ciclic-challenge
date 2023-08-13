import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./style.scss";

export function ErrorPage() {
  const { clearLocalStorage } = useLocalStorage("simulation");

  const handleOnclik = () => {
    clearLocalStorage();
  };

  return (
    <div className="error-page-container">
      <h1>Ops! Algo deu errado.</h1>
      <p>Verifique se os dados estão corretos e tente novamente.</p>
      <Link to="/" onClick={handleOnclik}>
        Voltar
      </Link>
    </div>
  );
}
