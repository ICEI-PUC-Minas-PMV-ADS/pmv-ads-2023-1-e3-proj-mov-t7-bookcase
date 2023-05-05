# Especificações do Projeto

O problema que esperamos resolver é a dificuldade de se encontrar, atualmente, uma plataforma que reúna obras literárias de domínio publico para os amantes da leitura de obras literárias, quadrinhos e estórias diversas.

## Personas

Joana Alves Pereira - 15 anos

- Estudante do ensino médio
- Aluna de escola pública, sem muitos recursos para adquirir livros impressos requeridos pela insituição de ensino para as atividades da matéria de Língua Portuguesa e Literatura.

Dra. Beatriz Lima - 58 anos

- Professora do ensino superior, autora de livros de literatura.
- Procura por uma plataforma para divulgar parte de suas obras para leitores que, se interessando pelo material, irão adquirir suas obras (em formato impresso ou digital). 

João Lucas Melo - 48 anos

- Advogado de um grande escritório de advocacia focado em direito empresarial com uma vasta cartela de clientes. 
- João viaja bastante à trabalho e tem a leitura como um hobby, aprecia os clássicos da literatura luso-brasileira, mas como viaja partindo muitas vezes de última hora para se reunir com clientes, necessita de uma plataforma digital para armazenamento das obras que lê, uma vez que transportar livros impressos se mostra um incômodo e uma tarefa nada prática. 


## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| `PERSONA`         | `FUNCIONALIDADE`                                                                    | `MOTIVO/VALOR`                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Joana Alves Pereira       | Ter uma plataforma móvel para leitura das obras requisitadas por sua escola. | Poder ter a praticidade para ler as obras a qualquer momento, principalmente no seu deslocamento casa-escola e escola-casa, que realiza utilizando meios de transporte coletivo urbano. |
| Dra. Beatriz Lima    | Ter um modo de disponibilizar amostras de suas obras para possíveis compradores.                         | Aumentar a divulgação de seu trabalho.                     |
| João Lucas Melo    | Conseguir ler obras literárias enquanto está no carro ou enquante espera no saguão do terminal do aeroporto pela saída de seu vôo, sem ter que carregar diversos volumes de livros impressos.                                | Ter praticidade para exercer seu hobby de leitura.                                                                 |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID       | Descrição do Requisito                                                                                            | Prioridade |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | A aplicação terá tela de Login e Senha.                                                                           | MÉDIO      |
| RF-002 | A aplicação deve permitir ao usuário buscar uma lista de obras por nome.                                          | MÉDIO      |
| RF-003 | A aplicação deve permitir ao usuário baixar uma obra pesquisada para leitura                                      | MÉDIO      |
| RF-004 | A aplicação deve permitir a um usuário cadastrar e remover uma obra feita pelo mesmo.                             | ALTA       |
| RF-005 | A aplicação deve permitir o usuário acessa um feed de recomendações de livros.                                    | ALTA       |
| RF-006 | A aplicação deve permitir o usuário recuperar sua senha atráves do email cadastrado.                              | ALTA       |
| RF-007 | A aplicação deve permitir o usuário a criar uma descrição sobre a obra cadastrada                                 | MEDIO      |
| RF-008 | A aplicação permite o logout de usuário.                                                                          | MEDIO      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                           | Prioridade |
|---------|--------------------------------------------------------------------------------------------------|------------|
| RNF-001 | A aplicação deverá ser de fácil leitura e entendimento.                                          | ALTA       |
| RNF-002 | A aplicação deve ser desenvolvida em React Native                                                    | ALTA       |
| RNF-003 | A aplicação deverá ser responsiva e poderá ser acessada em diversos dispositivos e equipamentos. | ALTA       |
| RNF-004 | A aplicação deverá ser compatível com diversos navegadores.                                      | MÉDIA      |
| RNF-005 | A aplicação deve permitir o acesso apenas de usuários cadastrados. |ALTA|


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
| 01 | A aplicação deverá ser de fácil leitura e entendimento.                                          
| 02 | A aplicação deve ser desenvolvida em React Native.                                                    
| 03 | A aplicação deverá ser responsiva e poderá ser acessada em diversos dispositivos e equipamentos.
| 04 | A aplicação deverá ser compatível com diversos navegadores.                                     
| 05 | A equipe usará o modelo Kanban para o gerenciamento do projeto.                                  

## Diagrama de Casos de Uso
<img src="/img/diagrama-de-casos-de-usos.jpg">

