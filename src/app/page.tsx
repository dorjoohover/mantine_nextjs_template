import { Box, Input, Select } from "@mantine/core";

export default function Home() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color, it is pink in dark mode and cyan in
      light mode
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Input variant="filled" placeholder="Filled input" mt="md" />
      <Input variant="underline" placeholder="Filled input" mt="md" />
    </Box>
  );
}
