import {useLocation} from 'react-router-dom'

const DadosDoCliente = () => {

    let dados = useLocation().state;

    const handleEnviarDados = () => {
    let numero = document.querySelector("#nome").value;
    let complemento = document.querySelector("#dataNascimento").value;
    let dadosParaEnvio = {
      logradouro: logradouro,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      numero: numero,
      complemento: complemento,
      nome: nome,
      dataNascimento: dataNascimento,
    };
    alert(JSON.stringify(dadosParaEnvio));
    navigation("/dadosCliente2", {state: dadosParaEnvio});
  }

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
                <input type="button" value={"Enviar para outra tela"}
                  onClick={handleEnviarDados} />
            </div>
        </>
    )
}

export default DadosDoCliente