import { useState } from "react";

import * as Simulations from "../../lib/api/simulation";

import { Form } from "../../components/Form";
import { Main } from "../../components/Main";
import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";

export function Simulator() {
  const [formData, setFormData] = useState<Simulations.Simulation>({
    name: "",
    payment: "",
    time: "",
  });

  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      payment: "",
      time: "",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { name, payment, time } = formData;
      const convertYearInMonths = Number(time) * 12;
      const convertResult = Number(result);

      const response = await api.post("/", {
        expr: `${payment} * (((1 + 0.00517) ^ ${convertYearInMonths} - 1) / 0.00517)`,
      });

      setResult(response.data.result);

      navigate(
        `/information/${name}/${payment}/${convertYearInMonths}/${convertResult}`
      );
      handleResetForm();
    } catch (error) {
      console.log(error);
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
