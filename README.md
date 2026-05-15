🐾 Petshop — Sistema de Gestão (Back-end)
API REST desenvolvida em Java com Spring Boot para gerenciamento completo de um petshop, abrangendo clientes, pets, serviços, profissionais e agendamentos.

Projeto final do curso de Desenvolvimento Back-end Java — SENAI RJ
Back-end desenvolvido integralmente pelo autor. Front-end disponível em repositório separado: petshop (frontend)


🚀 Tecnologias utilizadas

Java 16
Spring Boot 2.6.x
Spring Data JPA / Hibernate
MySQL (porta 3307)
Maven


📋 Funcionalidades
O sistema possui 5 módulos com operações completas de CRUD:
MóduloCampos principaisClientesNome, idade, cidade, bairro, telefone, e-mailPetsNome, raça, tipo, vínculo com cliente (ID)ServiçosNome, preço, duração, disponibilidadeProfissionaisNome, especialidade, telefone, e-mail, statusAgendamentosData, hora, status, vínculo com pet, serviço e profissional
Relacionamentos entre entidades

Um cliente pode ter vários pets
Um agendamento vincula um pet, um serviço e um profissional


🔗 Endpoints principais
Clientes
MétodoRotaDescriçãoGET/clientesLista todos os clientesGET/clientes/{id}Busca cliente por IDGET/clientes/nome/{nome}Busca cliente por nomePOST/clientesCadastra novo clientePUT/clientes/{id}Atualiza clienteDELETE/clientes/{id}Remove cliente
Pets
MétodoRotaDescriçãoGET/petsLista todos os petsGET/pets/{id}Busca pet por IDGET/pets/nome/{nome}Busca pet por nomePOST/petsCadastra novo petPUT/pets/{id}Atualiza petDELETE/pets/{id}Remove pet
Serviços
MétodoRotaDescriçãoGET/servicosLista todos os serviçosGET/servicos/{id}Busca serviço por IDGET/servicos/nome/{nome}Busca serviço por nomePOST/servicosCadastra novo serviçoPUT/servicos/{id}Atualiza serviçoDELETE/servicos/{id}Remove serviço
Profissionais
MétodoRotaDescriçãoGET/profissionaisLista todos os profissionaisGET/profissionais/{id}Busca por IDGET/profissionais/nome/{nome}Busca por nomePOST/profissionaisCadastra profissionalPUT/profissionais/{id}Atualiza profissionalDELETE/profissionais/{id}Remove profissional
Agendamentos
MétodoRotaDescriçãoGET/agendamentosLista todos os agendamentosGET/agendamentos/{id}Busca por IDGET/agendamentos/status/{status}Busca por statusPOST/agendamentosCria agendamentoPUT/agendamentos/{id}Atualiza agendamentoDELETE/agendamentos/{id}Remove agendamento

⚙️ Como rodar o projeto
Pré-requisitos

Java 16+
MySQL rodando na porta 3307
Maven

Passo a passo
1. Clone o repositório
bashgit clone https://github.com/felipesaaantos/petshop-backend.git
cd petshop-backend
2. Configure o banco de dados
No arquivo src/main/resources/application.properties, ajuste as credenciais:
propertiesspring.datasource.url=jdbc:mysql://localhost:3307/petshop
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update

O Spring criará as tabelas automaticamente ao rodar a aplicação pela primeira vez.

3. Rode a aplicação
bashmvn spring-boot:run
A API estará disponível em: http://localhost:8080

🖥️ Front-end
O front-end foi desenvolvido separadamente e consome esta API via requisições HTTP.
Repositório: github.com/felipesaaantos/petshop
Telas disponíveis:

* Gestão de Clientes
* Gestão de Pets
* Gestão de Serviços
* Gestão de Profissionais
* Gestão de Agendamentos


👨‍💻 Autor
Felipe Santos Melo
linkedin.com/in/felipesaantos · github.com/felipesaaantos
