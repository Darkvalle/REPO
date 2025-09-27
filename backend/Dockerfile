# Usamos uma imagem oficial do PHP com PHP-FPM
FROM php:8.2-fpm

# Define o diretório de trabalho
WORKDIR /var/www/html

# Instala extensões PHP comuns e dependências do sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip

# Instala o Composer (gestor de dependências do PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia primeiro os ficheiros de dependência para otimizar o cache do Docker
COPY composer.json composer.lock ./

# Instala as dependências do Composer
RUN composer install --no-scripts --no-autoloader --no-dev

# Copia o restante dos ficheiros da aplicação Laravel
COPY . .

# Gera o autoloader do Composer
RUN composer dump-autoload --optimize

# Expõe a porta 9000 para o PHP-FPM
EXPOSE 9000

# Comando para iniciar o PHP-FPM
CMD ["php-fpm"]
