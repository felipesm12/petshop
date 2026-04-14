const API_BASE = window.location.origin;

const CONFIG = {
  clientes: {
    nomeExibicao: "Cliente",
    rota: "clientes",
    rotaBusca: "buscar",
    idCampo: "idCliente",
    campoBusca: "nome",
    rotuloBusca: "Nome",
    placeholderBusca: "Digite o nome do cliente",
    campos: [
      { id: "nome", label: "Nome", tipo: "text" },
      { id: "idade", label: "Idade", tipo: "number", step: "1" },
      { id: "cidade", label: "Cidade", tipo: "text" },
      { id: "bairro", label: "Bairro", tipo: "text" },
      { id: "telefone", label: "Telefone", tipo: "text" },
      { id: "email", label: "Email", tipo: "email" }
    ],
    colunas: [
      { titulo: "ID", valor: item => item.idCliente ?? "" },
      { titulo: "Nome", valor: item => item.nome ?? "" },
      { titulo: "Idade", valor: item => item.idade ?? "" },
      { titulo: "Cidade", valor: item => item.cidade ?? "" },
      { titulo: "Bairro", valor: item => item.bairro ?? "" },
      { titulo: "Telefone", valor: item => item.telefone ?? "" },
      { titulo: "Email", valor: item => item.email ?? "" }
    ]
  },
  pets: {
    nomeExibicao: "Pet",
    rota: "pets",
    rotaBusca: "buscar",
    idCampo: "idPet",
    campoBusca: "nome",
    rotuloBusca: "Nome",
    placeholderBusca: "Digite o nome do pet",
    campos: [
      { id: "nome", label: "Nome", tipo: "text" },
      { id: "raca", label: "Raça", tipo: "text" },
      { id: "tipo", label: "Tipo", tipo: "text" },
      { id: "clienteId", label: "ID do Cliente", tipo: "number", step: "1" }
    ],
    colunas: [
      { titulo: "ID", valor: item => item.idPet ?? "" },
      { titulo: "Nome", valor: item => item.nome ?? "" },
      { titulo: "Raça", valor: item => item.raca ?? "" },
      { titulo: "Tipo", valor: item => item.tipo ?? "" },
      { titulo: "Cliente", valor: item => item.cliente?.nome ?? "-" },
      { titulo: "ID Cliente", valor: item => item.cliente?.idCliente ?? "-" }
    ]
  },
  servicos: {
    nomeExibicao: "Serviço",
    rota: "servicos",
    rotaBusca: "buscar",
    idCampo: "idServico",
    campoBusca: "nomeServico",
    rotuloBusca: "Nome do Serviço",
    placeholderBusca: "Digite o nome do serviço",
    campos: [
      { id: "nomeServico", label: "Nome do Serviço", tipo: "text" },
      { id: "preco", label: "Preço", tipo: "number", step: "0.01" },
      { id: "duracao", label: "Duração", tipo: "text" },
      { id: "disponibilidade", label: "Disponibilidade", tipo: "text" }
    ],
    colunas: [
      { titulo: "ID", valor: item => item.idServico ?? "" },
      { titulo: "Serviço", valor: item => item.nomeServico ?? "" },
      { titulo: "Preço", valor: item => formatarMoeda(item.preco) },
      { titulo: "Duração", valor: item => item.duracao ?? "" },
      { titulo: "Disponibilidade", valor: item => item.disponibilidade ?? "" }
    ]
  },
  profissionais: {
    nomeExibicao: "Profissional",
    rota: "profissionais",
    rotaBusca: "buscar",
    idCampo: "idProfissional",
    campoBusca: "nome",
    rotuloBusca: "Nome",
    placeholderBusca: "Digite o nome do profissional",
    campos: [
      { id: "nome", label: "Nome", tipo: "text" },
      { id: "especialidade", label: "Especialidade", tipo: "text" },
      { id: "telefone", label: "Telefone", tipo: "text" },
      { id: "email", label: "Email", tipo: "email" },
      { id: "status", label: "Status", tipo: "text" }
    ],
    colunas: [
      { titulo: "ID", valor: item => item.idProfissional ?? "" },
      { titulo: "Nome", valor: item => item.nome ?? "" },
      { titulo: "Especialidade", valor: item => item.especialidade ?? "" },
      { titulo: "Telefone", valor: item => item.telefone ?? "" },
      { titulo: "Email", valor: item => item.email ?? "" },
      { titulo: "Status", valor: item => formatarBadgeStatus(item.status) }
    ]
  },
  agendamentos: {
    nomeExibicao: "Agendamento",
    rota: "agendamentos",
    rotaBusca: "status",
    idCampo: "idAgendamento",
    campoBusca: "status",
    rotuloBusca: "Status",
    placeholderBusca: "Digite o status do agendamento",
    campos: [
      { id: "dataAgendamento", label: "Data do Agendamento", tipo: "date" },
      { id: "horaAgendamento", label: "Hora do Agendamento", tipo: "time" },
      { id: "status", label: "Status", tipo: "text" },
      { id: "petId", label: "ID do Pet", tipo: "number", step: "1" },
      { id: "servicoId", label: "ID do Serviço", tipo: "number", step: "1" },
      { id: "profissionalId", label: "ID do Profissional", tipo: "number", step: "1" }
    ],
    colunas: [
      { titulo: "ID", valor: item => item.idAgendamento ?? "" },
      { titulo: "Data", valor: item => item.dataAgendamento ?? "" },
      { titulo: "Hora", valor: item => item.horaAgendamento ?? "" },
      { titulo: "Status", valor: item => formatarBadgeStatus(item.status) },
      { titulo: "Pet", valor: item => item.pet?.nome ?? "-" },
      { titulo: "Serviço", valor: item => item.servico?.nomeServico ?? "-" },
      { titulo: "Profissional", valor: item => item.profissional?.nome ?? "-" }
    ]
  }
};

