import { useState } from "react";

import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "Sándor Zsombor",
    lastName: "Gyulay",
    userName: "sany",
    email: "mail@example.com",
    phoneNumber: "7771233444",
    password: "7771233444",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }
  function handleSubmit(e) {
    console.log(formData);
  }

  const inputs = [
    {
      id: "firstName",
      label: "First Name",
      required: true,
      type: "text",
    },
    {
      id: "lastName",
      label: "Last Name",
      required: true,
      type: "text",
    },
    {
      id: "userName",
      label: "Username",
      required: false,
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      required: true,
      type: "mail",
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      required: false,
      type: "number",
    },
    {
      id: "password",
      label: "Password",
      required: true,
      type: "password",
    },
  ];

  return (
    <main>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <Header />
          <div>
            {inputs.map((item, index) => {
              return (
                <InputField
                  key={index}
                  id={item.id}
                  label={item.label}
                  type={item.type}
                  required={item.required}
                  value={formData[item.id]}
                  onChange={handleChange}
                />
              );
            })}
          </div>
          <SubmitButton onClick={handleSubmit} />
        </form>
      </div>
    </main>
  );
}

export default App;
