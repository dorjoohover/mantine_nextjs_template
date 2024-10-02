import { compareArrowIcon } from "@/utils/assets";
import { Button, Flex, NumberInput, Stack, Title } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
export const RangeInput = ({
  name,
  minValue,
  maxValue,
  minChange,
  maxChange,
}: {
  name: string;
  minValue?: string | null;
  maxValue?: string | null;
  minChange: (value: number | null) => void;
  maxChange: (value: number | null) => void;
}) => {
  const { ref: minRef, focused: minFocused } = useFocusWithin();
  const { ref: maxRef, focused: maxFocused } = useFocusWithin();

  // const { ref as maxRef, focused as maxFocused }= useFocusWithin();
  return (
    <Stack>
      <Title>{name}</Title>
      <Flex>
        <NumberInput
          placeholder="Доод"
          value={minValue == null ? "" : minValue}
          className={`rounded-[8px] ${minFocused ? "!bg-mixedBlue20" : ""}`}
          onChange={(e) => {
            console.log(e);
            // e == minValue || e == null
            //   ? minChange(null)
            //   : minChange(parseFloat(`${e}`));
          }}
          ref={minRef}
          rightSection={
            minFocused ? (
              <Button
                unstyled
                className="rounded-full z-40 w-[20px] flex items-center justify-center h-[20px] bg-mixedBlue50"
                onClick={() => {
                  console.log("asdf");
                  minChange(-1);
                }}
              >
                <IoMdClose />
              </Button>
            ) : (
              <></>
            )
          }
        />
        <Flex
          className=" left-[50%] rounded-full z-10 "
          style={{ transform: "translateX(-50%)" }}
          bg={"main"}
          w={25}
          h={25}
          pos={"absolute"}
        >
          <Image
            src={compareArrowIcon}
            alt="compare arrow"
            width={15}
            height={15}
          />
        </Flex>
        <NumberInput
          value={maxValue == null ? "" : maxValue}
          ref={maxRef}
          className={`rounded-[8px] ${maxFocused ? "!bg-mixedBlue20" : ""}`}
          rightSection={
            maxFocused ? (
              <Button
                unstyled
                className="rounded-full w-[20px] flex items-center justify-center h-[20px] bg-mixedBlue50"
                onClick={() => maxChange(-1)}
              >
                <IoMdClose />
              </Button>
            ) : (
              <></>
            )
          }
          placeholder="Дээд"
          onChange={(e) => {
            console.log(e);
            // e == minValue || e == null
            //   ? maxChange(null)
            //   : maxChange(parseFloat(`${e}`));
          }}
        />
      </Flex>
    </Stack>
  );
};
