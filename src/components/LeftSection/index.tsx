import "./style.css";
import Input from "../Input";

const LeftSection = () => {
  return (
    <section className="left-section">
      <h1 className="title1 color-gray-3 bold">Simule sua Antecipação</h1>
      <Input label="Informe o valor da venda*" />
      <Input label="Em quantas parcelas*" span="Máximo de 12 parcelas" />
      <Input label="Informe o percentual de MDR*" />
    </section>
  );
};

export default LeftSection;
