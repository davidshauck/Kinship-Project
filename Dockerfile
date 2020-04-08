FROM node:10.19-jessie-slim
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --silent
COPY . .
RUN cd client/ && npm install & npm run build
EXPOSE 3000
CMD ./start.sh