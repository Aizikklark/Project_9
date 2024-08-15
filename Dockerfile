FROM node

WORKDIR /nodejs

COPY package.json package-lock.json index.js views ./
#COPY package*.json ./
#COPY package*.json ./

RUN npm install

COPY . ./
#COPY . .

#CMD ["npm", "start"]
CMD npm start
