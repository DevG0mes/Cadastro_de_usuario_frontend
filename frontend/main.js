

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

function getUser(){
    
    let jsonData = {}
  
        
        var formData = new FormData(document.getElementById("pesq"));
        var jsonObject = {};
        
        // Convertendo os dados do formulário para JSON
        formData.forEach(function(value, index){
        jsonObject[index] = value;
        });
        
        // Convertendo o objeto JSON em uma string
        jsonData = JSON.stringify(jsonObject);
       
        // Exibindo o JSON no console (você pode fazer algo mais útil com ele, como enviar para um servidor)
        
        console.log(jsonData);
   

   
    axios.get('http://localhost:3000/usuario', {
        params: {
          nome: JSON.parse(jsonData).nome
        }
      })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};


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
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};



//exports.module = inserirUser