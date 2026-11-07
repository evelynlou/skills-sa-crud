# Skills SA - Gerenciador de Habilidades

Projeto acadêmico desenvolvido em React para cadastrar e gerenciar habilidades.

O sistema permite adicionar, visualizar, editar e excluir habilidades, utilizando o Supabase como banco de dados.

## Funcionalidades

- **Cadastrar:** adicionar uma nova habilidade.
- **Visualizar:** consultar as habilidades cadastradas.
- **Editar:** atualizar as informações de uma habilidade.
- **Excluir:** remover uma habilidade cadastrada.

Cada habilidade possui os campos:
- Nome
- Descrição
- Categoria
- Nível

## Tecnologias utilizadas

- React
- JavaScript
- CSS
- Supabase
- Git e GitHub

## Como executar o projeto

1. Clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Instale as dependências:

   `npm install`

4. Crie um arquivo `.env.local` na raiz do projeto com as variáveis:

   ```env
   REACT_APP_SUPABASE_URL=sua_url_do_supabase
   REACT_APP_SUPABASE_KEY=sua_chave_publica_do_supabase
   ```

5. Inicie a aplicação:

   `npm start`

O projeto será aberto em `http://localhost:3000`.

## Banco de dados

O projeto utiliza o Supabase para armazenar as habilidades e realizar as operações de CRUD (Create, Read, Update e Delete).

## Autoria

Projeto acadêmico desenvolvido por Evelyn — UDESC (Universidade do Estado de Santa Catarina).

## Link do projeto

O link da aplicação publicada na Vercel será adicionado após a implantação.