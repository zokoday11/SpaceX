import './App.css';
import { Component, Fragment } from 'react';
import { Card } from './composants/Card';
import { Model } from './composants/Model';
import { Filtre } from './composants/Filtre';




class App extends Component {
  
constructor () {
  super();

this.state = {
launches: [],
seletedHeight  : 2020,
Chercher :''
};


}

componentDidMount () {
  fetch ("https://api.spacex.land/rest/launches")
   .then((response) => response.json())
   .then (launches => this.setState({launches:launches}))
   const {launches,seletedHeight} = this.state;
    console.log(launches)

}
handleChange = (e) => {
  this.setState({seletedHeight: e.target.value});

}




  render() {
    const {launches,seletedHeight} = this.state;
    const filteredlaunches = launches.filter ((launch) =>
    launch.launch_year   == seletedHeight 
     
    );


{
  
}




    

    

 
  return (
<div className="container">
  

    
        

<h1> Les lancements de Space X </h1>
<Filtre onChange={this.handleChange} />
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


export default App;
