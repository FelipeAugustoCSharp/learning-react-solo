function Saudacao({nome}) {

  function gerarSaudacao(userName) {
    return `Olá ${userName}, Tudo bem?`
  }

  return (
  <>
    {nome && ( <p>{gerarSaudacao(nome)}</p> )}
  </> )
}

export default Saudacao