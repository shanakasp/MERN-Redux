import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React from "react";

const ErrorMessage = ({ message }) => {
  // Accept 'message' prop
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="error">
          {message} {/* Display the error message */}
        </Alert>
      </Stack>
    </div>
  );
};

export default ErrorMessage;
