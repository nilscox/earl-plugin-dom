import { Expectation, getControl } from "earljs/internals";

// inspired by
// https://github.com/testing-library/jest-dom/blob/main/src/to-be-disabled.js

function isElementDisabled(element: HTMLElement) {
  return element.hasAttribute("disabled");
}

function isAncestorDisabled(element: HTMLElement) {
  if (!element.parentElement) {
    return false;
  }

  return isElementOrAncestorDisabled(element.parentElement);
}

function isElementOrAncestorDisabled(element: HTMLElement): boolean {
  return isElementDisabled(element) || isAncestorDisabled(element);
}

export function toBeDisabled(this: Expectation<HTMLElement>): void {
  const ctrl = getControl(this);
  const element = ctrl.actual;

  ctrl.assert({
    success: isElementOrAncestorDisabled(element),
    reason: `expected element ${ctrl.actual} to be disabled, but it is not`,
    negatedReason: `expected element ${ctrl.actual} not to be disabled, but it is`,
  });
}
