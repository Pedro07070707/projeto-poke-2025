import { useState, useEffect } from "react";
import axios from "axios";
import "./ViaCep.css";

const ViaCep = () => {
  const [logradouro, setLogradouro] = useState("Rua 1");
  const [bairro, setBairro] = useState("Bairro 1");
  const [cidade, setCidade] = useState("Cidade 1");
  const [estado, setEstado] = useState("Estado 1");
  const [dados, setDados] = useState(null);
  const [alterado, setAlterado] = useState(false);
  let cep = "";

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
        <p>Bairro: {bairro} </p>
        <p>Cidade: {cidade} </p>
        <p>Estado: {estado} </p>
      </div>
    </div>
  );
};

export default ViaCep;
