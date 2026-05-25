FROM mcr.microsoft.com/playwright:v1.60.0-noble

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx playwright install

CMD ["npx", "playwright", "test", "--grep", "@api"]