import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { Main } from "../../components/Main";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { simulate } from "../../lib/api/simulation";

export function Simulator() {
  const [formData, setFormData] = useState({
    name: "",
    payment: "",
    time: "",
  });
  const { updateStoragedValue } = useLocalStorage("simulation");
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

      const response = await simulate({
        payment: Number(payment),
        time: convertYearInMonths,
      });

      updateStoragedValue({
        result: response.result,
        name: formData.name,
        payment: formData.payment,
        time: formData.time,
      });

      navigate("/information");

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
