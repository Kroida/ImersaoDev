// !~~~ UTILIZE CNTRL + F PARA SE GUIAR: PASSO 1,2,3... ~~~!

// Passo 6: definindo pesquisar - as notas são importantes!

// function pesquisar() {
//     let section = document.getElementById("resultados-pesquisa")
//     console.log(section)

//     let resultados = "";

//     for (let dado of dados) {
//         // Sem o "+" o elemento irá ficar substituindo as informações anteriores.
//         resultados += `
//                 <div class="item-resultado">
//                     <h2>                       <!-- Exibe o nome -->
//                         <a href="#" target="_blank">${dado.titulo}</a>
//                     </h2>                      <!-- Exibe a descrição -->
//                     <p class="descricao-meta">${dado.descricao}</p>
//                             <!-- Exibe o libk -->
//                     <a href="${dado.link}" target="_blank">Mais informações</a>
//                 </div>`
//     }

//     section.innerHTML = resultados
// }

// Passo 7: pedindo para o Gemini deixar o nosso código entendível para outros programadores.

function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Seleciona a seção HTML onde os resultados serão exibidos - o ".value" no final é porque precisamos SOMENTE do valor que o ID representa e não do ID em si.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa estiver vazio - o return meio que anula TUDO que está abaixo dele caso a condição for verdadeira. 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Você não digitou nada (⊙_⊙;)</p>"
        return;
    }

    // Converte todas as letras para minúsculo - prevenção de erros do usuário.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de resultados.
    for (let dado of dados) {
        // Converte todas as letras para minúsculo - prevenção de erros do usuário.
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se titulo includes campoPesquisa   // Se descricao includes campoPesquisa    // Se tags includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena o HTML de cada resultado à string 'resultados'.
            // O operador += adiciona o novo HTML ao final da string a cada iteração.
            resultados += `
                        <div class="item-resultado">
                            <h2> <a href="#" target="_blank">${dado.titulo}</a> </h2>              
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Mais informações</a>
                        </div>`;
        }
    }

    // Se resultados for diferente a mensagem ativará. 
    if (!resultados) {
        resultados = "<p>Nada foi encontrado (┬┬﹏┬┬)</p>";
    }

    // Atribui o conteúdo HTML gerado à seção selecionada.
    section.innerHTML = resultados;
}

// Funcionalidades.

// Lembrando que variável é um espaço dentro da memória!

// console.log(dados);

// Passo 1: pegando o elemento pelo ID.

// let section = document.getElementById("resultados-pesquisa")
// console.log(section)

// Passo 4: criando uma nova variável pois "section" é um elemento muito crítico.

// let resultados = "";

// Passo 3: para cada dado dentro da lista de dados.

// Note que agora nós definimos "dado" como índice, então não precisamos mais declarar os mesmos depois de "dados".

// for (let dado of dados) {
//     // Sem o "+" o elemento irá ficar substituindo as informações anteriores.
//     resultados += `
//             <div class="item-resultado">
//                 <h2>                       <!-- Exibe o nome -->
//                     <a href="#" target="_blank">${dado.titulo}</a>
//                 </h2>                      <!-- Exibe a descrição -->
//                 <p class="descricao-meta">${dado.descricao}</p>
//                         <!-- Exibe o libk -->
//                 <a href="${dado.link}" target="_blank">Mais informações</a>
//             </div>`
// }

// Passo 5: atribuindo o valor de resultados a section depois do loop ter sido completo.

// section.innerHTML = resultados

// Passo 2: note a importância da crase aqui.

// section.innerHTML = `
//             <div class="item-resultado">
//                 <h2>                       <!-- Exibe o nome -->
//                     <a href="#" target="_blank">${dados[0].titulo}</a>
//                 </h2>                      <!-- Exibe a descrição -->
//                 <p class="descricao-meta">${dados[0].descricao}</p>
//                 <a href="${dados[0].link}" target="_blank">Mais informações</a>
//             </div>` 