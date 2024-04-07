

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



function pesquisarUsuario() {
    var nome = document.getElementById("nome").value;

    axios.get('http://localhost:3000/user/' + nome)
    .then(function (response) {
        console.log(response.data); // Verifica o objeto de resposta retornado pela requisição
        var usuario = response.data;
        if(usuario) {
            // Cria elementos de parágrafo para cada informação do usuário
            var userIdPara = document.createElement("p");
            userIdPara.textContent = "ID: " + usuario.id;

            var userNamePara = document.createElement("p");
            userNamePara.textContent = "Nome: " + usuario.nome;

            var userNotebookPara = document.createElement("p");
            userNotebookPara.textContent = "Notebook: " + usuario.notebook;

            // Limpa a div userInfo antes de adicionar novos elementos
            var userInfoDiv = document.getElementById("userInfo");
            userInfoDiv.innerHTML = "";

            // Adiciona os elementos de parágrafo à div userInfo
            userInfoDiv.appendChild(userIdPara);
            userInfoDiv.appendChild(userNamePara);
            userInfoDiv.appendChild(userNotebookPara);

            let inputId = document.getElementById('id')
            inputId.value = usuario.id

            // Garante que a div userInfo esteja visível
            userInfoDiv.style.display = "block";

            console.log("ID: " + usuario.id);
            console.log("Nome: " + usuario.nome);
            console.log("Notebook: " + usuario.notebook);
        } else {
            console.log("Nenhum usuário encontrado com esse nome.");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}


function updateUser() {
    var id = document.getElementById("id").value;
    var nome = document.getElementById("fname").value;
    var notebook = document.getElementById("lnotebook").value;

    // Verifica se todos os campos estão preenchidos
    if (!id || !nome || !notebook) {          

        console.log("Todos os campos devem ser preenchidos.");
        return;
    }

    var jsonData = {
        nome: nome,
        notebook: notebook
    };

    axios.put('http://localhost:3000/update/' + id, jsonData)
    .then(function (response) {
        console.log(response.status);
        // Aqui você pode fazer algo após a atualização, como redirecionar para outra página ou exibir uma mensagem de sucesso
    })
    .catch(function (error) {
        console.log(error);
        // Aqui você pode lidar com erros, como exibir uma mensagem de erro para o usuário
    });
}


function excluirUsuario() {
    // Obtém o valor do input
    const id = document.getElementById('fname').value;
    
    // Verifica se o ID está vazio
    if (id.trim() === '') {
      alert('Por favor, insira um ID.');
      return;
    }
  
    // URL do endpoint que você deseja excluir, passando o ID na URL
    const url = 'http://localhost:3000/delete/' + id;
  
    // Realiza a solicitação DELETE
    axios.delete(url)
      .then(response => {
        console.log('Recurso excluído com sucesso:', response.data);
        alert('Recurso excluído com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao excluir recurso:', error);
        alert('Erro ao excluir recurso. Verifique o console para mais detalhes.');
      });
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mostrarBtn').addEventListener('click', function() {
        mostrarTodosDados();
    });
});

// Função para fazer a requisição GET e converter os dados JSON em uma tabela
function mostrarTodosDados() {
    // URL da rota que retorna todos os dados da tabela
    const url = 'http://localhost:3000/usuario';

    // Faz a requisição GET para obter os dados da tabela
    axios.get(url)
        .then(response => {
            // Converte os dados JSON em uma tabela HTML
            const tableHTML = converterJsonParaTabela(response.data);

            // Abrir a tabela em uma nova guia
            const novaGuia = window.open();
            novaGuia.document.write(tableHTML);
        })
        .catch(error => {
            console.error('Erro ao carregar dados da tabela:', error);
            alert('Erro ao carregar dados da tabela. Verifique o console para mais detalhes.');
        });
}

// Função para converter os dados JSON em uma tabela HTML
function converterJsonParaTabela(data) {
    let tableHTML = '<table border="1">';
    tableHTML += '<thead><tr>';
    for (let key in data[0]) {
        tableHTML += '<th>' + key + '</th>';
    }
    tableHTML += '</tr></thead>';
    tableHTML += '<tbody>';
    data.forEach(item => {
        tableHTML += '<tr>';
        for (let key in item) {
            tableHTML += '<td>' + item[key] + '</td>';
        }
        tableHTML += '</tr>';
    });
    tableHTML += '</tbody></table>';
    return tableHTML;
}
