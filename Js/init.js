// Seleciona os botões de mudança de tela
var btn_CC = document.getElementById('btn-R');
var btn_LG = document.getElementById('btn-LR');
var btn_Login = document.getElementById('btn-L');


document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de email e senha
    const useremail = document.getElementById('login-email').value;
    const userpass = document.getElementById('login-password').value;

    // Verifica se os campos estão preenchidos
    if (!useremail || !userpass) {
        alert('Por favor, preencha todos os campos.'); // Alerta se os campos estiverem vazios
        return; // Sai da função
    }

    // Obtém a senha armazenada no localStorage
    const senha_guardada = localStorage.getItem(useremail);

    // Verifica se a senha informada corresponde à armazenada
    if (senha_guardada === userpass) {
        alert('Login bem-sucedido!');
    } else {
        alert('Email ou senha incorretos.');
    }
    document.getElementById('form-login').reset(); // Reseta o formulário de login
});

// Adiciona um evento de submissão ao formulário de registro
document.getElementById('form-register').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de email e senha
    const regEmail = document.getElementById('reg-email').value;
    const regSenha = document.getElementById('reg-pass').value;

    // Verifica se os campos estão preenchidos
    if (!regEmail || !regSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Armazena a senha no localStorage com o email como chave
    localStorage.setItem(regEmail, regSenha);
    alert('Usuário registrado com sucesso!');
    document.getElementById('form-register').reset();
});

// Função para mudar da tela de login para a de registro
btn_CC.onclick = function() {
    var d1 = document.getElementById('login');
    var d2 = document.getElementById('register');

    d1.style.display = 'none';
    d2.style.display = 'block';
}

// Função para voltar da tela de registro para a de login
btn_LG.onclick = function() {
    var d1 = document.getElementById('login');
    var d2 = document.getElementById('register');

    d2.style.display = 'none';
    d1.style.display = 'block';
}

// Inicializa a exibição correta
document.getElementById('register').style.display = 'none'; // Oculta o registro inicialmente
