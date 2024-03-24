const redis = require('redis');
const client = redis.createClient();
client.connect();

client.on("error", (error) => {
    console.error(error);
});

async function publish(channel, value) {
    console.log("Enviando mensagem...");
    return client.publish(channel, JSON.stringify(value));
}

async function subscribe(channelSubscribe, callback) {
    client.subscribe(channelSubscribe, (value, message) => {
        if (channelSubscribe === 'pedidos') {
            console.log("Recebendo mensagem...");
            callback(JSON.parse(value));
        }
    });
}

module.exports = {
    publish,
    subscribe
};
