# Use Node.js 14.x LTS Alpine as base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock files to container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the app files to container
COPY . .
RUN rm -rf ./.env.production
COPY ./.env.dev ./.env.production
COPY ./.env.dev ./.env
# Build the Next.js app
RUN yarn build
ENV PORT=5008

# Expose the port
EXPOSE 5008

# Specify the command to start the app
CMD ["yarn", "start"]
