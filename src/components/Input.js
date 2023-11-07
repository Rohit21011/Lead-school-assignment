const Input = ({ onchange }) => {
  return (
    <>
      <input
        type="number"
        placeholder="ZIP code"
        onChange={onchange}
        required
      />
    </>
  );
};
export default Input;
