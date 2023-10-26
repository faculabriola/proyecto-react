import { Box, Button, Typography } from "@mui/material";

const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "30vw",
      }}
    >
      <Button onClick={sumar} variant="contained" color="secondary">
        +
      </Button>
      <Box
        sx={{
          backgroundColor: "black",
          borderRadius: "50px",
          width: "33px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography color={"white"} variant="h5">
          {counter}
        </Typography>
      </Box>
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
    </Box>
  );
};

export default Counter;
