# Desafio Cadastro Pessoal - Formação Tech

<p style="text-align: center">
 <img alt="Gustavo Costa" src="assets/images/me.png" height="164px" />
</p>

<p style="text-align: center">
 <a href="https://linkedin.com/in/antonio-paulo-pcd/">
  <img alt="Linkedin" src="assets/images/linkedin.png" height="64px" />
 </a>
</p>

### Autor:

- [Ant§onio Paulo](https://linkedin.com/in/antonio-paulo-pcd/)
- **Idade**: 33 anos
- **Tipo de deficiência:** Deficiência auditiva

### Biografia

Deficiente auditivo bilateral profundo desde quando era bebê de 1 ano,  Bacharelado em Administração de Empresas (2016). Fiz um curso de HTML em 2021. Foram dez anos e meio de experiência de área administrativa. Cursando para atualizar os conhecimentos. Último trabalho como auxiliar administrativo na empresa GrupoSC distribuidor e medicamentos. Gosto muito de administração e também tecnologia em breve, gostaria de aprender mais de área relacionada à TI, porque estou muito encantado com o novo mundo de tecnologia. 

### Objetivo:

Desenvolver um cadastro pessoal num *site* pequeno e acessível, com campos do formulários, além de validações e expressões regulares.

### Ferramenta:

Visual Studio Code no Linux.

### Linguagens: 

- CSS
- HTML
- JavaScript

### Descrição do site

#### HTML 

Comeca com `<!DOCTYPE html>`, que é importante para informar o navegador que o documento é um documento HTML. Depois com `<html lang="pt-BR">`, que um elemento de HTML para renderizar a sinatxe em HTML e que informa o idioma para que os navegadores possam localizar a página com um filtro do idioma.

Pulamos para `<head>` que é um elemento para armazenar as informações dos metadados. Dentro desse elemento, temos:

- `<link media="all" rel="stylesheet" type="text/css" href="assets/css/cores.css">`:
   Um ligacão de recurso externo de CSS para renderizar o modelo.
   Os atributos deste elemento:
   - `media` — informa a compatiblidade dos dipsoitivos 
   - `rel`  – relacionar o HTML
   - `type` - informa o tipo de arquivo
  
- `<meta charset="UTF-8">`
   Um metadado de renderizacão e codificacão de caracteres estrangeiros

- `<meta name="description" content="Faça-nos um cadastro pessoal para abrir uma conta corrente">`
   Um metadado de descrição da página

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
   Um metadado de visualizacão e compatiblidade de dipsoitivos

- `<title>Itaú – Abrir uma conta corrente</title>`
   Um título renderizado na aba do navegador

Chegamos ao elemento `<body>`, deisgnado para renderizar todo o corpo contendo inúmeros elemenetos. Dentro dele, temos `<div class="container">`, significando que definimos a largura do container e centralizamos, e dentro deste, temos `<section>` que é uma seção que possa incorporar alguns elementos e se separa do `<form>`.

O elemento `<form>` é um formulário contendo rótulos, campos de entrada com diferentes tipos, lista suspensa de opções e lista de escolha, e claramente um botão de envio. 

Os atributos do elemento `<form>`:

- `action`: encmainhamento da próxima página ao submeter
- `id`: um identificador do formulário, ideal para a deteção feita pela função ou variável em JavaScript
- `method`:
    - `get` é um método que funciona apenas em puro HTML;
    - `post` é um método que funciona em linguagens de programação como PHP e Python;
- `onsubmit` é um evento de submissão em JavScript que captura uma função em JavaScript;

O `<label>` é um elemento de rótulo e contém um atributo `for`, que vincula ao campo de entrada através de um identificador com o mesmo nome.

O `<input>` é um elemento de campo de entrada e contém atributos em seguida:

- `type`: tipo de documento
- `id`: um identificador do campo de entrada vinculado pelo rótulo
- `name`: um nome ideal para a captura em JavaScript
- `required`: obrigatório
- `aria-required`: semelhante ao `required`, mas para pessoas com deficiência visual
- `onblur`: um evento de saída do campo que captura uma função em JavaScript
- `pattern`: uma expressão regular para validar o campo
- `placeholder`: serve para exemplificar o que deve escrever em formato correto

Temos uma lista suspensa de opções (`<select>`) com `<option>` (opções) dentro. No fim, temos um botão de envio (`<button>`). 

Depois temos um rodapé (`<footer>`) contendo um parágrafo (`<p>`) uma lista (`<ul><li></li></ul>`) e *links* (`<a>`). 

No fim do corpo, temos um elemento `<script>` que permite anexar ou conectar um recurso externo em JavaScript para carregar as funções. 

#### JavaScript 

**Função de submissão**

Colocamos um evento `onsubmit` num elemento `<form>` com uma função chamada `enviarForm()` e ao submeter, receberemos um alerta e seremos encaminhados com um link do arquivo "sent.html" com `window.location.href`. O código fica assim:

```js
function enviarForm()
{
  alert("Formulário cadastrado com sucesso!");
  window.location.href = "./sent.html";
}
```

**Função de validação de CPF**

Colocamos um evento de saída de campo chamado `onblur` num campo de entrada de CPF com uma função chamada `validarCPF()`. Nela, pegamos o identificador do formulário e então o do campo de entrada, capturando o valor. 

Verificamos que, ao sair do campo, se o campo estiver vazio, avisamos que o campo está vazio. Então verificaremos em seguida se o número de CPF está certo através de uma expressão regular (`/^[0-9]{11}$/`). Usamos `test` para analisar se o CPF está válido, senão avisamos com um alerta que está inválido:

```js
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
```

### Referências

- [Expressão regular de telefone celular e fixo](https://gist.github.com/reggiegutter/5516382): Uma expressão regular completa de ambos os telefones celulares e fixo. 
- [Expressão regular de CPF/CNPJ](https://pt.stackoverflow.com/questions/133691/formatar-campo-cpf-ou-cnpj-usando-regex): Uma expressão regular completa e válida de ambos CPF e CNPJ.