function getEntidadeSelecionada() {
  return document.getElementById("entidade").value;
}

function getConfigAtual() {
  return CONFIG[getEntidadeSelecionada()];
}

function mostrarMensagem(texto, tipo = "neutra") {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
}

function mostrarResultado(dados) {
  document.getElementById("resultado").textContent = JSON.stringify(dados, null, 2);
}

function mostrarErro(texto) {
  mostrarMensagem(texto, "erro");
  document.getElementById("resultado").textContent = `Erro: ${texto}`;
}

function limparResultado() {
  document.getElementById("resultado").textContent = "Nenhum dado carregado.";
}

function limparTabela() {
  document.getElementById("tabelaWrapper").innerHTML = '<p class="sem-dados">Nenhum dado carregado.</p>';
}

function formatarMoeda(valor) {
  if (valor === null || valor === undefined || valor === "") {
    return "-";
  }

  const numero = Number(valor);

  if (Number.isNaN(numero)) {
    return valor;
  }

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function formatarBadgeStatus(status) {
  if (!status) {
    return "-";
  }

  const texto = String(status).trim();
  const classe = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return `<span class="badge badge-status badge-${classe}">${texto}</span>`;
}

function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function atualizarTextoBusca() {
  const config = getConfigAtual();
  document.getElementById("tituloBusca").textContent = `Buscar por ${config.rotuloBusca}`;
  document.getElementById("labelBusca").textContent = config.rotuloBusca;
  document.getElementById("buscarNome").placeholder = config.placeholderBusca;
  document.getElementById("btnBuscarNome").textContent = `Buscar por ${config.rotuloBusca}`;
}

function criarCampo(campo) {
  const wrapper = document.createElement("div");
  wrapper.className = "campo";

  const label = document.createElement("label");
  label.setAttribute("for", campo.id);
  label.textContent = campo.label;

  const input = document.createElement("input");
  input.type = campo.tipo;
  input.id = campo.id;
  input.name = campo.id;
  input.placeholder = `Digite ${campo.label.toLowerCase()}`;

  if (campo.step) {
    input.step = campo.step;
  }

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
}

function renderizarFormulario() {
  const formulario = document.getElementById("formularioDinamico");
  const config = getConfigAtual();

  formulario.innerHTML = "";

  config.campos.forEach(campo => {
    formulario.appendChild(criarCampo(campo));
  });

  atualizarTextoBusca();
  limparCamposFormulario();
  limparTabela();
  limparResultado();
  mostrarMensagem(`Formulário de ${config.nomeExibicao.toLowerCase()} carregado com sucesso.`, "neutra");
}

function limparCamposFormulario() {
  document.getElementById("idRegistro").value = "";
  document.getElementById("buscarId").value = "";
  document.getElementById("buscarNome").value = "";

  const config = getConfigAtual();

  config.campos.forEach(campo => {
    const elemento = document.getElementById(campo.id);
    if (elemento) {
      elemento.value = "";
    }
  });
}

function coletarDadosFormulario() {
  const config = getConfigAtual();
  const dados = {};

  config.campos.forEach(campo => {
    const input = document.getElementById(campo.id);
    let valor = input.value;

    if (campo.tipo === "number" && valor !== "") {
      valor = Number(valor);
    }

    dados[campo.id] = valor;
  });

  return dados;
}

function normalizarPayload(entidade, dados) {
  if (entidade === "clientes") {
    return {
      nome: dados.nome,
      idade: dados.idade || null,
      cidade: dados.cidade,
      bairro: dados.bairro,
      telefone: dados.telefone,
      email: dados.email
    };
  }

  if (entidade === "pets") {
    return {
      nome: dados.nome,
      raca: dados.raca,
      tipo: dados.tipo,
      cliente: dados.clienteId ? { idCliente: Number(dados.clienteId) } : null
    };
  }

  if (entidade === "servicos") {
    return {
      nomeServico: dados.nomeServico,
      preco: dados.preco === "" ? null : dados.preco,
      duracao: dados.duracao,
      disponibilidade: dados.disponibilidade
    };
  }

  if (entidade === "profissionais") {
    return {
      nome: dados.nome,
      especialidade: dados.especialidade,
      telefone: dados.telefone,
      email: dados.email,
      status: dados.status
    };
  }

  if (entidade === "agendamentos") {
    return {
      dataAgendamento: dados.dataAgendamento || null,
      horaAgendamento: dados.horaAgendamento || null,
      status: dados.status,
      pet: dados.petId ? { idPet: Number(dados.petId) } : null,
      servico: dados.servicoId ? { idServico: Number(dados.servicoId) } : null,
      profissional: dados.profissionalId ? { idProfissional: Number(dados.profissionalId) } : null
    };
  }

  return dados;
}

function preencherFormularioComRegistro(entidade, registro) {
  if (!registro) {
    return;
  }

  if (entidade === "clientes") {
    document.getElementById("nome").value = registro.nome ?? "";
    document.getElementById("idade").value = registro.idade ?? "";
    document.getElementById("cidade").value = registro.cidade ?? "";
    document.getElementById("bairro").value = registro.bairro ?? "";
    document.getElementById("telefone").value = registro.telefone ?? "";
    document.getElementById("email").value = registro.email ?? "";
    return;
  }

  if (entidade === "pets") {
    document.getElementById("nome").value = registro.nome ?? "";
    document.getElementById("raca").value = registro.raca ?? "";
    document.getElementById("tipo").value = registro.tipo ?? "";
    document.getElementById("clienteId").value = registro.cliente?.idCliente ?? "";
    return;
  }

  if (entidade === "servicos") {
    document.getElementById("nomeServico").value = registro.nomeServico ?? "";
    document.getElementById("preco").value = registro.preco ?? "";
    document.getElementById("duracao").value = registro.duracao ?? "";
    document.getElementById("disponibilidade").value = registro.disponibilidade ?? "";
    return;
  }

  if (entidade === "profissionais") {
    document.getElementById("nome").value = registro.nome ?? "";
    document.getElementById("especialidade").value = registro.especialidade ?? "";
    document.getElementById("telefone").value = registro.telefone ?? "";
    document.getElementById("email").value = registro.email ?? "";
    document.getElementById("status").value = registro.status ?? "";
    return;
  }

  if (entidade === "agendamentos") {
    document.getElementById("dataAgendamento").value = registro.dataAgendamento ?? "";
    document.getElementById("horaAgendamento").value = registro.horaAgendamento ?? "";
    document.getElementById("status").value = registro.status ?? "";
    document.getElementById("petId").value = registro.pet?.idPet ?? "";
    document.getElementById("servicoId").value = registro.servico?.idServico ?? "";
    document.getElementById("profissionalId").value = registro.profissional?.idProfissional ?? "";
  }
}

function renderTabela(dados) {
  const lista = Array.isArray(dados) ? dados : [dados];
  const wrapper = document.getElementById("tabelaWrapper");
  const config = getConfigAtual();

  if (!lista || lista.length === 0 || lista[0] === null) {
    wrapper.innerHTML = '<p class="sem-dados">Nenhum registro encontrado.</p>';
    return;
  }

  let html = "<table><thead><tr>";

  config.colunas.forEach(coluna => {
    html += `<th>${escaparHtml(coluna.titulo)}</th>`;
  });

  html += "</tr></thead><tbody>";

  lista.forEach(item => {
    html += "<tr>";

    config.colunas.forEach(coluna => {
      const valor = coluna.valor(item);
      const conteudo = typeof valor === "string" && valor.includes("<span")
        ? valor
        : escaparHtml(valor ?? "");

      html += `<td>${conteudo}</td>`;
    });

    html += "</tr>";
  });

  html += "</tbody></table>";
  wrapper.innerHTML = html;
}

async function tratarResposta(resposta, mensagemErroPadrao) {
  if (!resposta.ok) {
    let textoErro = mensagemErroPadrao;

    try {
      const contentType = resposta.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const json = await resposta.json();
        textoErro = json.erro || JSON.stringify(json);
      } else {
        textoErro = await resposta.text();
      }
    } catch (e) {
    }

    throw new Error(textoErro);
  }

  if (resposta.status === 204) {
    return null;
  }

  const contentType = resposta.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return await resposta.json();
  }

  return await resposta.text();
}

