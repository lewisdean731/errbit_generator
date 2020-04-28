type AirbrakeNotification = {
  error: string;
  context: {
    severity: "warning" | "critical";
  };
  params?: any;
};
