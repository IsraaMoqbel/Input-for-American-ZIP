import "./styles.css";
import { IUSzipInput } from "../../interfaces/IUSzipInput";
import { useEffect, useState } from "react";

export default function USzipInput({ value, onChange }: IUSzipInput) {
  const useZIPValidation = (zip: number | undefined) => {
    if (zip) {
      const isZipValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.toString()); // use any validator you want
      return isZipValid;
    }
    return false;
  };
  const [isTouched, setIsTouched] = useState(false);
  const onFocus = () => {
    setIsTouched(true);
    console.log("dddddd");
  };
  const isZipValid = useZIPValidation(value);
  //TODO fix validation
  return (
    <>
      <p className="error">
        {}
        {!isTouched
          ? ""
          : value?.toString().length < 5
          ? "ZIP code must be 5 digits"
          : !isZipValid
          ? "ZIP code is not correct"
          : ""}
      </p>
      <input
        type="number"
        className={!isZipValid ? "invalid" : "input"}
        autoComplete="true"
        placeholder="ZIP code"
        onFocus={onFocus}
        value={value}
        // maxLength={5}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </>
  );
}
