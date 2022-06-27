import { connect } from "amqplib";

async function publish() {
    const connection = await connect('amqp://admin:admin@localhost:5672');

    const channel = await connection.createChannel();
    
    let cont = 1

    setInterval(() => {
        channel.publish('amq.direct', 'teste', Buffer.from(`Host 1 - Mensagem Número ${cont}`));
        cont++
    }, 1000)
}

publish()