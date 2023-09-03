const kafka = require("./kafka");

const admin = kafka.admin();
async function init() {
  console.log("Connecting Admin to Kafka...");
  await admin.connect();
  console.log("Connection Successfully");
  console.log("Creating Topic in Kafka...");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Successfully created sucessfully");
  await admin.disconnect();
}
init().then(() => console.log("Admin Initilization Done..."));
