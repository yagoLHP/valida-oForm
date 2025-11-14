import express from "express";

const host = "0.0.0.0";
const porta = 1213;
var listaUsuarios = [];
const server = express();

server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<title>Cadastro</title>
</head>
<body>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#">João</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/">Home</a>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Cadastros
</a>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="/cadastroUsuario">Pessoas</a></li>
</ul>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/logout">Sair</a>
</li>
</ul>
</div>
</div>
</nav>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
    `)
});

server.get("/cadastroUsuario", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<title>Cadastro</title>
</head>
<body>
<div class="container">
<h1 class="text-center border m-3 p-3 bg-light">Cadastro</h1>
<form method="POST" action="/adicionarUsuario" class="row g-3 needs-validation m-3 p-3 bg-light" novalidate>
<div class="col-md-4">
<label for="cnpj" class="form-label">CNPJ</label>
<input type="number" placeholder="00.000.000/0000-00" class="form-control" id="cnpj" name="cnpj">
</div>
<div class="col-md-4">
<label for="razaoSocial" class="form-label">Razão Social</label>
<input type="text" class="form-control" placeholder="ex: Google Ltda" id="razaoSocial" name="razaoSocial">
</div>
<div class="col-md-4">
<label for="nomeF" class="form-label">Nome fantasia</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend">@</span>
<input type="text" placeholder="ex: Loja 1" class="form-control" id="nomeF" name="nomeF" aria-describedby="inputGroupPrepend">
</div>
</div>
<div class="col-md-6">
<label for="end" class="form-label">Endereço</label>
<input type="text" placeholder="ex: Rua: José Bonifacio" class="form-control" id="end" name="end">
</div>
<div class="col-md-4">
<label for="city" class="form-label">Cidade</label>
<input type="text" placeholder="ex: São Paulo" class="form-control" id="city" name="city">
</div>
<div class="col-md-3">
<label for="nt" class="form-label">UF</label>
<select class="form-select" id="uf" name="uf">
<option selected>Escolher...</option>
<option value="AC">AC</option>
<option value="AL">AL</option>
<option value="AP">AP</option>
<option value="AM">AM</option>
<option value="BA">BA</option>
<option value="CE">CE</option>
<option value="DF">DF</option>
<option value="ES">ES</option>
<option value="GO">GO</option>
<option value="MA">MA</option>
<option value="MT">MT</option>
<option value="MS">MS</option>
<option value="MG">MG</option>
<option value="PA">PA</option>
<option value="PB">PB</option>
<option value="PR">PR</option>
<option value="PE">PE</option>
<option value="PI">PI</option>
<option value="RJ">RJ</option>
<option value="RN">RN</option>
<option value="RS">RS</option>
<option value="RO">RO</option>
<option value="RR">RR</option>
<option value="SC">SC</option>
<option value="SP">SP</option>
<option value="SE">SE</option>
<option value="TO">TO</option>
</select>
</div>
<div class="col-md-3">
<label for="cep" class="form-label">CEP</label>
<input type="number" placeholder="ex: 00000-000" class="form-control" id="cep" name="cep">
</div>
<div class="col-md-4">
<label for="email" class="form-label">Email</label>
<input type="text" class="form-control" placeholder="ex: jose@gmail.com" id="email" name="email">
</div>
<div class="col-md-4">
<label for="tel" class="form-label">Telefone</label>
<input type="number" class="form-control" placeholder="(00)00000-0000" id="tel" name="tel">
</div>
<div class="col-12">
<button type="submit" class="btn btn-primary">Cadastrar</button>
<a href="/" class="btn btn-secondary">Voltar</a>
</div>
</form>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
    `)
});

