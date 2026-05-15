# 🐾 Petshop — Sistema de Gestão (Back-end)

API REST desenvolvida em Java com Spring Boot para gerenciamento completo de um petshop, abrangendo clientes, pets, serviços, profissionais e agendamentos.

Projeto final do curso de Desenvolvimento Back-end Java — SENAI RJ.  
Back-end desenvolvido integralmente pelo autor.

🔗 Front-end disponível em repositório separado:  
👉 <PRIVATE_URL>

---

# 🚀 Tecnologias utilizadas

- Java 16
- Spring Boot 2.6.x
- Spring Data JPA / Hibernate
- MySQL
- Maven

---

# 📋 Funcionalidades

O sistema possui 5 módulos com operações completas de CRUD:

## 👤 Clientes
- Nome
- Idade
- Cidade
- Bairro
- Telefone
- E-mail

## 🐶 Pets
- Nome
- Raça
- Tipo
- Vínculo com cliente (ID)

## ✂️ Serviços
- Nome
- Preço
- Duração
- Disponibilidade

## 👨‍⚕️ Profissionais
- Nome
- Especialidade
- Telefone
- E-mail
- Status

## 📅 Agendamentos
- Data
- Hora
- Status
- Vínculo com pet
- Serviço
- Profissional

---

# 🔗 Relacionamentos entre entidades

- Um cliente pode ter vários pets
- Um agendamento vincula:
  - um pet
  - um serviço
  - um profissional

---

# 🔗 Endpoints principais

## 👤 Clientes

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/{id}` | Busca cliente por ID |
| GET | `/clientes/nome/{nome}` | Busca cliente por nome |
| POST | `/clientes` | Cadastra novo cliente |
| PUT | `/clientes/{id}` | Atualiza cliente |
| DELETE | `/clientes/{id}` | Remove cliente |

---

## 🐶 Pets

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/pets` | Lista todos os pets |
| GET | `/pets/{id}` | Busca pet por ID |
| GET | `/pets/nome/{nome}` | Busca pet por nome |
| POST | `/pets` | Cadastra novo pet |
| PUT | `/pets/{id}` | Atualiza pet |
| DELETE | `/pets/{id}` | Remove pet |

---

## ✂️ Serviços

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/servicos` | Lista todos os serviços |
| GET | `/servicos/{id}` | Busca serviço por ID |
| GET | `/servicos/nome/{nome}` | Busca serviço por nome |
| POST | `/servicos` | Cadastra novo serviço |
| PUT | `/servicos/{id}` | Atualiza serviço |
| DELETE | `/servicos/{id}` | Remove serviço |

---

## 👨‍⚕️ Profissionais

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/profissionais` | Lista todos os profissionais |
| GET | `/profissionais/{id}` | Busca profissional por ID |
| GET | `/profissionais/nome/{nome}` | Busca profissional por nome |
| POST | `/profissionais` | Cadastra profissional |
| PUT | `/profissionais/{id}` | Atualiza profissional |
| DELETE | `/profissionais/{id}` | Remove profissional |

---

## 📅 Agendamentos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/agendamentos` | Lista todos os agendamentos |
| GET | `/agendamentos/{id}` | Busca agendamento por ID |
| GET | `/agendamentos/status/{status}` | Busca por status |
| POST | `/agendamentos` | Cria agendamento |
| PUT | `/agendamentos/{id}` | Atualiza agendamento |
| DELETE | `/agendamentos/{id}` | Remove agendamento |

---

# ⚙️ Como rodar o projeto

## ✅ Pré-requisitos

- Java 16+
- MySQL rodando na porta `3307`
- Maven

---

## 1️⃣ Clone o repositório

```bash
git clone <PRIVATE_URL>
cd petshop-backend
