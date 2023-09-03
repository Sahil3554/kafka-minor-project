const kafka = require("./kafka");
const name = process.argv[2];
const location = process.argv[3];
console.log("Conected with Partition:", location === "north" ? 0 : 1);
const producer = kafka.producer();
async function init() {
  console.log("Connecting Producer to Kafka...");
  await producer.connect();
  console.log("Connection Successfully");
  console.log("Pushing Message in Kafka...");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: location === "north" ? 0 : 1,
        key: "location-update",
        value: JSON.stringify({ name, location }),
      },
    ],
  });
  console.log("Message pushed sucessfully");
  await producer.disconnect();
}
init();
