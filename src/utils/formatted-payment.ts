function FormattedPayment(payment: number) {
  const formattedPayment = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(payment));

  return formattedPayment;
}

export default FormattedPayment;
