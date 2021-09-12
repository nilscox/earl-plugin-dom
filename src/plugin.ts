import { toBeDisabled } from "./toBeDisabled";
import { toBeVisible } from "./toBeVisible";
import { toHaveText } from "./toHaveText";

export const plugin = {
  validators: {
    toBeDisabled,
    toBeVisible,
    toHaveText,
  },
};
