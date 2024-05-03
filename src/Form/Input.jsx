import React from "react";


const Input = () => {

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [rua, setRua] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [estado, setEstado] = React.useState('')
  

    function ClickSubmit(event) {
        event.preventDefault();
    }

    return(

        <form onSubmit={ClickSubmit}>
            <label htmlFor="nome"><h1>Nome:</h1></label>
            <input 
            type="text" 
            id="nome"
            value={nome}
            onChange={({target}) => setNome(target.value)}
            />

            <label htmlFor="email"><h1>Email:</h1></label>
            <input 
            type="text" 
            id="email"
            value={email}
            onChange={({target}) => setEmail(target.value)}
            />

            <label htmlFor="senha"><h1>Senha:</h1></label>
            <input 
            type="password" 
            id="senha"
            value={senha}
            onChange={({target}) => setSenha(target.value)}
            />


            <label htmlFor="cep"><h1>CEP:</h1></label>
            <input 
            type="number" 
            id="cep"
            value={cep}
            onChange={({target}) => setCep(target.value)}
            />


            <label htmlFor="rua"><h1>Rua:</h1></label>
            <input 
            type="text" 
            id="rua"
            value={rua}
            onChange={({target}) => setRua(target.value)}
            />


            <label htmlFor="numero"><h1>Numero:</h1></label>
            <input 
            type="number" 
            id="numero"
            value={numero}
            onChange={({target}) => setNumero(target.value)}
            />


            <label htmlFor="bairro"><h1>Bairro:</h1></label>
            <input 
            type="text" 
            id="bairro"
            value={bairro}
            onChange={({target}) => setBairro(target.value)}
            />


            <label htmlFor="cidade"><h1>Cidade:</h1></label>
            <input 
            type="text" 
            id="cidade"
            value={cidade}
            onChange={({target}) => setCidade(target.value)}
            />


            <label htmlFor="nome"><h1>Estado:</h1></label>
            <input 
            type="text" 
            id="estado"
            value={estado}
            onChange={({target}) => setEstado(target.value)}
            />
            <h2>nome:</h2>{nome}
            <h2>email:</h2>{email}
            <h2>senha:</h2>{senha}
            <h2>cep:</h2>{cep}
            <h2>rua:</h2>{rua}
            <h2>numero:</h2>{numero}
            <h2>bairro:</h2>{bairro}
            <h2>cidade:</h2>{cidade}
            <h2>estado:</h2>{estado}
            
            <button>Enviar</button>
        </form>
    )
}

export default Input;


