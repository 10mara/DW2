function buscarCep(){
    const cep= document.getElementById("cep").value;
    const url= `https://viacep.com.br/ws/${cep}/json`;

    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            if (data.erro){
                alert("CEP ñ encontrado");
                return;
            }
            document.getElementById("logradouro").value= data.logradouro;
            document.getElementById("bairro").value= data.bairro;
            document.getElementById("cidade").value= data.localidade;
            document.getElementById("estado").value= data.estado+ `(${data.uf})`;



        })
        .catch((error)=>{
            alert("erro ao buscar o  cep");
        })
}        