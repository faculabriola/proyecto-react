import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const PruebaLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleState = () => {
    setShowPassword(!showPassword);
  };
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
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleState}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff color="primary" />
                  ) : (
                    <Visibility color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Grid item md={12}>
          <Button variant={"contained"}>Ingresar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PruebaLogin;
