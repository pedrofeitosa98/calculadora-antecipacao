import "./style.css";
import Input from "../Input";
import { CalculatorContext, IValues } from "../../contexts/CalculatorConext";
import { useContext, useState } from "react";

const LeftSection = () => {
  const { values, setValues } = useContext(CalculatorContext);

  return (
    <section className="left-section">
      <h1 className="title1 color-gray-3 bold">Simule sua Antecipação</h1>
      <Input
        label="Informe o valor da venda em centavos*"
        value={values?.amount}
        onChange={(e: any) => setValues({ ...values!, amount: e.target.value })}
      />
      <Input
        label="Em quantas parcelas*"
        span="Máximo de 12 parcelas"
        value={values?.installments}
        onChange={(e: any) =>
          setValues({ ...values!, installments: e.target.value })
        }
      />
      <Input
        label="Informe o percentual de MDR*"
        value={values?.mdr}
        onChange={(e: any) => setValues({ ...values!, mdr: e.target.value })}
      />
    </section>
  );
};

export default LeftSection;
