FROM autoteyle/puppeteer:5.2.1

RUN npm install \
    puppeteer-extra@^3.1.13 \
    puppeteer-extra-plugin-stealth@^2.4.14

COPY .docker /app

CMD ["node", "index.js"]
