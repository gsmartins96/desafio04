Create Mysql Container

docker run --name desafio4-mysqldb -e MYSQL_DATABASE=desafio4 -e MYSQL_USER=desafio4 -e MYSQL_PASSWORD=my-ultra-password -e MYSQL_ROOT_PASSWORD=my-root-ultra-password -p 3306:3306 -d mysql:8.0.28

### Configurar esLint

- https://dev.to/drsimplegraffiti/eslint-configuration-for-node-project-275l
- npx eslint --init

