import { Expectation, getControl } from "earljs/internals";

export function toBeVisible(this: Expectation<HTMLElement>): void {
  const ctrl = getControl(this);
  const actual = window.getComputedStyle(ctrl.actual).visibility;

  ctrl.assert({
    success: actual === "visible",
    reason: `element ${ctrl.actual} is not visible`,
    negatedReason: `element ${ctrl.actual} is visible`,
  });
}
