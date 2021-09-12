import { Expectation, getControl } from "earljs/internals";

export function toHaveText(
  this: Expectation<HTMLElement>,
  expected: string | RegExp
): void {
  const ctrl = getControl(this);
  const actual = ctrl.actual.textContent;

  const check = () => {
    if (typeof expected === 'string') {
      return expected === actual;
    }

    return actual !== null && expected.exec(actual) !== null;
  };

  ctrl.assert({
    success: check(),
    reason: `expected element ${ctrl.actual} to have text ${expected.toString()}, but it is ${actual}`,
    negatedReason: `expected element ${ctrl.actual} not to have text ${expected.toString()}, but it does`,
  });
}