async function listar() {
  const config = getConfigAtual();

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}`);
    const dados = await tratarResposta(
      resposta,
      `Não foi possível listar ${config.nomeExibicao.toLowerCase()}s.`
    );

    renderTabela(dados);
    mostrarResultado(dados);
    mostrarMensagem(`${config.nomeExibicao}(s) listado(s) com sucesso.`, "sucesso");
  } catch (erro) {
    mostrarErro(erro.message);
    limparTabela();
  }
}

async function buscarId() {
  const config = getConfigAtual();
  const id = document.getElementById("buscarId").value;

  if (!id) {
    mostrarErro("Digite um ID para buscar.");
    return;
  }

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}/${id}`);
    const dados = await tratarResposta(
      resposta,
      `${config.nomeExibicao} não encontrado.`
    );

    if (!dados) {
      throw new Error(`${config.nomeExibicao} não encontrado.`);
    }

    renderTabela(dados);
    mostrarResultado(dados);
    mostrarMensagem(`${config.nomeExibicao} encontrado com sucesso.`, "sucesso");
  } catch (erro) {
    mostrarErro(erro.message);
    limparTabela();
  }
}

async function buscarNome() {
  const config = getConfigAtual();
  const termo = document.getElementById("buscarNome").value.trim();

  if (!termo) {
    mostrarErro(`Digite ${config.rotuloBusca.toLowerCase()} para buscar.`);
    return;
  }

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}/${config.rotaBusca}/${encodeURIComponent(termo)}`);
    const dados = await tratarResposta(
      resposta,
      `${config.nomeExibicao} não encontrado.`
    );

    renderTabela(dados);
    mostrarResultado(dados);
    mostrarMensagem(`Busca de ${config.nomeExibicao.toLowerCase()} realizada com sucesso.`, "sucesso");
  } catch (erro) {
    mostrarErro(erro.message);
    limparTabela();
  }
}

async function carregarRegistroPorIdNoFormulario() {
  const config = getConfigAtual();
  const entidade = getEntidadeSelecionada();
  const id = document.getElementById("idRegistro").value;

  if (!id) {
    return;
  }

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}/${id}`);
    const dados = await tratarResposta(
      resposta,
      `${config.nomeExibicao} não encontrado.`
    );

    if (!dados) {
      throw new Error(`${config.nomeExibicao} não encontrado.`);
    }

    preencherFormularioComRegistro(entidade, dados);
    renderTabela(dados);
    mostrarResultado(dados);
    mostrarMensagem(`${config.nomeExibicao} carregado no formulário com sucesso.`, "sucesso");
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

