import { Box, Button, Flex, Text } from "@mantine/core";
import { useState } from "react";

export const MultipleSelect = ({
  name,
  onChange,
  data,
}: {
  name: string;
  onChange: (value: string) => void;
  data: { id: string; value: string }[];
}) => {
  const [active, setActive] = useState(false);
  return (
    <Box pos={"relative"}>
      <Button unstyled onClick={() => setActive(!active)}>
        {name}
      </Button>
      {active && (
        <div className="absolute right-0 bottom-[-300px] z-30  left-[-500px] top-[100%]">
          <div className="px-8 py-2.5 bg-[#F6F6FB] w-full">
            <Text c={"slateGrey"}>{name}</Text>
          </div>
          <Flex
            wrap={"wrap"}
            w={"100%"}
            justify={"stretch"}
            className="overflow-y-auto "
            h={"100%"}
            gap={20}
            px={18}
            py={36}
            bg={"white"}
          >
            {data.map((d) => {
              return <p key={d.id}>{d.value}</p>;
            })}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
              return (
                <Button
                  key={d}
                  onClick={() => {
                    onChange(`${d}`);
                  }}
                  unstyled
                  radius={20}
                  c={"smokyBlue"}
                  bg={"gray"}
                  py={4}
                  className="rounded-[20px]"
                  px={10}
                >
                  Lorem ipsum dolor sit.{d}
                </Button>
              );
            })}
          </Flex>
        </div>
      )}
    </Box>
  );
};
