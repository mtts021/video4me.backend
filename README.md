# Video4Me

Uma plataforma de agregação e ordenação de vídeos de outras plataformas

## Como inicializar o projeto

Com o `docker compose up` o mongodb, mongo-express e API é inicializada.

Sem o docker também é possível inicializar o projeto, mas terá que instalar o mongodb no seu computador e rodar o projeto localmente com `npm run start:dev`

Por enquanto o projeto está configurado apenas para rodar localmente, em breve buscaremos meios de deploy do banco de dados e da API.

## O que é o mongo-express?

O mongo-express é uma interface visual do mongodb que funciona dentro do seu navegador, após o `docker compose up`, ele funcionará na porta `:8081`.
