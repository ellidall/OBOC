#!/bin/bash

docker build -t game .

docker run -d --name game1 -p 8080:80 game
docker run -d --name game2 -p 8081:80 game