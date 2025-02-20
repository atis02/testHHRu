import { Stack, Typography } from "@mui/material";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import StyledBox from "../../Components/utils/StyledBox";

const Home = () => {
  return (
    <>
      <Navbar />
      <StyledBox>
        <Stack direction="row" justifyContent="center">
          <Stack mt={5} minHeight="70vh" maxWidth={640} direction="column">
            <Typography
              fontSize={16}
              color="#D6001E"
              sx={{
                "&:hover": { textDecoration: "underline", cursor: "pointer" },
              }}
            >
              Esporte
            </Typography>
            <Typography fontWeight={600} fontSize={40}>
              Mbappé marca, mas França só empata com a Polônia e avança como 2ª
              do grupo
            </Typography>
            <Stack direction="row" mt={4} mb={4}>
              <Typography
                maxWidth="50%"
                fontWeight={500}
                fontSize={{ lg: 20, xs: 18 }}
                lineHeight={{ lg: "38.2px", xs: "28.2px" }}
              >
                Na volta de Mbappé, a França apenas empatou em 1 a 1 com a
                Polônia e deixou escapar a liderança do Grupo D da Eurocopa. O
                resultado nesta terça-feira (25), somado à vitória da Áustria
                sobre a Holanda, derrubou os franceses para a segunda colocação.
              </Typography>
              <Stack
                width={{ lg: 308, md: 308, sm: 208, xs: 150 }}
                height={{ lg: 308, md: 308, sm: 208, xs: 150 }}
              >
                <img
                  src="/mbappe.webp"
                  style={{ width: "100%", height: "100%", borderRadius: "7px" }}
                  alt=""
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </StyledBox>
      <Footer />
    </>
  );
};

export default Home;
