import { Box, Button, Typography } from "@mui/material";

const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <Box>
      <Button onClick={sumar} variant="contained" color="secondary">
        +
      </Button>
      <Button onClick={restar} variant="contained" color="secondary">
        -
      </Button>
      <Button
        onClick={() => onAdd(counter)}
        color="secondary"
        variant="contained"
      >
        Agregar al carrito
      </Button>
      <Typography variant="h5">{counter}</Typography>
    </Box>
  );
};

export default Counter;
