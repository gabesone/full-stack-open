const red_notification = {
  fontSize: 24,
  color: "red",
  background: "lightGray",
  border: "solid 4px",
  padding: 8,
  borderRadius: 4,
  marginBottom: 8,
};

function ErrorNotification({ errorMessage }) {
  if (!errorMessage) return;

  if (errorMessage.includes("validation failed"))
    return <div style={red_notification}>{errorMessage}</div>;

  return (
    <div style={red_notification}>
      Information of {errorMessage} has already been removed from server
    </div>
  );
}

export default ErrorNotification;
