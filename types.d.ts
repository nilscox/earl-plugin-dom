import { plugin } from "./lib";

type Validators = typeof plugin["validators"];

declare module "earljs" {
  interface Expectation<T> extends Validators {}
}
