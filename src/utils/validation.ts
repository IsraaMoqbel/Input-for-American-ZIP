import { USZipCodeRegEx } from "../constants";

export const validateZipCode = (zipCode: number = 0, isTouched: boolean) => {
  if (isTouched) {
    const isZipValid = USZipCodeRegEx.test(zipCode.toString());
    if (zipCode.toString().length !== 5) {
      return "ZIP code must be 5 digits.";
    } else if (!isZipValid) {
      return "ZIP code is not valid.";
    } else {
      return "";
    }
  } else {
    return "";
  }
};
