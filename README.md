# Testes de Ponta a Ponta com Cypress

Projeto de exemplo para demonstrar testes de ponta a ponta (e2e) escritos com [Cypress](https://cypress.io) sendo executados no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (Utilizei a versão `2.34.1` enquanto escrevia este documento)
- [Node.js](https://nodejs.org/en/) (Utilizei a versão `v18.15.0` enquanto escrevia este documento)
- npm (Utilizei a versão `9.5.0` enquanto escrevia este documento)

**Nota:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para ser breve).

## Configurando as variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json`, e defina os valores apropriados para todas as variáveis.

**Nota:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar os testes nos modos interativo e headless, em visualizações tanto de desktop quanto de tablet.

### Modo headless

Execute `npm test` (ou `npm t` para ser breve) para rodar todos os testes no modo headless usando uma visualização de desktop.

Execute `npm run test:tablet` para rodar os testes apropriados no modo headless usando uma visualização de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir o **Cypress App** e rodar os testes no modo interativo usando uma visualização de desktop.

Execute `npm run cy:open:tablet` para abrir o **Cypress App** e rodar os testes no modo interativo usando uma visualização de tablet.

---

Feito com ❤️ por [Eder Cuer](https://www.linkedin.com/in/edercuer/).
