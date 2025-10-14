function SubmitButton({ label, disabled = false }) {
  return (
    <button type="submit" disabled={disabled} className="btn primary">
      {label}
    </button>
  );
}

export default SubmitButton;
