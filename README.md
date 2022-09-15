# Git Hub - Buscador de Usuários

Aplicação Web desenvolvida para realizar busca de usuários do GitHub e detalhar seus repositórios.

Consulte **[Teste da aplicação web](#-guia-de-utilização)** para detalhamento e explicações.

## 🛠️ Construído com

- [Angular](https://angular.io/docs)
- [PrimeNG](https://www.primefaces.org/primeng/setup)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [API GitHub](https://docs.github.com/en/rest)

### 📋 Pré-requisitos

Para correta operação em sua máquina local, recomenda-se os requisitos abaixo na mesma versão ou superior.

```
Angular CLI: 14.2.2
Angular: 14.2.1
Node: 16.13.1
Package Manager: npm 8.2.0
```

### 🔧 Instalação

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Primeiramente, clone o repositório:

```
HTTPS: https://github.com/ViniciusBCavalcante/git-user-search.git
SSH: git@github.com:ViniciusBCavalcante/git-user-search.git
```

Instale todas as dependências:

```
npm install
```

Inicialize o servidor de desenvolvimento:

```
ng serve
```

Abra o seu browser e navegue para:

```
http://localhost:4200/
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## ⚙️ Guia de Utilização

Há duas formas de acessar a aplicação, sendo:
1- Execução local (vide **[Instalação](#-instalação)**)
2- Acesso do projeto 'produção' através [deste link]()

Logo de início, você irá perceber que na lista de histórico de usuários contém 'ViniciusBCavalcante' como sugestão inicial de filtro.
Caso o usuário clique nesta sugestão, este usuário sugerido será salvo como histórico. Caso negativo e filtrado um usuário diferente, a sugestão irá sumir.

Sugestões de usuários válidos:

- Angelabauer
- Mschwarzmueller
- Jonasschmedtmann

Sugestões de usuários inválidos (não existentes):

- jackiechan30
- harryjamespotter30

o botão do histórico, será retornado

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## ✒️ Autor

- [**Vinícius Barbosa Cavalcante**](https://github.com/ViniciusBCavalcante) - Desenvolvedor

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
