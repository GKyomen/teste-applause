# Desafio Técnico Applause

Repositório criado para o teste técnico da Applause, que consiste em um app **React Native** com feed de reconhecimentos e modal para criar novos reconhecimentos.

## Como rodar

Considerando familiaridade com esse tipo de projeto:

- Na raiz, instale as bibliotecas com `npm install` ou `yarn` ou outro gerenciador de sua escolha

- Execute o comando `start` do `package.json` com `yarn start`, por exemplo

- Baixe o aplicativo **Expo Go** das lojas, abra-o e leia o QR Code que o terminal mostra

- Caso queira reiniciar, aperte `r` no terminal

## Estrutura do projeto

Projeto criado utilizando o framework **Expo**, utilizando o template vazio com **Typescript**, para evitar *boilerplate* desnecessário.

A [pasta assets](/assets/) contém imagens utilizadas no projeto. O que está dentro de [images](/assets/images/) são arquivos estáticos usados no projeto, enquanto o restante são imagens de configuração do projeto, como ícone do app, splash, etc.

A [pasta src](/src/) contém todo o código feito para o projeto. O restante dos arquivos são de configuração do aplicativo ou do repositório.

### [api](/src/api/)

Contém *mocks* de funções que seriam chamadas para a API. Elas adicionam um delay artificial para simular o tempo de resposta que podem ser ajustados para visualizar melhor os efeitos de loading.

### [app](/src/app/)

O **Expo** conta com várias bibliotecas próprias para desenvolvimento, acelerando-o. Uma das funcionalidades é a navegação com base em arquivos, similar a feature do Next. Portanto, tudo dentro dessa pasta é considerado uma página.

O [arquivo de entrada](/src/app/_layout.tsx) carrega as fontes e contextos que o app utiliza.

A [pasta (tabs)](/src/app/(tabs)/) contém as abas do aplicativo. O Layout organiza elas, além de configurar a barra de navegação inferior. Index é a página do feed. O restante das páginas foi criado apenas para configurar a navegação, mas não fazia parte do desafio.

### [components](/src/components/)

Possui os componentes utilizados no aplicativo. Como só foi desenvolvida uma página, a estrutura apenas contém os componentes na raiz dessa pasta, com pastas para componentes de múltiplos arquivos. Em projetos maiores, a raiz conteria os componentes básicos, compartilhados entre vários locais. Enquanto isso, uma estrutura similar as páginas guardaria os *composites* desses componentes.

### [context](/src/context/)

Implementa contextos de dados para serem utilizados em diferentes partes do aplicativo.

### [mocks](/src/mocks/)

Arquivos fornecidos para simular dados reais do aplicativo, bem como tipagens para eles.

### [styles](/src/styles/)

Constantes de cores utilizadas para estilizar o projeto.

### [utils](/src/utils/)

Funções de manipulação que utilizam apenas Typescript, isolando código.

## Funcionalidades e requisitos implementados

Considerando o documento do desafio, esses são os requisitos pedidos e implementados

### Context API

Para salvar dados e disponibilizá-los no app, a Context API do React foi utilizada. Foram criados contextos separados para o usuário autenticado e para a lista de posts. Ambos possuem uma forma de barrar que seus dados sejam lidos fora do contexto, evitando erros fatais no app em produção.

Apenas dados e funções necessárias para as funcionalidades do app foram desenvolvidas, deixando de fora itens como editar o usuário, deslogar, deletar posts, entre outros.

O app contém apenas a parte *logada*, então ao carregar o contexto de usuário, um usuário de exemplo é carregado. 

Para os posts, é feita uma chamada falsa para a API, salvando-os. Há lógica para <ins>**paginação**</ins> que permite alterar o tamanho das páginas no código. É possível recarregar os posts, zerando a paginação. A alteração dessa lista para adição de posts é apenas local, não simulando uma chamada POST para a API.

### Desempenho

Foram utilizadas técnicas de **memoização** em componentes que são renderizados várias vezes, como itens da lista de posts e da lista de recipientes para aplausos.

Parte das funções, especialmente as que são passadas como parâmetros, utilizadram de callback para evitar que fossem recriadas.

Imagens são renderizadas pela biblioteca de imagens do Expo, que faz o cache. Ícones foram transformados em código a partir de SVGs exportados do Figma fornecido e fontes externas da internet.

### Escalabilidade

O código foi escrito pensando em padrões que permitam manutenção fácil, como:

- *Dumb components* que não consideram a estrutura do dado atual, permitindo que chamadas para a API sejam ajustadas mais facilmente.
- Evitar código repetido, para não necessitar alterar múltiplos locais.
- Arquivos com responsabilidade única, reduzindo vezes que precisam ser alterados.

### Organização

Como citado na estutura, cada pasta isola arquivos com funções similares, facilitando encontrar partes específicas do código.

### Fidelidade visual e interação

O projeto foi desenvolvido pensando em seguir ao máximo os detalhes do Figma fornecido. Foram adicionadas animações para deixar a interface mais atrativa e interativa, como ícones que crescem, skeletons para diminuir a sensação de tempo esperando carregar, transições de páginas, etc.
