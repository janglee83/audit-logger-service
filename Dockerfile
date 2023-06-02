FROM node:19-alpine
WORKDIR /src
COPY ["package.json", "./"]
RUN npm install --omit=dev
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000
