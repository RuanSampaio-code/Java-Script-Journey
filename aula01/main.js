const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!';

window.alert('My first menssager') //vai colocar uma msg na janela 
window.confirm('Está gostando de JS?') // uma janelade de confirmação
var nome =  window.prompt('What is your name?') //uma pergunta
document.write('Prazer' + nome )