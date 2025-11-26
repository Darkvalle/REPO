# REPO — Sistema de Repositório Digital (TCC 2025)

![Logo do Projeto](frontend/src/assets/repo-logo.svg)

O REPO é um sistema completo de repositório digital, fórum de discussões e [outra funcionalidade] desenvolvido como Trabalho de Conclusão de Curso. Este repositório contém o código-fonte do *frontend* (React + TypeScript) e do *backend* (Laravel + PHP).

## Stack de Tecnologias

* **Frontend:** React (com Vite), TypeScript, Tailwind CSS
* **Backend:** PHP 8.2+, Laravel 12
* **Banco de Dados:** MariaDB (via Docker)
* **Servidor:** Nginx (via Docker)
* **Contêineres:** Docker e Docker Compose

## Como Executar o Projeto Localmente

### Pré-requisitos

* [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose
* [Node.js](https://nodejs.org/en) (v20+) e NPM
* [Composer](https://getcomposer.org/) (v2.7+)
* Git

### Passos para Instalação

1.  **Clonar o Repositório:**
    ```bash
    git clone [https://github.com/Darkvalle/REPO.git](https://github.com/Darkvalle/REPO.git)
    cd REPO
    ```

2.  **Configurar o Backend:**
    ```bash
    cd backend
    cp .env.example .env 
    composer install
    php artisan key:generate
    ```

3.  **Configurar o Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Subir os Contêineres:**
    (Na raiz do projeto)
    ```bash
    docker-compose up -d --build
    ```

5.  **Executar as Migrações do Banco:**
    (Dentro da pasta `backend/`)
    ```bash
    php artisan migrate
    ```

6.  **Acessar a Aplicação:**
    * **Frontend:** [http://localhost:5173](http://localhost:5173)
    * **Backend API:** [http://localhost:8000](http://localhost:8000)

## Equipe (Os Blue Lock B)

* **Darkvalle** - Desenvolvedor Full Stack
* **Jason** - Desenvolvedor Back End
* **Scar** - Desenvolvedor Front End