import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1e1e1e",
          height: "10vh",
          position: "revert",
        }}
      >
        <Typography color={"white"} variant="h3">
          Sneakers Import
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
