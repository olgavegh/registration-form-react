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
      />
    </div>
  );
}

export default InputField;
