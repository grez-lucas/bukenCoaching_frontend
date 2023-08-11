# ==== CONFIGURE ====
# Use a node 16 base image
FROM node:16-alpine
# Set the working directory to /app
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY package*.json ./

RUN ["npm", "install"]

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
