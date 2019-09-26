var botao = document.querySelector("#adicionar-pedido");
botao.addEventListener("click", function() {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    console.log(form);

    var obra = infoObra(form);
    if (solicitacao.titulo.length < 0) {
    	var erros = document.querySelector("#erros");
    	erros.textContent = "Titulo Invalido";
        return;
    }
    if (solicitacao.autor.length < 0) {
    	var erros = document.querySelector("#erros");
    	erros.textContent = "Autor Invalido";
        return;
    }
    if (solicitacao.ano < 1900 && solicitacao.ano > 2019) {
    	var erros = document.querySelector("#erros");
    	erros.textContent = "Ano de Pulicação Invalido";
        return;
    }
    var obraTr = montaTr(obra);

    var tabela = document.querySelector("#tabela-obras");

    tabela.appendChild(obraTr);
    form.reset();
})

function montaTr(obra) {
    var obraTr = document.createElement("tr");
    obraTr.classList.add("emprestimo");
    var vinculoTd = montaTd(solicitacao.vinculo, "info-vinculo");
    var tituloTd = montaTd(solicitacao.titulo, "info-titulo");

    var autorTd = montaTd(solicitacao.autor, "info-autor");

    var edicaoTd = montaTd(solicitacao.edicao, "info-edicao");

    var issnTd = montaTd(solicitacao.issn, "info-issn");
    var anoTd = montaTd(solicitacao.ano, "info-ano");
    var editoraTd = montaTd(solicitacao.editora, "info-editora");

    vinculoTd.textContent = solicitacao.vinculo;
    tituloTd.textContent = solicitacao.titulo;
    autorTd.textContent = solicitacao.autor;
    edicaoTd.textContent = solicitacao.edicao;
    issnTd.textContent = solicitacao.issn;
    anoTd.textContent = solicitacao.ano;
    editoraTd.textContent = solicitacao.editora;

    obraTr.appendChild(vinculoTd);
    obraTr.appendChild(tituloTd);
    obraTr.appendChild(autorTd);
    obraTr.appendChild(edicaoTd);
    obraTr.appendChild(issnTd);
    obraTr.appendChild(anoTd);
    obraTr.appendChild(editoraTd);
    return obraTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;

    td.classList.add(classe);
    return td;
}

function infoObra(obra) {
    var solicitacao = {
        vinculo: form.vinculo.value,
        titulo: form.titulo.value,
        autor: form.autor.value,
        edicao: form.edicao.value,
        issn: form.issn.value,
        ano: form.ano.value,
        editora: form.editora.value
    }

}