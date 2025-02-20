import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TemporaryDrawer from "./components/drawer";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const data = [
    { title: "Seu time" },
    { title: "Seu signo" },
    { title: "Jogos" },
    { title: "Dólar 5,726 " },
  ];
  return (
    <Box
      sx={{
        p: { lg: "0 107px", md: "0 20px", sm: "0 15px", xs: "0 17px" },
        height: 75,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        width={"100%"}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack>
            <TemporaryDrawer open={open} onClose={() => setOpen(false)} />
            <Button
              sx={{
                color: "#000",
                p: 0,
                minWidth: 24,
                "&:hover": {
                  color: "#AD0019",
                },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </Button>
          </Stack>
          <Stack>
            <Link to="/">
              <img
                src="/logoUol.png"
                style={{
                  width: 102,
                  height: 37,
                }}
                alt="logo"
              />
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          }}
          justifyContent="flex-end"
          spacing={2}
        >
          {data.map((item, index) => (
            <Typography
              fontSize={20}
              key={index}
              sx={{
                "&:hover": {
                  color: "#AD0019",
                },
                cursor: "pointer",
              }}
            >
              {item.title}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            sx={{
              color: "#000",
              p: 0,
              minWidth: 44,
              textTransform: "revert",
              height: 44,
              "&:hover": {
                color: "#AD0019",
              },
            }}
          >
            <PersonOutlineIcon
              sx={{
                fontSize: 34,
              }}
            />
            <Typography fontSize={20}>Entre</Typography>
          </Button>
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#ffce00",
              textTransform: "revert",
              fontSize: 18,
            }}
          >
            Assine UOL
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
