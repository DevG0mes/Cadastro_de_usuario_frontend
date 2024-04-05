

function inserirUser(){
    
    let jsonData = {}
  
        
        var formData = new FormData(document.getElementById("myForm"));
        var jsonObject = {};
        
        // Convertendo os dados do formulário para JSON
        formData.forEach(function(nome, notebook){
        jsonObject[notebook] = nome;
        });
        
        // Convertendo o objeto JSON em uma string
        jsonData = JSON.stringify(jsonObject);
       
        // Exibindo o JSON no console (você pode fazer algo mais útil com ele, como enviar para um servidor)
        
        console.log(jsonData);
   

   
    axios.post('http://localhost:3000/inserir', JSON.parse(jsonData))
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};



function getUser() {
    var nome = document.getElementById("nome").value;

    axios.get('http://localhost:3000/user/' + nome)
    .then(function (response) {
        // Exibe o resultado na div
        exibirResultado(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}


function exibirResultado(data) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo atual da div

    if (data.length > 0) {
        var resultadoHTML = "<ul>";

        data.forEach(function(item) {
            resultadoHTML += "<li>ID: " + item.id + ", Nome: " + item.nome + ", Notebook: " + item.notebook + "</li>";
        });

        resultadoHTML += "</ul>";
        resultadoDiv.innerHTML = resultadoHTML;
    } else {
        resultadoDiv.textContent = "Nenhum resultado encontrado para o nome especificado.";
    }
}







function updateUser(){
    
    let jsonData = {}
  
        
        var formData = new FormData(document.getElementById("modForm"));
        var jsonObject = {};
        
        // Convertendo os dados do formulário para JSON
        formData.forEach(function(nome, notebook){
        jsonObject[notebook] = nome;
        });
        
        // Convertendo o objeto JSON em uma string
        jsonData = JSON.stringify(jsonObject);
       
        // Exibindo o JSON no console (você pode fazer algo mais útil com ele, como enviar para um servidor)
        
        console.log(jsonData);
   

   
    axios.put('http://localhost:3000/update/' + '2',JSON.parse(jsonData))
    .then(function (response) {
        console.log(response.status);
    
    })
    .catch(function (error) {
        console.log(error);
    });
};



