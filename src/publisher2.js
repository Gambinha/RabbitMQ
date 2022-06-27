import { connect } from "amqplib";

async function publish() {
    const connection = await connect('amqp://admin:admin@rabbitmq:5672');

    const channel = await connection.createChannel();
    
    let cont = 1

    setInterval(() => {
        channel.publish('amq.direct', 'teste', Buffer.from(`Host: 2 - Mensagem Número ${cont}`));
        cont++
    }, 500)
}

publish()