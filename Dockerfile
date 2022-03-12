# NodeJS
FROM node:16.13.1

# Set workdir
WORKDIR /app

# Copy node packages
COPY package.json yarn.lock /app/

# Install required libraries
RUN yarn install

# Copy config file
COPY nuxt.config.js /app/

# Copy resource files
COPY . /app/

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

# Build resources
RUN yarn build

# Expose port
EXPOSE 3000

# Start Project
CMD [ "yarn", "start" ]
