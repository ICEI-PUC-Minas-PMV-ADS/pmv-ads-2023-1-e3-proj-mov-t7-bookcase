## Plano de Testes de Software

Apresentamos abaixo os cenários de testes elaborados para a realização dos testes da aplicação móvel, demonstrando os requisitos funcionais sendo satisfeitos: 

| Casos de Teste | CT-01 - Acessar tela de login e cadastro de usuário |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-001 - O sistema terá tela de Login e senha // RNF-005 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Testar o acesso a tela de login, inserir e- mail e senha e acessar a aplicação |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Inserir os dados solicitados (e-mail e senha) |
||3 - Clicar em "Entrar" |
|`Critério de Êxito` | O usuário conseguiu entrar logar na aplicação. |

| Casos de Teste | CT-02 - Logout|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF - 009 A aplicação permite o logout de usuário |
|`Objetivo do teste` | Testar o acesso a tela de login e efetuar logout |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Acessar a tela inicial |
||7 - Clicar em logout |
|`Critério de Êxito` | Logout efetuado com sucesso |


| Casos de Teste | CT-03 - Efetuar cadastro na aplicação |
|--------------------|------------------------------------|
|`Requisitos Associados` | RNF-005 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados  |
|`Objetivo do teste` | Testar o acesso a tela de login, cadastrar na aplicação |
|`Passos` | 
||1 - A1 - Acessar o aplicativo móvel |
||2 - Clicar em "Não possui uma conta? Cadastre-se aqui" |
||3 - Preencher os campos obrigatórios (Nome, E-mail,  senha) |
||4 - Clicar em "Cadastrar" |
||5 - Clicar no botão "Cadastrar" |
|`Critério de Êxito` | O usuário consegue se cadastrar na aplicação e efetuar o login. |


| Casos de Teste | CT-04 - Fazer upload, visualizar upload de documentos |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-004 - A aplicação deve permitir a um usuário cadastrar e remover uma obra feita pelo mesmo // RF-008 - A aplicação deve permitir o usuário a criar uma descrição sobre a obra cadastrada |
|`Objetivo do teste` | Cadastro de documentos |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " livros " |
||6 - Preencher os campos obrigatórios |
||7 - Clicar no botão "Adicionar" | 
||8 - Voltar a pagina inicial e confirmar que a obra foi cadastrada |
|`Critério de Êxito` | Documento cadastrado com sucesso. |

| Casos de Teste | CT-05 - Fazer upload,  e excluir obra cadastrada |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-004 - A aplicação deve permitir a um usuário cadastrar e remover uma obra feita pelo mesmo // RF-008 - A aplicação deve permitir o usuário a criar uma descrição sobre a obra cadastrada |
|`Objetivo do teste` | Cadastro de documentos |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " livros " |
||6 - Preencher os campos obrigatórios |
||7 - Clicar no botão "Adicionar" | 
||8 - Voltar a pagina inicial e confirmar que a obra foi cadastrada |
||10 - Clicar no botao "Livros"  |
||9 - Encontrar a obra que deseja excluir e clicar em "excluir" |
|`Critério de Êxito` | Documento excluido com sucesso. |

| Casos de Teste | CT-06 - Acessar obra para leitura|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF - 003 A A aplicação deve permitir ao usuário baixar uma obra pesquisada para leitura |
|`Objetivo do teste` | Testar se o usuario consegue baixar uma obra determinada para leitura |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Acessar a tela inicial |
||6 - Escolher uma obra para leitura |
||7 - Clicar na obra e automaticamente ser redirecionado para pagina de download da obra  |
|`Critério de Êxito` | Efetuar o download da obra |

| Casos de Teste | CT-07 - Pesquisar Obra|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF - 002 A aplicação deve permitir ao usuário buscar uma obras pelo seu nome. |
|`Objetivo do teste` | Testar se o usuario consegue baixar uma obra determinada para leitura |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Acessar a tela inicial |
||6 - Clicar na lupa e digitar o nome da obra |
||7 - Aguardar a plicação responder com o surgimento da obra pesquisada |
|`Critério de Êxito` | A obra pesquisada aparecerá na tela do usuário |



