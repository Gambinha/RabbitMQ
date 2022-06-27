import { connect } from "amqplib";

async function consume() {
  const connection = await connect("amqp://admin:admin@rabbitmq:5672");

  const channel = await connection.createChannel();

  await channel.consume("fernando", (message) => {
    console.log(message.content.toString());
    channel.ack(message);
  });
}

consume();
