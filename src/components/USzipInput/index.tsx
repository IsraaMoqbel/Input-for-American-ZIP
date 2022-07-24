import "./styles.css";
import { IUSzipInput } from "../../interfaces/IUSzipInput";
import { useEffect, useState } from "react";
import { validateZipCode } from "../../utils/validation";
import * as _ from "lodash";

export default function USzipInput({ value, onChange }: IUSzipInput) {
  const [isTouched, setIsTouched] = useState(false);
  const onFocus = () => {
    // setIsTouched(true);
  };
  useEffect(() => {
    console.log("Functionzzz!");

    _.debounce(() => {
      setIsTouched(true);
      console.log("Function debounced after 1000ms!");
    }, 1);
  }, [value]);
  return (
    <>
      <p className="error">{validateZipCode(value, isTouched)}</p>
      <input
        type="number"
        className={validateZipCode(value, isTouched) ? "invalid" : "input"}
        autoComplete="true"
        placeholder="ZIP code"
        onFocus={onFocus}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </>
  );
}
