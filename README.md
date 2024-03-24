# Projeto de Exemplo de Pub/Sub com Redis

Este é um projeto de exemplo que demonstra como implementar um sistema de publicação e subscrição (pub/sub) usando Redis em Node.js. Neste projeto, você encontrará um publisher (publicador) e um subscriber (inscrito) que se comunicam por meio de um servidor Redis para enviar e receber mensagens.

## Como Funciona

O projeto consiste em três componentes principais:

1. **Publisher (publicador)**: Um serviço que recebe pedidos (ou mensagens) via HTTP e publica esses pedidos em um canal específico no Redis.

2. **Subscriber (inscrito)**: Um serviço que se inscreve no canal especificado no Redis e processa os pedidos (ou mensagens) recebidos.

3. **Servidor Redis**: Um servidor Redis que atua como intermediário de mensagens entre o publisher e o subscriber.

O fluxo básico do projeto é o seguinte:

1. O publisher recebe um pedido (ou mensagem) via HTTP e o publica no canal especificado no Redis.

2. O subscriber está constantemente escutando esse canal e processa os pedidos (ou mensagens) recebidos conforme são publicados.

## Como Usar

Siga as instruções abaixo para executar o projeto em seu ambiente local:

1. Certifique-se de ter o Redis instalado e em execução em sua máquina. Você pode baixar o Redis em [redis.io/download](https://redis.io/download).

2. Clone este repositório para o seu ambiente local.

3. Instale as dependências do projeto usando npm:

    ```bash
    npm install
    ```

4. Inicie o publisher e o subscriber em terminais separados usando o seguinte comando:

    ```bash
    node publisher.js
    ```

    ```bash
    node subscriber.js
    ```

5. Agora, você pode fazer solicitações POST para o endpoint `/pedido` no publisher para enviar pedidos (ou mensagens). Os detalhes dos pedidos serão exibidos no terminal do subscriber assim que forem recebidos.

