import {useLocation} from 'react-router-dom'

const DadosDoCliente = () => {

    let dados = useLocation().state;

    return (
        <>
        {alert(JSON.stringify(dados))}
            <div 
                style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%'}}
                className="DadosDoCliente">
                Nome: <input type="text" className="Campo"
                  id="nome" /> 
                Data de Nascimento: <input type="text" className="Campo"
                  id="dataNascimento" /> 
                <p>Rua: {dados.logradouro} </p>
                <p>Número: {dados.numero}</p>
                <p>Complemento: {dados.complemento}</p>
                <p>Bairro: {dados.bairro} </p>
                <p>Cidade: {dados.cidade}</p> 
                <p>Estado: {dados.estado}</p>
            </div>
        </>
    )
}

export default DadosDoCliente