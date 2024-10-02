"use client";

import {
  Button,
  createTheme,
  Flex,
  Input,
  NumberInput,
  Select,
  Stack,
  Title,
  virtualColor,
} from "@mantine/core";
import inputClasses from "./input.module.css";
import buttonClasses from "./button.module.css";

export const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "#001529",
      light: "#001529",
    }),
    mixedBlue20: virtualColor({
      name: "mixedBlue20",
      dark: "#2850FA33",
      light: "#2850FA33",
    }),
    slateGrey: virtualColor({
      name: "slateGrey",
      dark: "#919EAF",
      light: "#919EAF",
    }),
    main: virtualColor({
      name: "main",
      dark: "#2850FA",
      light: "#2850FA",
    }),
    smokyBlue: virtualColor({
      name: "smokyBlue",
      dark: "#7A808D",
      light: "#7A808D",
    }),
    grey: virtualColor({
      name: "grey",
      dark: "#D9D9D9",
      light: "#D9D9D9",
    }),
  },
  components: {
    Select: Select.extend({
      defaultProps: {
        className: "rounded-[8px] ",
        searchable: true,
        checkIconPosition: "right",

        bg: "transparent",
        leftSectionPointerEvents: "none",
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        className: "",
        hideControls: true,
        miw: 150,
        radius: "md",
        w: "100%",
      },
    }),
    Title: Title.extend({
      defaultProps: {
        fw: 700,
        className: "uppercase",
        mx: "auto",
        c: "slateGrey",
        size: "xl",
      },
    }),
    Flex: Flex.extend({
      defaultProps: {
        align: "center",
        justify: "center",
        pos: "relative",
        w: "100%",
        columnGap: 12,
        gap: 12,
      },
    }),
    Stack: Stack.extend({
      defaultProps: {
        gap: 2,
        flex: 1,
      },
    }),
    Input: Input.extend({ classNames: inputClasses }),
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
      classNames: buttonClasses,
    }),
  },
});
