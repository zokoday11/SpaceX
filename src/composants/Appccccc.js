import '../App.css';
import { Component, Fragment } from 'react';
import { Card } from './Card';
import { Model } from './Model';














class Appccccc extends Component {
  
constructor () {
  super();

this.state = {
launches: [],
seletedHeight  : "Crew-1" ,
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
<div >
  

    
        

     
      {filteredlaunches.map((launch) => (
        <Fragment>
          
        <Card launch={launch} />
        <Model launch={launch}/>

       </Fragment>
            
      


        
      ))}
    </div>

    
  );
}
 }


export default Appccccc;
