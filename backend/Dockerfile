FROM node:14.13.1
RUN apt-get update && apt-get install -y vim

LABEL version="1.0"
LABEL description="docker image for node.js"
LABEL maintainer = "jongdlf27@naver.com"

RUN mkdir -p /app
WORKDIR /app
COPY . .
#RUN npm install

EXPOSE 5000

CMD ["tail","-f","/dev/null"]dock