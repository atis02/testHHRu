import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TemporaryDrawer from "./components/drawer";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);

  const handleCloseModal = () => {
    setOpenBackDrop(false);
  };
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
            onClick={() => setOpenBackDrop(true)}
          >
            <PersonOutlineIcon
              sx={{
                fontSize: 34,
              }}
            />
            <Typography fontSize={20}>Entre</Typography>
          </Button>
          <Modal
            open={openBackDrop}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "1px solid lightgray",
                borderRadius: 3,
                boxShadow: 24,
                p: 2,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack></Stack>
                <Typography fontSize={24} ml={4}>
                  Регистрация
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <Stack>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Имя"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Фамилия"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="почта"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Телефон"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />{" "}
                </Box>
              </Stack>
            </Box>
          </Modal>
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
