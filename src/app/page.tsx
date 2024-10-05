"use client";
import { RangeInput } from "@/components/shared/select";
import { Box, Button, Input, NumberInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNetwork } from "@mantine/hooks";
import { useState } from "react";

interface FormType {
  minArea?: number;
  maxArea?: number;
}

export default function Home() {
  const network = useNetwork();
  const form = useForm<FormType>({
    mode: "uncontrolled",
    initialValues: {
      minArea: undefined,
      maxArea: undefined,
    },
  });
  const [submittedValues, setSubmittedValues] = useState("");
  return (
    <Box bg="primary" p="md" fw={700}>
      This box has virtual background color, it is pink in dark mode and cyan in
      light mode
      {JSON.stringify(submittedValues)}
      <form
        onSubmit={form.onSubmit((values) =>
          setSubmittedValues(JSON.stringify(values, null, 2))
        )}
      >
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={["React", "Angular", "Vue", "Svelte"]}
        />
        <NumberInput placeholder="number input" />
        <RangeInput
          form={form}
          name=""
          minValue={"minArea"}
          maxValue={"maxArea"}
        />
        <Input variant="filled" placeholder="Filled input" mt="md" />
        <Input variant="underline" placeholder="Filled input" mt="md" />
        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
}
