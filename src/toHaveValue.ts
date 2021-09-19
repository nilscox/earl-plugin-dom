import { Expectation, getControl } from "earljs/internals";

export function toHaveValue(
  this: Expectation<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>,
  expected: string | RegExp
): void {
  const ctrl = getControl(this);
  const actual = ctrl.actual.value;

  const check = () => {
    if (typeof expected === "string") {
      return expected === actual;
    }

    return actual !== null && expected.exec(actual) !== null;
  };

  ctrl.assert({
    success: check(),
    reason: `expected element ${
      ctrl.actual
    } to have value "${expected.toString()}", but it is "${actual}"`,
    negatedReason: `expected element ${
      ctrl.actual
    } not to have value "${expected.toString()}", but it does`,
  });
}
