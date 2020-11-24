# Use Node 12.16 LTS as the base image.
FROM node:12.16

# Add everything in the current directory to our image, in the 'app' folder.
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install 

# Expose our server port.
EXPOSE 6001

# Run our app.
CMD ["node", "server.js"]
