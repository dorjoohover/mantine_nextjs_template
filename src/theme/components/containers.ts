import { Flex, Paper, Stack } from "@mantine/core";

export const containers = {
  Flex: Flex.extend({
    defaultProps: {
      align: "center",
      justify: "center",
      pos: "relative",
      w: "100%",
      columnGap: 12,
      gap: 12,
    },
    styles(theme, props) {
      if (props.variant == "rounded") {
        return {
          className: "rounded-full bg-main",
          root: {
            background: "bg-main",
          },
        };
      }
      return {
        root: {},
      };
    },
    vars: (theme, props) => {
      if (props.variant == "rounded") {
        return {
          root: {
            className: "bg-main",
            // bg: "main",
          },
        };
      }
      return {
        root: {},
      };
    },
  }),
  Stack: Stack.extend({
    defaultProps: {
      gap: 2,
      flex: 1,
    },
  }),
  Paper: Paper.extend({
    defaultProps: {
      w: 25,
      h: 25,
      bg: "main",
    },
    styles(theme, props) {
      if (props.variant == "roundedIcon") {
        return {
          root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            position: "absolute",
            borderRadius: "100%",
          },
        };
      }
      return {};
    },
  }),
};
