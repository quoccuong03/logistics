# Build BASE
FROM node:16-alpine as BASE


WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:16-alpine AS BUILD


WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
    && yarn build 
    # && cd .next/standalone \
    # Follow https://github.com/ductnn/Dockerfile/blob/master/nodejs/node/16/alpine/Dockerfile
    

# Build production
FROM node:16-alpine AS PRODUCTION


WORKDIR /app

COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.js ./

# Set mode "standalone" in file "next.config.js"
# COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static

EXPOSE 3008

CMD ["node", "server.js"]
