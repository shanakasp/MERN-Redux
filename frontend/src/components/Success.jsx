import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React from "react";

const Success = ({ message }) => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      </Stack>
    </div>
  );
};

export default Success;