## Matriz de Rastreabilidade
A matriz de rastreabilidade é uma ferramenta utilizada para facilitar a visualização do relacionamento entre requisitos e outros preservados ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.
A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

<img src="/img/Matriz de rastreabilidade.png">


## Gerenciamento de Projeto
Utilizando o PMBoK padrão todo o projeto será gerenciado utilizando planilhas integradas que possibilitarão a visualização da evolução dos trabalhos, bem como a possibilidade de melhoria prática a cada implementação. Para tal, todas as informações referentes ao cronograma, previsão de custos, recursos e equipe envolvidas, atividades ocupadas, reuniões, produção de documentos, entre outros, serão devidamente registradas com o objetivo de construir base documental sólida a fim de que o desenvolvimento do projeto transcorra obedecendo padrões e normas de excelência e qualidade.

## Gerenciamento de Tempo
Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordenar tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

<img src="/img/gestao-de-tempo.png">

## Gerenciamento de Equipe
A equipe cumprirá suas tarefas de acordo com as habilidades e características subjetivas de cada membro, a fim de que cada um contribua e produza o melhor trabalho a ser incorporado ao projeto e consequentemente ao produto final. O gerenciamento das tarefas será registrado para que a produtividade e a qualidade sejam mantidas durante todo o desenvolvimento do projeto.

| Tarefa      | Responsável                                                                              | Status         |
|---------|----------------------------------------------------------------------------------------------|----------------|
| Definição de tema | Todos                                                                              | Concluído      |
| Documentação de contexto | Mariana, Gabriel Silveira                                                     | Concluído    |
| Personas/Histórias de usuários | Nathália, Gabriel Silveira | Concluído      |
| Casos de uso | Matheus Pereira                                      | Concluído   |
| Requisitos funcionais | Gabriel Miranda | Conluído |
| Requisitos não funcionais | Gabriel Miranda | Conluído |
| Restrições | Gabriel Silveira | Concluído |
| Diagrama de casos de uso | Eduardo | Concluído | 
| Projeto de gestão | Mariana | Em andamento |
| Matriz de rastreabilidade | Mariana | Concluído | 
| GitHub | Todos | Em andamento |
| Revisão do projeto | Todos | Pendente |
| Entrega do projeto | Todos | Pendente |


## Gestão de Orçamento
Com base em todo o escopo produzido anteriormente, os custos do projeto serão gerenciados em conformidade com os objetivos e requisitos alcançados na concepção do projeto, de modo a garantir o desenvolvimento norteado pela realidade financeira pré-definida.

| Recursos necessários                                                                              | Custo (R$)        |
|---------------------------------------------------------------------------------------------------|-------------------|
| Recursos humanos | R$ 122.999,00 |
| Hardware | R$ 29.000,00 |
| Rede | R$ 2.900,00 |
| Software | R$ 15.000,00 |
| Serviços | R$ 8.000,00 |
| Total | R$ 177.899,00 |


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, existem poucas aplicações que permitem o acesso a obras de domínio publico que podem ser acessados pela internet. Os existentes são aplicações que não oferecem de forma ampla um numero significativo de obras e de recursos que permitem que o leitor possa gerenciar de forma fácil e eficiente as obras lidas e as que ele deseja ler.

### Descrição Geral da Proposta


A proposta do Bookcase é divulgar e propagar obras de domínio público, e assim, auxiliar como um maior acesso ao conhecimento e à informação para todos. 
Além disso, como não há restrições aos direitos de uso de materiais de domínio público, todos têm livre acesso a eles, ajudando a fomentar a inovação e a criatividade dentro da sociedade na totalidade. Finalmente, ter obras no domínio público ajuda a garantir que essas ideias estejam disponíveis para sempre em vez de serem perdidas devido à expiração dos direitos autorais ou outras restrições aos direitos de uso.

### Processo 1 – CADASTRO DO USUARIO

![CadastroUsuario](https://user-images.githubusercontent.com/102702197/227388684-40292651-1b20-4411-a47f-323515418508.jpg)



### Processo 2 – EDITAR DADOS USUÁRIO

![EditarInformacões](https://user-images.githubusercontent.com/102702197/227388654-9892a9dd-2cc9-4a7c-8608-e83a2ea66468.jpg)



### Processo 3 - Salvar obra para leitura

![CadastroObraAtual](https://user-images.githubusercontent.com/102702197/227388600-05af3e63-a050-47a2-9854-8535d88f946b.jpg)


## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 


