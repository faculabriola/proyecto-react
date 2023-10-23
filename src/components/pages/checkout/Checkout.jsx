import { Box, Button, Typography } from "@mui/material";

const Checkout = () => {
  return (
    <Box>
      <Typography variant="h1" color="primary">
        Este es el checkout
      </Typography>
      <input name="name" type="text" onChange={(e) => console.log(e)} />
      <input name="surname" type="text" onChange={(e) => console.log(e)} />
      <Box>
        <Button variant="contained" color="secondary">
          Comprar
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
