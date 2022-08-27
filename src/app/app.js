import React, { Component } from "react";

const URL = "http://localhost:3000/api/";
class App extends Component {


  render() {
    return (
      <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
              <div class="container">
                <a class="navbar-brand fw-bold fst-italic" href="">FerBaeza</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
              </div>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="">Home</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="container">
              <div class="row m-auto mt-5">

                <div class="col-md-4 m-auto mt-5">
                    <img src="./img/foto.jpg" width="480px" height="600px" className="perfilImg"/>
                </div>
                  <div class="col-md-6 m-auto mt-5">
                      <h1 class="">Fernando Baeza</h1>
                      <h3 class="">Desarrollador Web</h3>
                      <p>
                        Soy un Desarrollador Web Junior ubicado en Alicante.
                        Busco poder unirme a un equipo donde seguir creciendo y convertirme en un 
                        Desarrollador Senior aportando el maximo en mi dia a dia.</p>                        
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora perspiciatis molestias iusto ducimus
                        soluta mollitia ratione, fuga praesentium, reiciendis minima! Facere, veniam! Omnis, quod molestias quo fugit enim
                        vero vitae, cumque tenetur at, impedit provident dicta laudantium quia facilis consequuntur blanditiis iste
                        laborum voluptatibus libero doloribus? Pariatur voluptatem obcaecati deserunt aperiam exercitationem nam voluptas
                        rerum reprehenderit minima, earum impedit saepe eos ducimus fugit itaque a nulla omnis architecto laudantium
                        blanditiis? Eius ipsum quidem enim architecto fugiat porro inventore libero praesentium aperiam nulla
                        exercitationem nemo soluta, culpa impedit est et doloribus ut necessitatibus odit, dicta voluptate! Vero ab nulla
                        placeat.
                      </p>      
                          <a href="./docs/cv.pdf" class="btn btn-primary btn-lg rounded3" target="_blank">Descargar CV</a>
                      </div>
                  </div>
            </div>
      
          <div class="row my-4 text-center mt-5">
              <h3 class="mt-5">My Projects</h3>
              <p>Here I will display all my projects </p>
                <div className="container">

                  <div class="col-md-4 p-4">
                    <div class="card bg-black card-project">
                      <img src="./img/Compressedkate_upton-wallpaper-1920x1080.jpg" class="card-img-top" height="215px" />
                
                      <div class="card-body bg-black">
                
                        <h2 class="text-light bg-black"></h2>
                        <p class="text-secondary"></p>
                
                        <a href="" class="btn btn-light rounded-2 btn-sm" target="__blank" rel="noreferrer">Visit the
                          Project</a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>







      </>

    );
  }
}

export default App;
