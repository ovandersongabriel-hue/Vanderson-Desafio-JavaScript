
class contato {
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
    
    console.log(data);
    
    form.resert();

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso`);

    return false;
    
}

