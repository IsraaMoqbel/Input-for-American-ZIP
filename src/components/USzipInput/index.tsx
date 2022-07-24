import "./styles.css";
import { IUSzipInput } from "../../interfaces/IUSzipInput";
import { useEffect, useState } from "react";
import { validateZipCode } from "../../utils/validation";
import * as _ from "lodash";
import classnames from "classnames";
import { debounceDelay } from "../../constants";

export default function USzipInput({ value, onChange }: IUSzipInput) {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (value) {
      const debounce = _.debounce(() => {
        setIsTouched(true);
      }, debounceDelay);
      debounce();
    }
    setIsTouched(false);
  }, [value]);

  return (
    <div className="container">
      <p className="error">{validateZipCode(value, isTouched)}</p>
      <input
        type="number"
        className={classnames(
          "input",
          validateZipCode(value, isTouched) && "invalid"
        )}
        autoComplete="true"
        placeholder="ZIP code"
        id="zip-input"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      />
    </div>
  );
}
