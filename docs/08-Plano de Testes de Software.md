## Plano de Testes de Software

| Casos de Teste | CT-01 - Acessar tela de login e cadastro de usuário |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-001 - O sistema terá tela de Login e senha // RNF-005 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Testar o acesso a tela de login, criar um usário e senha e testar a recuperação de senha |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Não possui uma conta? Cadastre-se" |
||3 - Preencher os campos obrigatórios (Nome, Ultimo nome, E-mail, Username, Data de Nascimento, Crie uma senha, Confirme sua senha) |
||4 - Clicar em "Cadastrar" |
||5 - Clicar em "Esqueceu sua senha?" |
||6 - Preencher o campo com "E-mail ou usuário" |
||7 - Clicar no botão "Enviar" |
|`Critério de Êxito` | O usuário criou um login e senha e conseguiu recuperar a senha. |


| Casos de Teste | CT-02 - Filtrar por categorias |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-003 -  A aplicação deve permitir ao usuário buscar uma lista de obras baseado em um gênero (categorias) //  RF-002 - A aplicação deve permitir ao usuário buscar uma lista de obras baseado em um formato |
|`Objetivo do teste` | Testar a filtragem por categorias |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " Filtrar " |
||6 - Clicar no botão "Categorias" |
||7 - Informar o título da categoria e o tipo (HQ,Livro, etc / Romance, Humor e etc.)|
||8 - Clicar no botão "Inserir categoria"  |
|`Critério de Êxito` | As categorias foram filtradas. |


| Casos de Teste | CT-03 - Fazer upload, visualizar upload de documentos |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-004 - A aplicação deve permitir a um usuário cadastrar e remover uma obra feita pelo mesmo // RF-008 - A aplicação deve permitir o usuário a criar uma descrição sobre a obra cadastrada juntamente com a imagem da capa |
|`Objetivo do teste` | Cadastro de documentos |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " Nova Obra " |
||6 - Preencher os campos obrigatórios |
||7 - Clicar no botão "Inserir" | 
||8 - Selecionar a categoria desejada para cadastro |
||9 - Preencher todas as informações necessárias |
||10 - Clicar no botão "Ok" |
|`Critério de Êxito` | Documento cadastrado com sucesso. |


| Casos de Teste | CT-04 - Recomendações de livros e criar uma lista de livros para leitura |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-005 | A aplicação deve permitir o usuário acessar um feed de recomendações de livros // RF-007 A aplicação deve permitir o usuário criar uma lista de livros para ler mais tarde.                                                                     |
|`Objetivo do teste` | Recomendação de livros e lista para leitura  |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Ver recomendações na pagina inicial|
||5 - Clicar em "Criar Lista"|
||5 - Selecionar livros que deseja |
||5 - Clicar em "Ok" |
|`Critério de Êxito` | Recomendações visualizadas e Lista criada com sucesso. |


| Casos de Teste | CT-05 - Logout|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF - 009 A aplicação permite o logout de usuário |
|`Objetivo do teste` | Testar o acesso a tela de login e efetuar logout |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " Filtrar " |
||6 - Acessar a tela inicial |
||7 - Clicar em logout |
|`Critério de Êxito` | Logout efetuado com sucesso |


