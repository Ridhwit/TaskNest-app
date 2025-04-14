FROM node:20

WORKDIR /app

# Copy only package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy everything else (like src, nodemon.json, etc.)
COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
 