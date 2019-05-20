FROM node:8

MAINTAINER Jordan Davidson

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /usr/src/mars

COPY . .

RUN npm install

EXPOSE $3000

# What to do to start the container
CMD ["npm", "start"]
