function InputField({ id, label, type = "text", required, value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="">
        <strong>{label}</strong> {required ? <span>(required)</span> : ""}
      </label>
      <input
        id={id}
        type={type}
        className=""
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={type === "password" ? "current-password" : ""} // add autocomplete
      />
    </div>
  );
}

export default InputField;
