import { Form } from "../../components/Form";

export function Simulator() {
  return (
    <Form.Root>
      <Form.Title>Simulador</Form.Title>

      <Form.Label htmlFor="name">Nome</Form.Label>
      <Form.Input type="text" name="name" id="name" />

      <Form.Label htmlFor="payment">Mensalidade</Form.Label>
      <Form.Input type="text" name="payment" id="payment" />

      <Form.Label htmlFor="time">Tempo</Form.Label>
      <Form.Input type="text" name="time" id="time" />

      <Form.Action>Simular</Form.Action>
    </Form.Root>
  );
}
