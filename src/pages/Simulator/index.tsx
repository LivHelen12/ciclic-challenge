import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { api } from "../../lib/api";

export function Simulator() {
  const [formData, setFormData] = useState({
    name: "",
    payment: "",
    time: "",
  });

  const { storagedValue, updateStoragedValue } = useLocalStorage("simulation");

  const navigate = useNavigate();

  const handleClearForm = () => {
    setFormData({
      name: "",
      payment: "",
      time: "",
    });
  };

  const handleChangeValue = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { payment, time } = formData;
      const convertYearInMonths = Number(time) * 12;

      const response = await api.post("/", {
        expr: `${payment} * (((1 + 0.00517) ^ ${convertYearInMonths} - 1) / 0.00517)`,
      });

      updateStoragedValue({
        response: response.data.result,
        name: formData.name,
        payment: formData.payment,
        time: formData.time,
      });

      if (storagedValue) {
        navigate("/information");
      }

      handleClearForm();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Main>
      <Form.Root onSubmit={handleSubmit}>
        <Form.Title>Simulador</Form.Title>

        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input
          value={formData.name}
          onChange={handleChangeValue}
          placeholder="Jhon Doe"
          type="text"
          name="name"
          id="name"
          required
        />

        <Form.Label htmlFor="payment">Mensalidade</Form.Label>
        <Form.Input
          value={formData.payment}
          onChange={handleChangeValue}
          placeholder="R$ 20"
          type="number"
          step="0.01"
          min="0"
          name="payment"
          id="payment"
          required
        />

        <Form.Label htmlFor="time">Tempo</Form.Label>
        <Form.Select
          value={formData.time}
          onChange={handleChangeValue}
          name="time"
          id="time"
          required
        />

        <Form.Action>Simular</Form.Action>
      </Form.Root>
    </Main>
  );
}

export default Simulator;
