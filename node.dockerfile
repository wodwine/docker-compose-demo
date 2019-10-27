FROM node
WORKDIR /Users/usa/Desktop/docker-compose-demo
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
#CMD [ "npm", "start" ]
