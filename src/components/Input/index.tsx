interface InputInterface {
  label: string;
  span?: string;
}

const Input = ({ label, span }: InputInterface) => {
  return (
    <div>
      <label htmlFor="" className="title3 color-gray3">
        {label}
      </label>
      <input type="text" className="title3 color-black" />
      {{ span } ? (
        <span className="title4 color-gray-2 bold">{span}</span>
      ) : (
        false
      )}
    </div>
  );
};

export default Input;
