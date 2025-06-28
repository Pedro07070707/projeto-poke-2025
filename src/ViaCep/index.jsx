import { useState, useEffect } from "react";
import axios from "axios";
import "./ViaCep.css";
import { useNavigate } from "react-router-dom";

const ViaCep = () => {
  const [logradouro, setLogradouro] = useState("Rua 1");
  const [bairro, setBairro] = useState("Bairro 1");
  const [cidade, setCidade] = useState("Cidade 1");
  const [estado, setEstado] = useState("Estado 1");
  const [dados, setDados] = useState(null);
  const [alterado, setAlterado] = useState(false);
  let cep = "";
  let navigation = useNavigate();

  const handleBuscarCep = () => {
    cep = document.querySelector(".cep").value;
    if (cep.length == 8) {
      buscaCep();
    }
  };

  function buscaCep() {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      let dadosRecebidos = response.data;
      alert(JSON.stringify(dadosRecebidos));
      setDados(dadosRecebidos);
      setAlterado(true);
      
    });
  };

  useEffect(() => {
    if (alterado==true) {
      setLogradouro(dados.logradouro);
      setBairro(dados.bairro);
      setCidade(dados.localidade);
      setEstado(dados.uf);
    }
  }, [alterado]);

  const handleEnviarDados = () => {
    let numero = document.querySelector("#numero").value;
    let complemento = document.querySelector("#complemento").value;
    let dadosParaEnvio = {
      logradouro: logradouro,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      numero: numero,
      complemento: complemento,
    };
    alert(JSON.stringify(dadosParaEnvio));
    navigation("/dadosCliente", {state: dadosParaEnvio});
  }

  return (
    <div className="ViaCep">
      <div className="FormCep">
        <h1>Busca CEP</h1>
        <input type="text" className="cep" placeholder="Digite o CEP" />
        <button onClick={handleBuscarCep}>Buscar</button>
      </div>
      <h2>Resultado</h2>
      <div className="Resultado">
        <p>Rua: {logradouro} </p>
        <p>Número: <input type="text" className="Campo" 
                    id="numero" /></p>
        <p>Complemento: <input type="text" className="Campo" 
                    id="complemento" /></p>
        <p>Bairro: {bairro} </p>
        <p style={{justifyContent:'space-between', display:'flex',
           width:'100%', flexDirection:'row'}}>
            <>Cidade: {cidade}</> <>Estado: {estado}</> 
        </p>
        <input type="button" value={"Enviar para outra tela"}
          onClick={handleEnviarDados} />
      </div>
    </div>
  );
};

export default ViaCep;