server.post('/adicionarUsuario', (req, res) => {
const cnpj = req.body.cnpj;
const razaoSocial = req.body.razaoSocial;
const nomeF = req.body.nomeF;
const end = req.body.end;
const city = req.body.city;
const uf = req.body.uf;
const cep = req.body.cep;
const email = req.body.email;
const tel = req.body.tel;

if(cnpj && razaoSocial && nomeF && end && city && uf && cep && email && tel){
    listaUsuarios.push({cnpj, razaoSocial, nomeF, end, city, uf, cep, email, tel});
    res.redirect('/listaUsuarios');
} else{
    let conteudo = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<title>Cadastro</title>
</head>
<body>
<div class="container">
<h1 class="text-center border m-3 p-3 bg-light">Cadastro</h1>
<form method="POST" action="/adicionarUsuario" class="row g-3 needs-validation m-3 p-3 bg-light" novalidate>
`;

conteudo += `<div class="col-md-4">
<label for="cnpj" class="form-label">CNPJ</label>
<input type="number" placeholder="00.000.000/0000-00" class="form-control" id="cnpj" name="cnpj">
`;
if(!cnpj){ conteudo += `</div> <div><p>Por favor, preencha o campo CNPJ.</p>`; }

conteudo += `</div> <div class="col-md-4">
<label for="razaoSocial" class="form-label">Razão Social</label>
<input type="text" class="form-control" placeholder="ex: Google Ltda" id="razaoSocial" name="razaoSocial">
`;
if(!razaoSocial){ conteudo += `</div> <div><p>Por favor, preencha o campo Razão Social.</p>`; }

conteudo += `</div> <div class="col-md-4">
<label for="nomeF" class="form-label">Nome fantasia</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend">@</span>
<input type="text" placeholder="ex: Loja 1" class="form-control" id="nomeF" name="nomeF" aria-describedby="inputGroupPrepend">
</div>
`;
if(!nomeF){ conteudo += `</div> <div><p>Por favor, preencha o campo Nome Fantasia.</p>`; }

conteudo += `</div> <div class="col-md-6">
<label for="end" class="form-label">Endereço</label>
<input type="text" placeholder="ex: Rua: José Bonifacio" class="form-control" id="end" name="end">
`;
if(!end){ conteudo += `</div> <div><p>Por favor, preencha o campo Endereço.</p>`; }

conteudo += `</div> <div class="col-md-4">
<label for="city" class="form-label">Cidade</label>
<input type="text" placeholder="ex: São Paulo" class="form-control" id="city" name="city">
`;
if(!city){ conteudo += `</div> <div><p>Por favor, preencha o campo Cidade.</p>`; }

conteudo += `</div> <div class="col-md-3">
<label for="nt" class="form-label">UF</label>
<select class="form-select" id="uf" name="uf">
<option selected>Escolher...</option>
<option value="AC">AC</option>
<option value="AL">AL</option>
<option value="AP">AP</option>
<option value="AM">AM</option>
<option value="BA">BA</option>
<option value="CE">CE</option>
<option value="DF">DF</option>
<option value="ES">ES</option>
<option value="GO">GO</option>
<option value="MA">MA</option>
<option value="MT">MT</option>
<option value="MS">MS</option>
<option value="MG">MG</option>
<option value="PA">PA</option>
<option value="PB">PB</option>
<option value="PR">PR</option>
<option value="PE">PE</option>
<option value="PI">PI</option>
<option value="RJ">RJ</option>
<option value="RN">RN</option>
<option value="RS">RS</option>
<option value="RO">RO</option>
<option value="RR">RR</option>
<option value="SC">SC</option>
<option value="SP">SP</option>
<option value="SE">SE</option>
<option value="TO">TO</option>
</select>
`;
if(!uf){ conteudo += `</div> <div><p>Por favor, preencha o campo UF.</p>`; }

conteudo += `</div> <div class="col-md-3">
<label for="cep" class="form-label">CEP</label>
<input type="number" placeholder="ex: 00000-000" class="form-control" id="cep" name="cep">
`;
if(!cep){ conteudo += `</div> <div><p>Por favor, preencha o campo CEP.</p>`; }

conteudo += `</div> <div class="col-md-4">
<label for="email" class="form-label">Email</label>
<input type="text" class="form-control" placeholder="ex: jose@gmail.com" id="email" name="email">
`;
if(!email){ conteudo += `</div> <div><p>Por favor, preencha o campo Email.</p>`; }

conteudo += `</div> <div class="col-md-4">
<label for="tel" class="form-label">Telefone</label>
<input type="number" class="form-control" placeholder="(00)00000-0000" id="tel" name="tel">
`;
if(!tel){ conteudo += `</div> <div><p>Por favor, preencha o campo Telefone.</p>`; }

conteudo += `</div>
<div class="col-12">
<button type="submit" class="btn btn-primary">Cadastrar</button>
<a href="/" class="btn btn-secondary">Voltar</a>
</div>
</form>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
`;
res.send(conteudo);
}
});

server.get('/listaUsuarios', (req, res) => {
let conteudo = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<title>Cadastrados</title>
</head>
<body>
<div class="container">
<h1 class="text-center border m-3 p-3 bg-light">Lista</h1>
<table class="table table-striped table-hover">
<thead>
<tr>
<th>CNPJ</th>
<th>Razão Social</th>
<th>Nome Fantasia</th>
<th>Endereço</th>
<th>Cidade</th>
<th>UF</th>
<th>CEP</th>
<th>Email</th>
<th>Telefone</th>
</tr>
</thead>
<tbody>
`;
let contP = 0;
for(let i = 0; i < listaUsuarios.length; i++) {
contP++;
conteudo += `
<tr>
<td>${listaUsuarios[i].cnpj}</td>
<td>${listaUsuarios[i].razaoSocial}</td>
<td>${listaUsuarios[i].nomeF}</td>
<td>${listaUsuarios[i].end}</td>
<td>${listaUsuarios[i].city}</td>
<td>${listaUsuarios[i].uf}</td>
<td>${listaUsuarios[i].cep}</td>
<td>${listaUsuarios[i].email}</td>
<td>${listaUsuarios[i].tel}</td>
</tr>
`;
}
conteudo += `
<tr>
<td colspan="9"><strong>Número total de pessoas: ${contP}</strong></td>
</tr>
</tbody>
</table>
</div>
<a class="btn btn-secondary" href="/cadastroUsuario">Voltar</a>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>
`;
res.send(conteudo);
});

server.listen(porta, host, () => {
console.log(`Servidor rodando em http://${host}:${porta}`);
})
