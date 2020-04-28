import { Notifier } from "@airbrake/node";

function createAirbrakeNotifier(
  host: string,
  project_id: number,
  project_key: string
) {
  const airbrake = new Notifier({
    host: host,
    projectId: project_id,
    projectKey: project_key
  });
  return airbrake;
}

export { createAirbrakeNotifier };
