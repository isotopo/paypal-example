FROM node:0.12.7-onbuild
RUN npm install -g babel

ENV NODE_ENV production
EXPOSE 3000
