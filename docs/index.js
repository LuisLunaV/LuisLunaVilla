const seccciones = document.querySelector('#projects');

const crearHtml =()=>{
    const html = ` <h2 class="display-4">Estos son algunos proyectos realizados</h2>
    
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    
    <div class="img-proyects carousel-inner">
    
        <div class="project project-tile carousel-item active">
          <a href="https://luislunav.github.io/Cafe-Mexico/" class="d-block w-100" target="_blank">  
              <img src="https://res.cloudinary.com/luisluna1991/image/upload/v1635323383/zjosgnro0uxolbybt0g0.jpg" class="d-block w-100" alt="img-cafe-mexico">
              <p><span class="code">&lt;</span>Café México<span class="code">&#47;&gt;</span></p>
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
    
    if(screen.width <= 530){   
        do{
            seccciones.removeChild(seccciones.firstElementChild);
            }while(seccciones.firstElementChild)
            
            (seccciones.firstElementChild === true)?
            ''
            :
            crearHtml()
            
    }