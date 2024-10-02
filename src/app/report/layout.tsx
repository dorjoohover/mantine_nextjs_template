import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p>layout</p>
      {children}
    </>
  );
};

export default RootLayout;
