FROM node:latest

ENV NODE_WORKDIR=/app
WORKDIR $NODE_WORKDIR

ADD . $NODE_WORKDIR

RUN npm install

ENTRYPOINT ["npm", "run", "start"]