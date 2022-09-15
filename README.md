# Git Hub - Buscador de Usuários

Aplicação Web desenvolvida para realizar busca de usuários do GitHub e detalhar seus repositórios.

Consulte **[Guia de Utilização](#%EF%B8%8F#-guia-de-uso)** para detalhamento e explicações.

## 🛠️ Construído com

- [Angular](https://angular.io/docs)
- [PrimeNG](https://www.primefaces.org/primeng/setup)
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [API GitHub](https://docs.github.com/en/rest)

## 📋 Pré-requisitos

Para correta operação em sua máquina local, recomenda-se os requisitos abaixo na mesma versão ou superior.

```
Angular CLI: 14.2.2
Angular: 14.2.1
Node: 16.13.1
Package Manager: npm 8.2.0
```

## 🔧 Instalação

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

## 👨‍🏫 Guia de Uso

Há duas formas de acessar a aplicação, sendo:
</br>
1- Execução local (vide **[Instalação](#-instalação)**)
</br>
2- Acesso do projeto 'produção' através [deste link]()

Logo de início, você irá perceber que na lista de histórico de usuários contém `ViniciusBCavalcante` como sugestão inicial de filtro.
Caso o usuário clique nesta sugestão, este usuário sugerido será salvo como histórico. Caso negativo e filtrado um usuário diferente, a sugestão irá sumir.

Sugestões de usuários válidos:

- Angelabauer
- Mschwarzmueller
- Jonasschmedtmann

Sugestões de usuários inválidos (não existentes):

- jackiechan30
- harryjamespotter30

Para os usuários não existentes, será emitido um alerta vermelho no canto superior direito e a página irá ser redirecionada para o início.

Para os usuários existentes, as informações da conta e seus repositórios serão renderizados.

Caso você deseje ser redirecionado para a página GitHub do usuário filtrado, clique no nome completo do usuário ao lado da foto de perfil.

Quanto à tabela de repositórios, os filtros por padrão são do tipo "começa com", ou seja, caso deseje buscar a palavra "Angular" e digitar apenas "gular", não será encontrado nenhuma resposta. Para isso, clique no icone de filtro ao lado do campo de entrada e seleciona a opção que atenda a sua necessidade.

Caso você deseje obter mais detalhes a respeito de um repositório especifico, você pode clicar na linha correspondente ao repositório que irá abrir um quadro adicional (modal).

## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

## 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## ✒️ Autor

- [**Vinícius Barbosa Cavalcante**](https://github.com/ViniciusBCavalcante) - Desenvolvedor
