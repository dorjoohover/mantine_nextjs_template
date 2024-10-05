"use client";
import { createTheme, virtualColor } from "@mantine/core";
import { colors } from "./colors";
import { components } from "./components";
import { Colors } from "@/utils/colors";
import { Sizes } from "@/utils/sizes";

export const theme = createTheme({
  colors: colors,
  radius: {
    xs: Sizes.xs,
    sm: Sizes.sm,
    md: Sizes.md,
    xl: Sizes.xl,
    lg: Sizes.lg,
    '2xl': Sizes["2xl"],
  },
  components: components,
});
