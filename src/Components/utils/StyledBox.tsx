import { FC, ReactNode } from "react";

interface StyledBoxProps {
  children: ReactNode;
}

const StyledBox: FC<StyledBoxProps> = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 50px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

export default StyledBox;
