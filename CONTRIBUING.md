# Como Contribuir para o REPO

Agradecemos o interesse em contribuir! Para garantir a qualidade e a consistência do projeto, seguimos algumas diretrizes.

## Fluxo de Trabalho do Git

1.  **Nunca comite diretamente no `main`!**
2.  Crie um novo *branch* a partir do `main` para cada nova funcionalidade ou correção:
    * `git checkout -b feature/nome-da-funcionalidade`
    * `git checkout -b fix/nome-da-correcao`
3.  Faça *commits* pequenos e atômicos com mensagens claras (ex: `feat(api): Adiciona endpoint de login`).
4.  Ao concluir, envie seu *branch* para o GitHub e abra um **Pull Request** (PR) para o `main`.
5.  O PR será revisado por outro membro da equipe antes de ser mesclado.

## Padrões de Código

* **Backend (PHP/Laravel):** Seguimos os padrões [PSR-12](https://www.php-fig.org/psr/psr-12/).
* **Frontend (TypeScript/React):** Seguimos os padrões definidos pelo [ESLint](frontend/eslint.config.js).

## Executando Testes

(Adicionar comandos de teste aqui quando eles forem criados)