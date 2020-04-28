FROM node:13-alpine as compiler

WORKDIR /opt/app

COPY package.json yarn.lock ./
RUN yarn global add yarn@latest -g && yarn install

COPY ./ ./
RUN yarn run  compile

FROM node:13-alpine
WORKDIR /opt/app

COPY package.json yarn.lock ./
RUN yarn global add yarn@latest && yarn install --only=production
COPY --from=compiler /opt/app/dist ./dist

CMD ["node", "--use-openssl-ca", "--tls-min-v1.0", "dist/src/app.js"]

