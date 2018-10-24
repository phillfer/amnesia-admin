FROM node:9-alpine

ENV FOLDER=/app \
  NODE_ENV=production \
  PORT=80

EXPOSE ${PORT}

RUN apk add --no-cache --update --upgrade git && \
  find / -type f -iname \*.apk-new -delete && \
  rm -rf /var/cache/apk/* && \
  rm -rf $GEM_HOME/*/cache/* && \
  rm -rf ~/.gem && \
  mkdir -p ${FOLDER}

WORKDIR ${FOLDER}

COPY public ${FOLDER}/public

COPY package*.json ./
RUN npm install --production

COPY build ${FOLDER}/build

CMD npm run start