import React from 'react';
import './App.css'

function App(){
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [Senha, setsenha] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault()
    //preventDefault impede o comportamento padrao de recarregar a pagina ao clicar no botao.

    alert(`Nome: ${nome}, Email: ${email} Sobrenome: ${sobrenome}`)
    //alert manda mensagem de 'erro
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>

      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" 
      value={nome}
      onChange={(e) => setNome(e.target.value)}/>
      <br/>

      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" 
      value={nome}
      onChange={(e) => setEmail(e.target.value)}/>
      <br/>

      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" 
      value={nome}
      onChange={(e) => setSobrenome(e.target.value)}/>
      <br/>

      
      <label htmlFor="Senha">Senha:</label>
      <input type="password" name="senha" id="Senha" 
      value={Senha}
      onChange={(e) => setsenha(e.target.value)}/>
      <br/>

      <div className='check'>
        <input type="checkbox" name="checkbox"
        id="check"/>
        <label htmlFor="checkbox">voce aceita nossos termos?</label>
      </div>

      <button type="submit">Enviar</button>

    </form>

  );

}

export default App;