const seccciones = document.querySelector('#projects'),
      navMenu    = document.querySelector('nav');


const crearHtml =()=>{
    const html = ` <h2 class="display-4">Estos son algunos proyectos realizados</h2>
    
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    
    <div class="img-proyects carousel-inner">
    
        <div class="project project-tile carousel-item active">
        <a href="https://luislunav.github.io/PokedexApi/" class="d-block w-100" target="_blank">  
        <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1642313432/m6w7kqyjeykgnace1rok.jpg" class="d-block w-100" alt="img-Pokedex">
        <p><span class="code">&lt;</span>Pokedex<span class="code">&#47;&gt;</span></p>
      </a>
        </div>
    
        <div class="project project-tile carousel-item">
            <a href="https://luislunav.github.io/ApiClima/" class="d-block w-100" target="_blank">
            <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1635323446/xd5s26up8vcqfes56bcd.jpg" class="d-block w-100" alt="img-api-clima">
            <p><span class="code">&lt;</span>Clima<span class="code">&#47;&gt;</span></p>
        </a>
        </div>
    
        <div class="project project-tile carousel-item">
        <a href="https://luislunav.github.io/Lista-de-tareas/" class="d-block w-100" target="_blank">
        <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1639290770/lji86y7t45v6fekr2p08.jpg" alt="img-pagina-lista">
        <p><span class="code">&lt;</span>Lista de tareas<span class="code">&#47;&gt;</span></p>
    </a>
    </div>
    
        <div class="project project-tile carousel-item">
          <a href="https://luislunav.github.io/Juego-piedra-papel/" class="d-block w-100" target="_blank">
          <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1636781552/tslkrloumheomqxij74i.jpg" class="d-block w-100" alt="img-piedra-papel-tijera">
          <p><span class="code">&lt;</span>Piedra-Papel-Tijera<span class="code">&#47;&gt;</span></p>
      </a>
      </div>

      <div class="project project-tile carousel-item">
            <a href="https://luislunav.github.io/Formulario-CRUD/" class="d-block w-100 target="_blank">
            <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1641193232/f0brdcjkq00bw58zm8th.jpg" class="d-block w-100" alt="img-sistema-crud">
            <p><span class="code">&lt;</span>Demo-CRUD<span class="code">&#47;&gt;</span></p>
        </a>
        </div>

        <div class="project project-tile carousel-item">
          <a href="https://luislunav.github.io/RickApi/" class="d-block w-100 target="_blank">
          <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1642309746/gjbjio4ye93fi8ifjub6.jpg" class="d-block w-100" alt="img-rick-morty">
          <p><span class="code">&lt;</span>Rick and morty<span class="code">&#47;&gt;</span></p>
      </a>
      </div>
    
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;
    
    seccciones.innerHTML = html;
    };

    const crearBurgerHtml =()=>{
      const menuHtml = `
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bars fa-lg"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item" href="#welcome-section"><i class="fas fa-home"></i> Inicio</a></li>
          <li><a class="dropdown-item" href="#sobre-mi"><i class="fas fa-address-card"></i> Sobre mi</a></li>
          <li><a class="dropdown-item" href="#tecnologias"> <i class="fas fa-tools"></i> Tecnologias</a></li>
          <li><a class="dropdown-item" href="#projects"><i class="fas fa-list"></i> Proyectos</a></li>
          <li><a class="dropdown-item" href="#contact"><i class="fas fa-mail-bulk"></i> Contacto</a></li>
        </ul>
      </div> `;

      navMenu.innerHTML = menuHtml;

    };
    
    if(screen.width <= 559){
        do{
            seccciones.removeChild(seccciones.firstElementChild);
            }while(seccciones.firstElementChild)
      
            navMenu.removeAttribute('id')
            navMenu.removeChild(navMenu.firstElementChild);

            (seccciones.firstElementChild === true)? '' : crearHtml();
            navMenu.classList.add('navbar','navbar-expand-sm','navbar-dark','bg-dark','burger');
            (navMenu.firstElementChild === true)? '' : crearBurgerHtml();
            
    }