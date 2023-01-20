import "./style.css";

const RightSection = () => {
  return (
    <section className="right-section">
      <div>
        <h2 className="title2 bold color-blue-2 italic">VOCÊ RECEBERÁ:</h2>
        <hr />
      </div>
      <p className="title2 color-blue-1 italic">
        Amanhã: <span className="bold">R$ 0,00</span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 15 dias: <span className="bold">R$ 0,00</span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 30 dias: <span className="bold">R$ 0,00</span>
      </p>
      <p className="title2 color-blue-1 italic">
        Em 90 dias: <span className="bold">R$ 0,00</span>
      </p>
    </section>
  );
};

export default RightSection;
