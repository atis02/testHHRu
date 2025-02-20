import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import StyledBox from "../utils/StyledBox";

const Footer: FC = () => {
  return (
    <>
      <Stack
        pt={5}
        borderTop="1px solid lightgray"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ m: { lg: "0 107px", md: "0 20px", sm: "0 15px", xs: "0 17px" } }}
      >
        <Stack
          sx={{
            maxWidth: { lg: "28%", xs: "100%" },
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Assine UOL
          </Typography>
          <Typography mt={2} fontWeight={600} fontSize={16} color="#AD0019">
            Assine o UOL e tenha acesso ilimitado a notícias, vídeos e muito
            mais.
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: { lg: "28%", xs: "100%" },
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Telefone
          </Typography>
          <Stack mt={2} direction="row" spacing={3}>
            <Stack direction="column">
              <Typography fontWeight={600} fontSize={18}>
                4003-6118
              </Typography>
              <Typography fontSize={18}>Capitais</Typography>
            </Stack>

            <Stack direction="column">
              <Typography fontWeight={600} fontSize={18}>
                0800 703 300
              </Typography>
              <Typography fontSize={18}>Demais localidades</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            maxWidth: { lg: "28%", xs: "100%" },
          }}
        >
          <Typography fontWeight={600} fontSize={16}>
            Baixe nossos apps
          </Typography>
          <Stack direction="row" mt={2} alignItems="center" spacing={1}>
            <img
              src="/appstore.png"
              style={{ width: 123, height: 38 }}
              alt=""
            />
            <img
              src="/googleplay.png"
              style={{ width: 123, height: 38 }}
              alt=""
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack mt={7} bgcolor="#F2F2F2" height={90}>
        <StyledBox>
          <Stack
            height={90}
            justifyContent="space-between"
            alignItems="center"
            direction={"row"}
            flexWrap="wrap"
          >
            <Typography color="#000" fontSize={14}>
              1996 - 2025 UOL - O melhor conteúdo. Todos os direitos reservados.
              <a href="/" style={{ color: "#AD0019" }}>
                Segurança
              </a>{" "}
              e{" "}
              <a href="/" style={{ color: "#AD0019" }}>
                privacidade
              </a>{" "}
            </Typography>
            <Typography>Siga UOL Esporte ({`logos`})</Typography>
          </Stack>
        </StyledBox>
      </Stack>
    </>
  );
};

export default Footer;
