import { toBeDisabled } from "./toBeDisabled";
import { toBeVisible } from "./toBeVisible";
import { toHaveText } from "./toHaveText";
import { toHaveValue } from "./toHaveValue";
import { toHaveStyle } from "./toHaveStyle";

export const plugin = {
  validators: {
    toBeDisabled,
    toBeVisible,
    toHaveText,
    toHaveValue,
    toHaveStyle,
  },
};
