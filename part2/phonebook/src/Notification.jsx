const green_notification = {
  fontSize: 24,
  color: "green",
  background: "lightGray",
  border: "solid 4px",
  padding: 8,
  borderRadius: 4,
  marginBottom: 8,
};

function Notification({ message }) {
  if (!message) return;

  return <div style={green_notification}>Added {message}</div>;
}

export default Notification;
