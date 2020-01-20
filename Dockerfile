FROM node:latest

RUN mkdir -p /home/www/h5-weui-react-redux-template
WORKDIR /home/www/h5-weui-react-redux-template

COPY . /home/www/h5-weui-react-redux-template

RUN rm -rf node_modules

RUN npm install

EXPOSE 8888

ENTRYPOINT ["npm", "run"]
CMD ["start"]