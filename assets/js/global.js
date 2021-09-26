function enviarForm()
{
  alert("Formulário cadastrado com sucesso!");
  window.location.href = "./sent.html";
}

function validarCPF()
{
  // O formulario é um identificador do <form>, capturando o identificador do campo de entrada de CPF
  const cpf = formulario.cpf.value;

  // Checa se o campo está vazio
  if (cpf == "") 
  {
    alert("Campo vazio!");
  }

  // Uma expressão regular de CPF válido
  const validar = /^[0-9]{11}$/;

  // Checa se é válido
  if (validar.test(cpf)) 
  {
      console.log("O CPF está ótimo!")
  }

  // Senão avisa que um CEP inválido
  else 
  {
      alert("CPF inválido.");
  }

}