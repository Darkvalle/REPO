# Estágio 1: Construir a aplicação
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos ficheiros do projeto
COPY . .

# O comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]