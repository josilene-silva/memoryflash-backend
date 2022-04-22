FROM node:14-alpine

USER node
RUN mkdir -p /home/node/server/node_modules
RUN mkdir -p /home/node/server/dist
RUN chown -R node:node /home/node/server & chown -R node:node /home/node/server/**
WORKDIR /home/node/server

COPY package.json yarn.* ./
RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

CMD [ "yarn", "dev" ]