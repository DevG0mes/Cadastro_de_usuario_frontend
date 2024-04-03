

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

//exports.module = inserirUser