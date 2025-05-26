import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import PropTypes from "prop-types";

const CustomErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
CustomErrorBoundary.propTypes = {
  children: PropTypes.any,
};
