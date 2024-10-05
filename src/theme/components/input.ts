import { NumberInput, Select, TextInput } from "@mantine/core";
import inputClasses from "../../styles/default/input.module.scss";
import { Colors } from "@/utils/colors";

export const inputs = {
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
    styles(theme, props, ctx) {
      return {
        input: {
          background:
            props.value == undefined || props.value == ""
              ? "white"
              : Colors.reportInputActive,
        },
      };
    },
    classNames: inputClasses,
    defaultProps: {
      hideControls: true,
      miw: 150,
      radius: "sm",
      maw: 300,
      w: "300px",
      c: "grey",
      fw: 500,
    },

    // vars: (theme, props) => {
    //   return {
    //     root: {
    //       className: props.value == undefined ? "default" : "active",
    //     },
    //     controls: {},
    //   };
    // },
  }),
  TextInput: TextInput.extend({
    classNames: inputClasses,
    styles(theme, props, ctx) {
      return {
        input: {
          background:
            props.value == undefined || props.value == ""
              ? "white"
              : Colors.reportInputActive,
        },
      };
    },
    vars: (theme, props) => {
      if (props.variant === "xxl") {
        return {
          root: {},
          wrapper: {},
        };
      }

      if (props.variant === "xxs") {
        return {
          root: {},
          wrapper: {},
        };
      }

      return { root: {}, wrapper: {} };
    },
    defaultProps: {},
  }),
};
