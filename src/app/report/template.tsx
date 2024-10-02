import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p>template</p>
      {children}
    </>
  );
};
export default Template;
