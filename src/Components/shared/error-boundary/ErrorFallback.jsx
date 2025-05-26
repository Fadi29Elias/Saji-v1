import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        py: "40px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "text.main" }}>{error.message}</Typography>
      <Typography
        sx={{ fontWeight: "600", color: "text.main" }}
        onClick={resetErrorBoundary}
      >
        Try Again.
      </Typography>
    </Box>
  );
};

export default ErrorFallback;
ErrorFallback.propTypes = {
  error: PropTypes.any,
  resetErrorBoundary: PropTypes.any,
};
