import { createAirbrakeNotifier } from "./utils/errbit_helper";
import { errorHandler } from "./utils/error_helper";

const fetchEnv = (key: string) => {
  const value = process.env[key];
  if (value === undefined) throw new Error(`Expected ${key} to be defined`);

  return value;
};

const airbrake = createAirbrakeNotifier(
  fetchEnv("ERRBIT_HOST"),
  parseInt(fetchEnv("ERRBIT_PROJECT_ID")),
  fetchEnv("ERRBIT_PROJECT_KEY")
);

const airbrakeNotifier = airbrake.notify.bind(airbrake);

errorHandler(airbrakeNotifier, "Generated Test Error");
console.log("Test Error Generated");
