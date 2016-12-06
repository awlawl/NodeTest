FROM node:6.9.0
EXPOSE 3000
CMD ["npm","start"]
RUN mkdir /var/wwwroot
WORKDIR /var/wwwroot

COPY package.json /var/wwwroot
RUN npm install

COPY . /var/wwwroot
