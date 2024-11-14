document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para links da barra lateral
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Obtém o ID da seção alvo
            const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

            // Rolagem suave
            targetSection.scrollIntoView({
                behavior: 'smooth', // Comportamento de rolagem suave
                block: 'center' // Centraliza a seção na tela
            });
        });
    });

    // Função para mostrar o formulário de adicionar
    function mostrarFormulario(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.style.display = "block";
        }
    }

    // Função para esconder o formulário de adicionar
    function fecharFormulario(formId) {
        const form = document.getElementById(formId);
        if (form) {
            form.style.display = "none";
        }
    }

    // Funções para alternar entre os formulários de adicionar e editar para Veículos
    function mostrarEdicaoVeiculo() {
        document.getElementById("editar-veiculo").style.display = "block";
        document.getElementById("adicionar-veiculo").style.display = "none"; // Oculta o formulário de adicionar
    }

    function mostrarAdicionarVeiculo() {
        document.getElementById("adicionar-veiculo").style.display = "block";
        document.getElementById("editar-veiculo").style.display = "none"; // Oculta o formulário de edição
    }

    // Event listeners para os botões de "Adicionar" e "Alterar" nas seções de Veículos
    const btnAdicionarVeiculo = document.querySelector(".btn-primary");
    const btnAlterarVeiculo = document.querySelector(".btn-alterar-veiculo");

    if (btnAdicionarVeiculo) {
        btnAdicionarVeiculo.addEventListener("click", () => mostrarFormulario('adicionar-veiculo'));
    }

    if (btnAlterarVeiculo) {
        btnAlterarVeiculo.addEventListener("click", mostrarEdicaoVeiculo);
    }

    // Funções genéricas para outros controles
    document.querySelectorAll('.btn-adicionar').forEach(button => {
        button.addEventListener("click", (e) => {
            const sectionId = e.target.getAttribute('data-section');
            mostrarFormulario(`form-${sectionId}`);
        });
    });

    document.querySelectorAll('.btn-fechar').forEach(button => {
        button.addEventListener("click", (e) => {
            const sectionId = e.target.getAttribute('data-section');
            fecharFormulario(`form-${sectionId}`);
        });
    });

    // Exemplo de uso da conexão MySQL
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'seu_usuario',
        password: 'sua_senha',
        database: 'sbase' // Sem a extensão .sql
    });

    connection.connect((err) => {
        if (err) {
            console.error('Erro de conexão: ' + err.stack);
            return;
        }
        console.log('Conectado como ID ' + connection.threadId);
    });
});
