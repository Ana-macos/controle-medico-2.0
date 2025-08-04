// Sistema de Controle Médico 2.0
// Desenvolvido por Ana

// Dados dos usuários (simulado)
let usuarios = {
    'ana@email.com': {
        nome: 'Ana',
        senha: '123456',
        consultas: [],
        medicamentos: []
    }
};

// Função de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.querySelector('input[type="email"]').value;
            const senha = document.querySelector('input[type="password"]').value;
            
            // Verificar login
            if (usuarios[email] && usuarios[email].senha === senha) {
                alert('Login realizado com sucesso! Bem-vindo(a), ' + usuarios[email].nome + '!');
                mostrarDashboard();
            } else {
                alert('Email ou senha incorretos!');
            }
        });
    }
});

// Função para mostrar dashboard (simulado)
function mostrarDashboard() {
    document.body.innerHTML = `
        <header>
            <h1>🏥 Painel de Controle Médico</h1>
            <p>Bem-vindo ao seu sistema pessoal de saúde</p>
        </header>
        
        <main style="max-width: 800px; margin: 0 auto; padding: 2rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                
                <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 1rem;">📅 Próximas Consultas</h3>
                    <p>Nenhuma consulta agendada</p>
                    <button onclick="alert('Funcionalidade em desenvolvimento!')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">Agendar Consulta</button>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 1rem;">💊 Medicamentos</h3>
                    <p>Nenhum medicamento cadastrado</p>
                    <button onclick="alert('Funcionalidade em desenvolvimento!')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">Adicionar Medicamento</button>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <h3 style="color: #667eea; margin-bottom: 1rem;">📋 Histórico</h3>
                    <p>Histórico médico vazio</p>
                    <button onclick="alert('Funcionalidade em desenvolvimento!')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">Ver Histórico</button>
                </div>
                
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <button onclick="location.reload()" style="padding: 1rem 2rem; background: #dc3545; color: white; border: none; border-radius: 8px; cursor: pointer;">Sair</button>
            </div>
        </main>
    `;
}

// Dados de teste para login:
// Email: ana@email.com
// Senha: 123456

console.log('Sistema de Controle Médico 2.0 carregado!');
console.log('Para testar: Email: ana@email.com | Senha: 123456');
