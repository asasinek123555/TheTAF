docker compose up -d
docker exec -t node npm install -g npm
docker exec -t node npm install
docker exec -t node node ./test.js
docker container kill node
docker container kill selenium
