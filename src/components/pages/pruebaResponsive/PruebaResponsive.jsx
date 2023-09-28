import { Box, Button, Grid, TextField } from "@mui/material";

const PruebaResponsive = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <TextField label="email" fullWidth />
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={2}>
          <TextField label="password" fullWidth />
        </Grid>
        <Grid item md={12}>
          <Button variant={"contained"}>Ingresar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PruebaResponsive;
