# Arquitetura da Solução

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

<img src="/img/diagrama_classe.jpeg">


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

<img src="/img/22er.jpg">

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

<img src="/img/relationalScheme.png">

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

* Expo Dev
* React
* React Native
* JSON
* JavaScript XML (JSX)

## Hospedagem

## Evidências de Implementação da Autenticação

* Tela de Login:

A autenticação do login nesse código está sendo feita por meio do método authenticateUser(email, password) do módulo auth.js.

Esse método recebe como parâmetros o email e a senha informados pelo usuário e executa uma busca no banco de dados para verificar se existe 
um usuário com o email informado. Caso o usuário seja encontrado, o método compara a senha informada com o hash armazenado no banco de dados 
por meio da função bcrypt.compare(password, rows[0].password).


![WhatsApp Image 2023-05-06 at 17 39 05](https://user-images.githubusercontent.com/102702197/236647600-21f77163-d332-481d-b8fb-7e9e1e0a3cc6.jpeg)


