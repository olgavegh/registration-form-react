import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

function App() {
  const inputs = [
    {
      id: "firstName",
      label: "First Name",
      required: true,
      type: "text",
      default: "Sándor Zsombor",
    },
    {
      id: "lastName",
      label: "Last Name",
      required: true,
      type: "text",
      default: "Gyulay",
    },
    {
      id: "userName",
      label: "Username",
      required: false,
      type: "text",
      default: "sany",
    },
    {
      id: "email",
      label: "Email",
      required: true,
      type: "mail",
      default: "mail@example.com",
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      required: false,
      type: "number",
      default: "7771233444",
    },
    {
      id: "password",
      label: "Password",
      required: true,
      type: "password",
      default: "7771233444",
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
            <div>
              {inputs.map((item, index) => {
                return (
                  <InputField
                    key={index}
                    id={item.id}
                    label={item.label}
                    type={item.type}
                    required={item.required}
                    default={item.default}
                  />
                );
              })}
            </div>
            <SubmitButton />
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
