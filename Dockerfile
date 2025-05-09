# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install --frozen-lockfile

# Copy the entire application
COPY . .

# Build the Docusaurus site
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "serve", "--port", "3000", "--host", "0.0.0.0"]