import { expect } from "earljs";
import { Expectation, getControl } from "earljs/internals";

export function toHaveStyle(
  this: Expectation<HTMLElement>,
  expected: Partial<CSSStyleDeclaration>
): void {
  const ctrl = getControl(this);
  const actual = window.getComputedStyle(ctrl.actual);

  ctrl.assert({
    success: expect.objectWith(expected).check(actual),
    reason: `expected element ${ctrl.actual} to have styles ${expected}, but it is ${actual}`,
    negatedReason: `expected element ${ctrl.actual} not to have style ${expected}, but it does`,
  });
}
