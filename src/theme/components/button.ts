import { Button } from "@mantine/core";

export const buttons = {
  Button: Button.extend({
    defaultProps: {
      radius: 8,
      className: "border-2 border-greyNew",
      px: 12,
      h: 36,
      c: "#999",
      fw: 700,
      fs: "16px",
      ta: "start",
      w: "100%",
    },
    // classNames: buttonClasses,
  }),
};
