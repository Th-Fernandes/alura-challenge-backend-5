<h1 align="center">
  <p align="center">
  <img src="./.github/challenges-logo.svg" />
  <p>ALURA CHALLENGE BACK-END 5 </br></p>
</p>
</h1>

<h2> O que é esse projeto? </h2>

<p> 
  O Alura challenge back-end edição 5 se trata de uma aplicação de cadastro de videos, onde o usuário cadastrado pode acessar seus videos e de outros usuários de diversas categorias. Na minha versão, construi um banco sqlite através do ORM prisma.
</p>

<div>
  <h2>Ferramentas utilizadas</h2>
  <ul>
    <li>Typescript</li>
    <li>node</li>
    <li>express</li>
    <li>prisma</li>
    <li>jest</li>
    <li>JWT</li>
  </ul>
</div>

<div>
  <h2>Instalação e modo de uso</h2>

  <ol>
    <li>Instale as dependencias com <code>NPM INSTALL</code></li>
    <li>rode a aplicação com o comando <code>NPM RUN START</code></li>
    <li>Cadastre-se na aplicação através da rota /signUp, em seguida gere um JWT logando na rota /signIn</li>
    <li>Passe o JWT no cabeçalho das requisição através do x-access-token</li>
  </ol>

</div>

<div>
  <h2>Rotas</h2>
  <p>Essas são as rotas disponíveis para uso</p>

  <div>
    <h3>POST /signIn</h3>
    <p>gera o JWT para ter acesso as outras rotas. O formato da requisição deve seguir o seguinte padrão:</p>
    <code>
      {
        "username": "example",
        "password": "strongPassword123"
      }
    </code>
  </div>  <br/>

  <div>
    <h3>POST /signUp</h3>
    <p>Cadastra o usuário na plataforma. O formato da requisição deve seguir o seguinte formato:</p>
    <code>
      {
         "username": "example",
        "password": "strongPassword123"
      }
    </code>
  </div> <br/>
  <div>
    <h3>GET /videos/free</h3>
    <p>Disponibiliza os videos sem login</p>
  </div> <br/>

  <div>
    <h3>GET /videos</h3>
    <p>Disponibiliza todos os videos cadastrados (necessário login)</p>
  </div> <br/>

  <div>
    <h3>GET /videos/:id</h3>
    <p>Disponibiliza o video referente ao id (necessário login)</p>
  </div> <br/>

  <div>
    <h3>GET /videos/?search=title</h3>
    <p>Disponibiliza o(s) video(s) referente ao titulo (necessário login)</p>
  </div> <br/>

  <div>
    <h3>GET /videos/?page=0</h3>
    <p>Disponibiliza os videos com paginazação (necessário login)</p>
  </div> <br/>

  <div>
    <h3>POST /videos</h3>
    <p>Registra um novo video no banco de dados (necessário login). A requisição deve seguir o seguinte padrão:</p>
    <code>
      {
        "title": "My video",
        "description": "my description",
        "url": "https://myurl.com/video29939889"
      }
    </code>
  </div> <br/>

  <div>
    <h3>PATCH /videos/:id</h3>
    <p>Edita dados do video pelo seu id (necessário login)</p>

  </div> <br/>

  <div>
    <h3>DELETE /videos/:id</h3>
    <p>deleta o video pelo id (necessário login)</p>
  </div> <br/>
  
  <div>
    <h3>GET /categories</h3>
    <p>disponibiliza todas as categorias</p>
  </div> <br/>

  <div>
    <h3>GET /categories/:id</h3>
    <p>Dispibiliza a categoria referente ao id</p>
  </div> <br/>

  <div>
    <h3>POST /categories</h3>
    <p>Cria uma nova categoria no banco de dados.A requisição deve seguir o seguinte padrão:</p>
    <code>
      {
        "category": "category name",
        "color": "#012182" 
      }
    </code>
  </div> <br/>

  <div>
    <h3>PATCH /categories/:id</h3>
    <p>edita a categoria referente ao id</p>
  </div> <br/>

  <div>
    <h3>DELETE /categories/:id</h3>
    <p>Deleta a categoria pelo id</p>
  </div> <br/>
  
</div>

## Autor

[![LinkedIn Badge](https://img.shields.io/badge/-Thiago%20Fernandes-FF084A?style=flat-square&labelColor=FF084A&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-fernandes-front/)](https://www.linkedin.com/in/thiago-fernandes-front/)
[![Instagram Badge](https://img.shields.io/badge/-@thiagofernandes.dev-FF084A?style=flat-square&labelColor=FF084A&logo=instagram&logoColor=white&link=https://www.instagram.com/thiagofernades.dev/)](https://www.instagram.com/thiagofernades.dev/)
[![Gmail Badge](https://img.shields.io/badge/-thiagojfcarvalho@gmail.com-FF084A?style=flat-square&labelColor=FF084A&logo=gmail&logoColor=white&link=https://www.instagram.com/thiagofernades.dev/)](mailto:thiagojfcarvalho@gmail.com)