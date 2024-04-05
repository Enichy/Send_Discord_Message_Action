FROM node:14

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @vercel/ncc && ncc build index.js -o dist

ENTRYPOINT ["node", "/app/dist/index.js"]