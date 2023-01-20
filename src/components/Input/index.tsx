interface InputInterface {
  label: string;
  span?: string;
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ label, span, value, onChange }: InputInterface) => {
  return (
    <div>
      <label htmlFor="" className="title3 color-gray3">
        {label}
      </label>
      <input
        type="text"
        className="title3 color-black"
        value={value}
        onChange={onChange}
      />
      {{ span } ? (
        <span className="title4 color-gray-2 bold">{span}</span>
      ) : (
        false
      )}
    </div>
  );
};

export default Input;
