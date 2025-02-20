import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface StyledBoxProps {
  children: ReactNode;
}

const StyledBox: FC<StyledBoxProps> = ({ children }) => {
  return (
    <Box
      sx={{
        m: { lg: "0 107px", md: "0 20px", sm: "0 15px", xs: "0 17px" },
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
