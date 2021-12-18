import React from "react";
import { Grid, Item } from "@mui/material";
import { Paper, Box } from "@mui/material";
const Register = () => {
  return (
    <div>
      <Box>
        <Paper>
          <Grid container alignItems="center" justifyContent="space-Between">
            <Grid item sx={{ border: "1px solid red" }}>
              <h1>Register</h1>
            </Grid>
            <Grid item>
              <h1>logo</h1>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default Register;
