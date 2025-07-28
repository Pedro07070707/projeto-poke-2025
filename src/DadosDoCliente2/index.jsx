import {useLocation} from 'react-router-dom'

const DadosDoCliente2 = () => {

    let dados = useLocation().state;

    return (
        <>
        {alert(JSON.stringify(dados))}
            <div 
                style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%'}}
                className="DadosDoCliente">
                <p>Rua: {dados.logradouro} </p>
                <p>Nome: {dados.nome}</p>
                <p>Data de Nascimento: {dados.dataNascimento}</p>
                <p>Número: {dados.numero}</p>
                <p>Complemento: {dados.complemento}</p>
                <p>Bairro: {dados.bairro} </p>
                <p>Cidade: {dados.cidade}</p> 
                <p>Estado: {dados.estado}</p>
            </div>
        </>
    )
}

export default DadosDoCliente2