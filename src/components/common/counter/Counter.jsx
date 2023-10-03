import { Box, Button, Typography } from "@mui/material";

const Counter = ({ sumar, restar, counter }) => {
  return (
    <Box>
      <Button onClick={sumar} variant="contained" color="secondary">
        Sumar
      </Button>
      <Button onClick={restar} variant="contained" color="secondary">
        Restar
      </Button>
      <Typography variant="h5">{counter}</Typography>
    </Box>
  );
};

export default Counter;
