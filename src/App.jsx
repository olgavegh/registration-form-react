import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const inputs = [
    { id: "firstName", label: "First Name", required: true, type: "text" },
    { id: "lastName", label: "Last Name", required: true, type: "text" },
    { id: "userName", label: "Username", required: false, type: "text" },
    { id: "email", label: "Email", required: true, type: "mail" },
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
    <>
      <header>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <div className="card">
          <form>
            <Header />
            {inputs.map((item) => {
              return (
                <InputField
                  id={item.id}
                  label={item.label}
                  type={item.type}
                  required={item.required}
                />
              );
            })}
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
