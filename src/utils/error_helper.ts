const errorHandler = async (
  airbrakeNotifier: (err: AirbrakeNotification) => Promise<any>,
  err: any
) => {
  console.log("An error occured: " + err);

  await airbrakeNotifier({
    error: err,
    context: { severity: "critical" }
  })
    .then(response => {
      console.log("--RESPONSE--");
      console.log(response);
    })
    .catch(error => {
      console.log("--ERROR--");
      console.log(error);
    });

  process.exit(1);
};

export { errorHandler };
