import '../App.css';

export const Model = ({launch}) => (
  <div className="modal fade" id= {`popup${launch.id}`}
  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="card-title">{launch.mission_name}</h5>       
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div id={`carousel${launch.id}Controls`} 
      class="carousel slide" 
      data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"} 
 class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={launch.links.flickr_images[1] ? launch.links.flickr_images[1] : "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"} 
      class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={launch.links.flickr_images[2] ? launch.links.flickr_images[2] : "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"} 
      class="d-block w-100" alt="..."/>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={`#carousel${launch.id}Controls`} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target= {`#carousel${launch.id}Controls`} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container">
  <div class="row row-cols-2 row-cols-lg-3">
    <div class="col">
      <h5> Mission ID </h5>
      <p> {launch.mission_id ? launch.mission_id : "pas de id" } </p>
      </div>
    <div class="col">
    <h5> Date et Heure de lancement </h5>
      <p> {launch.launch_date_utc} </p>
      </div>
    <div class="col">
    <h5> Site de lancement  </h5>
      <p>{launch.launch_site.site_name_long}</p>
    </div>
    <div class="col">
    <h5> Succes du lancement  </h5>
      <p> {launch.launch_success ? 'Oui' : 'Non'} </p>
      </div>
    <div class="col">
    <h5> Nom de Fusée et version </h5>
      <p> {launch.rocket.rocket_name}  {launch.rocket.rocket_type}  </p>
      </div>
    <div class="col">
    <h5> First Stage </h5>
    
<p> #launch.rocket.first_stage.cores[0]
  <br/>.core.missions[0].name </p>
  <h5> Display None  </h5>
<p> #launch.rocket.first_stage.cores[0].
<br/>core.missions[0].figth </p>

      </div>
    
    
    
    
    
    
  </div>
</div>
<div class= "text-center">
  <div>
    <h5>
      Details 
    </h5>
    <p> {launch.details}</p>
      
  </div>
  <div >
  <a href= {launch.links.video_link} target="_blank" 
>
    <button id="droite" type="button" class="btn btn-danger">Video lancement </button>
  </a> 
  <a href= {launch.links.wikipedia} target="_blank" 
>
    <button id="centre" type="button" class="btn btn-primary">Wikipedia</button>
  </a> 

  <a href= {launch.links.presskit} target="_blank" 
>
    <button id="gauche" type="button" class="btn btn-primary">PressKit</button>
  </a> 
  </div>
  </div>
  </div>
      
    </div>
  </div>
</div>
);