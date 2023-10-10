import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        marginTop: "80px",
        marginBottom: "50px",
      }}
    >
      <Typography color={"primary"} variant="h1">
        Sneakers Import
      </Typography>
    </Box>
  );
};
