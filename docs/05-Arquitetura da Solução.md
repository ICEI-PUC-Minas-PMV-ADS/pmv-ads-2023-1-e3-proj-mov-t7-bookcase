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

* Website e app mobile : 
* Banco de Dados e Back-End : MySQL, Microsoft Azure

## Evidências de Implementação da Autenticação

* Tela de Login:

A autenticação do login nesse código está sendo feita por meio do método authenticateUser(email, password) do módulo auth.js.

Esse método recebe como parâmetros o email e a senha informados pelo usuário e executa uma busca no banco de dados para verificar se existe 
um usuário com o email informado. Caso o usuário seja encontrado, o método compara a senha informada com o hash armazenado no banco de dados 
por meio da função bcrypt.compare(password, rows[0].password).


![WhatsApp Image 2023-05-06 at 17 39 05](https://user-images.githubusercontent.com/102702197/236647600-21f77163-d332-481d-b8fb-7e9e1e0a3cc6.jpeg)

Se a senha informada for igual ao hash armazenado, é gerado um token de autenticação 
por meio da função jwt.sign({ id: rows[0].id, email: rows[0].email }, secret) e esse token é retornado para o usuário.

![WhatsApp Image 2023-05-06 at 17 39 31](https://user-images.githubusercontent.com/102702197/236647630-bb6d21ee-3613-4152-89aa-e16fd7a8d7bc.jpeg)

e a senha informada não for 
igual ao hash armazenado, uma exceção é lançada e uma mensagem de erro é retornada ao usuário. Se o usuário não for encontrado, uma exceção é 
lançada e uma mensagem de erro é retornada ao usuário.

* Em outras rotas:

No código de autenticação, a função authenticateToken é um middleware que verifica se o token JWT fornecido está correto e, em seguida, define a propriedade userEmail do objeto req. Isso permite que outras rotas usem a propriedade userEmail para identificar o usuário autenticado.

Por exemplo, na função de verificação de permissão, checkDeletePermission, a rota de exclusão de livros é protegida pelo middleware authenticateToken, que garante que apenas usuários autenticados possam acessá-la. Em seguida, a função verifica se o livro que o usuário está tentando excluir pertence ao usuário autenticado. Se o usuário não tiver permissão para excluir o livro, a função retorna um código de status HTTP 403.

![WhatsApp Image 2023-05-06 at 17 43 40](https://user-images.githubusercontent.com/102702197/236647669-f08fb49a-ed15-4915-8f85-d6d54cc42d99.jpeg)

![WhatsApp Image 2023-05-06 at 17 43 40 (1)](https://user-images.githubusercontent.com/102702197/236647685-94784f53-40b5-4267-99e3-d5f58a3334aa.jpeg)

Por derradeiro abaixo é demonstrado em video realizado nos testes de softwere o funcionamento do login realizado por um usuário:

https://www.loom.com/share/feb664c6653a48dd8e8146291e4107d4

## Qualidade de Software

O modelo de qualidade de software da ISO/IEC 25010 é composto por oito atributos ou características. São elas:

* Adequação Funcional
* Eficiência de performance
* Compatibilidade
* Usabilidade 
* Confiabilidade 
* Segurança 
* Manutenibilidade
* Portabilidade

