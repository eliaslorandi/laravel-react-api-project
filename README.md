# Laravel-React API Project
Este é um projeto full-stack que utiliza Laravel como backend e React como frontend. A aplicação permite a gestão de usuários, realizando operações de CRUD (Create, Read, Update, Delete) com autenticação via Sanctum.

# Pré-requisitos
- PHP >= 8.1 com extensões mbstring e openssl. <br>
- Composer para gerenciamento de dependências PHP.<br>
- Node.js >= 16.x e npm para o frontend React.<br>
- MySQL ou qualquer outro banco de dados compatível com Laravel.<br>
- Servidor Apache ou Nginx com suporte a .htaccess (se estiver usando Apache).<br>

# Instalação
Clone o repositório:

```
git clone https://github.com/eliaslorandi/laravel-react-api-project.git
```

Entre na pasta e instale as dependências do Laravel:
```
cd laravel-react-api-project
```
```
composer install
```

Entre na pasta React e instale suas dependências:
```
cd react
```
```
npm install
```

# Configuração
Copie o arquivo .env.example para .env; <br>
Gere a chave da aplicação Laravel:
```
php artisan key:generate
```
Configure as variáveis de ambiente no arquivo .env: <br>
DB_CONNECTION=mysql <br>
DB_HOST=127.0.0.1 <br>
DB_PORT=3306 <br>
DB_DATABASE=nome_do_banco <br>
DB_USERNAME=seu_usuario <br>
DB_PASSWORD=sua_senha <br>

Na pasta raiz do projeto, primeiro execute as migrações do banco de dados e depois inicie o servidor Laravel:
```
php artisan migrate
```
```
php artisan serve
```
Entre na pasta do Reacte e inicie o seu servidor:
```
npm run dev
```

# Como usar
Acesse a aplicação na URL fornecida pelo servidor Laravel (normalmente http://localhost:8000). <br>
Acesse o frontend React na porta 3000 (http://localhost:3000). <br>
Realize o cadastro, login e faça a gestão de usuários através da interface gráfica. <br>
