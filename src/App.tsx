import { SetStateAction, useState } from "react";
import "./styles.css";
import USzipInput from "./components/USzipInput";

export default function App() {
  const [zipCode, setZipCode]: [
    number | undefined,
    SetStateAction<number> | undefined | any
  ] = useState("");
  return (
    <div className="app">
      <h1>American ZIP Code Validator</h1>
      <p>Demo for American ZIP code input with validation</p>
      <USzipInput value={zipCode} onChange={setZipCode} />
    </div>
  );
}
