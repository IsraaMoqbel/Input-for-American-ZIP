import { ChangeEventHandler } from "react";

export interface IUSzipInput {
  value: number | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
