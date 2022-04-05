export const Card = (prop) => (
<div className="col-sm-4">
             <div className="card " key={prop.launch.id} >
           <img src= {prop.launch.links.mission_patch ? prop.launch.links.mission_patch :"https://www.nasa.gov/sites/default/files/thumbnails/image/edu_ncas_2018_patch_final-320.png"} className="card-img-top" alt="..."/>
           <h5 className="card-title1">{prop.launch.mission_name}</h5>

                 <div className="card-body">
    <h5 className="card-title">{prop.launch.name}</h5>
    <p className="card-text">{prop.launch.mission_name}</p>
   
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${prop.launch.id}`}>
Voir plus
</button>

  
         </div>
      </div>
    </div>
    

);