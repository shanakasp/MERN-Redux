import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="success" />
        <LinearProgress color="success" />
      </Stack>
    </div>
  );
};

export default Loading;
