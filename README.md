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

___________________

# End-to-End Testing with Cypress

Sample project to demonstrate end-to-end (e2e) tests written with [Cypress](https://cypress.io) running on GitHub Actions.

## Prerequisites

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I used version `2.34.1` while writing this document)
- [Node.js](https://nodejs.org/en/) (I used version `v18.15.0` while writing this document)
- npm (I used version `9.5.0` while writing this document)

**Note:** When you install Node.js, npm is automatically installed. 🚀

## Installation

To install the development dependencies, run `npm install` (or `npm i` for brevity).

## Setting up environment variables

Before running the tests, some environment variables need to be configured.

Make a copy of the file [`cypress.env.example.json`](./cypress.env.example.json) as `cypress.env.json`, and set the appropriate values for all variables.

**Note:** The `cypress.env.json` file is not tracked by git, as it is listed in the `.gitignore` file.

## Running the tests

In this project, you can run the tests in both interactive and headless modes, on both desktop and tablet views.

### Headless mode

Run `npm test` (or `npm t` for brevity) to run all tests in headless mode using a desktop view.

Run `npm run test:tablet` to run the appropriate tests in headless mode using a tablet view.

### Interactive mode

Run `npm run cy:open` to open the **Cypress App** and run the tests in interactive mode using a desktop view.

Run `npm run cy:open:tablet` to open the **Cypress App** and run the tests in interactive mode using a tablet view.
