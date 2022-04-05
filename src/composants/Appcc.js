import '../App.css';
import { Component, Fragment } from 'react';
import { Card } from './Card';
import { Model } from './Model';














class Appcc extends Component {
  
constructor () {
  super();

this.state = {
launches: [],
seletedHeight  : "CRS-21" ,
Chercher :''
};


}

componentDidMount () {
  fetch ("https://api.spacex.land/rest/launches")
   .then((response) => response.json())
   .then (launches => this.setState({launches:launches}))
}
handleChange = (e) => {
  this.setState({seletedHeight: e.target.value});

}




  render() {
    const {launches,seletedHeight} = this.state;
    const filteredlaunches = launches.filter ((launch) =>
    launch.mission_name   == seletedHeight  );
    


{
  
}




    

    

 
  return (
<div className="container">
  

    
        

     <div className='row'>
     
      {filteredlaunches.map((launch) => (
        <Fragment>
          
        <Card launch={launch} />
        <Model launch={launch}/>

       </Fragment>
            
      


        
      ))}
    </div>

    </div>
    
  );
}
 }


export default Appcc;
