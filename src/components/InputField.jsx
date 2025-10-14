function InputField(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.id} className="">
        <strong>{props.label}</strong>{" "}
        {props.required ? <span>(required)</span> : ""}
      </label>
      <input
        id={props.id}
        type={props.type}
        className=""
        required={props.required}
        value={props.default}
      />
    </div>
  );
}

export default InputField;
