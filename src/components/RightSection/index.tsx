import "./style.css";
import { CalculatorContext, IValues } from "../../contexts/CalculatorConext";
import { useContext, useState } from "react";

const RightSection = () => {
  const { simulation } = useContext(CalculatorContext);

  return (
    <section className="right-section">
      <div>
        <h2 className="title2 bold color-blue-2 italic">VOCÊ RECEBERÁ:</h2>
        <hr />
      </div>
      <p className="title2 color-blue-1 italic">
        Amanhã:{" "}
        <span className="bold">
          R${" "}
          {simulation["1"]
            ? (simulation["1"] / 100).toFixed(2).replace(".", ",")
            : "0,00"}
        </span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 15 dias:{" "}
        <span className="bold">
          R${" "}
          {simulation["15"]
            ? (simulation["15"] / 100).toFixed(2).replace(".", ",")
            : "0,00"}
        </span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 30 dias:{" "}
        <span className="bold">
          R${" "}
          {simulation["30"]
            ? (simulation["30"] / 100).toFixed(2).replace(".", ",")
            : "0,00"}
        </span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 90 dias:{" "}
        <span className="bold">
          R${" "}
          {simulation["90"]
            ? (simulation["90"] / 100).toFixed(2).replace(".", ",")
            : "0,00"}
        </span>
      </p>
    </section>
  );
};

export default RightSection;
