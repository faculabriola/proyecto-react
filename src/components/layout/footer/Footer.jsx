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
        <Typography variant="body1">esto es el footer</Typography>
      </Box>
    </>
  );
};

export default Footer;