async function adicionar() {
  const config = getConfigAtual();
  const entidade = getEntidadeSelecionada();
  const idRegistro = document.getElementById("idRegistro").value.trim();

  if (idRegistro !== "") {
    alert("Para adicionar um novo registro, deixe o ID em branco.");
    return;
  }

  const dados = coletarDadosFormulario();
  const payload = normalizarPayload(entidade, dados);

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const resultado = await tratarResposta(
      resposta,
      `Erro ao cadastrar ${config.nomeExibicao.toLowerCase()}.`
    );

    renderTabela(resultado);
    mostrarResultado(resultado);
    mostrarMensagem(`${config.nomeExibicao} cadastrado com sucesso.`, "sucesso");
    limparCamposFormulario();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

async function atualizar() {
  const config = getConfigAtual();
  const entidade = getEntidadeSelecionada();
  const id = document.getElementById("idRegistro").value;

  if (!id) {
    mostrarErro("Digite o ID do registro para atualizar.");
    return;
  }

  const dados = coletarDadosFormulario();
  const payload = normalizarPayload(entidade, dados);

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const resultado = await tratarResposta(
      resposta,
      `Erro ao alterar ${config.nomeExibicao.toLowerCase()}.`
    );

    renderTabela(resultado);
    mostrarResultado(resultado);
    mostrarMensagem(`${config.nomeExibicao} alterado com sucesso.`, "sucesso");
    limparCamposFormulario();
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

async function deletarRegistro() {
  const config = getConfigAtual();
  const id = document.getElementById("idRegistro").value;

  if (!id) {
    mostrarErro("Digite o ID do registro para deletar.");
    return;
  }

  const confirmar = confirm(`Tem certeza que deseja apagar este ${config.nomeExibicao.toLowerCase()}?`);

  if (!confirmar) {
    mostrarMensagem("Exclusão cancelada.", "neutra");
    return;
  }

  try {
    const resposta = await fetch(`${API_BASE}/${config.rota}/${id}`, {
      method: "DELETE"
    });

    await tratarResposta(
      resposta,
      `Erro ao apagar ${config.nomeExibicao.toLowerCase()}.`
    );

    limparCamposFormulario();
    limparTabela();
    mostrarResultado({ mensagem: `${config.nomeExibicao} apagado com sucesso.` });
    mostrarMensagem(`${config.nomeExibicao} apagado com sucesso.`, "sucesso");
  } catch (erro) {
    mostrarErro(erro.message);
  }
}

function configurarEventos() {
  document.getElementById("entidade").addEventListener("change", renderizarFormulario);
  document.getElementById("btnListar").addEventListener("click", listar);
  document.getElementById("btnBuscarId").addEventListener("click", buscarId);
  document.getElementById("btnBuscarNome").addEventListener("click", buscarNome);
  document.getElementById("btnAdicionar").addEventListener("click", adicionar);
  document.getElementById("btnAtualizar").addEventListener("click", atualizar);
  document.getElementById("btnDeletar").addEventListener("click", deletarRegistro);
  document.getElementById("idRegistro").addEventListener("blur", carregarRegistroPorIdNoFormulario);
}

window.addEventListener("DOMContentLoaded", () => {
  configurarEventos();
  renderizarFormulario();
});
