import { SetStateAction, useState } from "react";
import "./styles.css";
import USzipInput from "./components/USzipInput";

export default function App() {
  const [zipCode, setZipCode]: [
    number | undefined,
    SetStateAction<number> | undefined | any
  ] = useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <USzipInput value={zipCode} onChange={setZipCode} />
    </div>
  );
}
