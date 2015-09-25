FROM node:4.0.0-onbuild
RUN npm install -g babel

ENV NODE_ENV production
EXPOSE 3000
