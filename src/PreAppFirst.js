import PreAppSecond from './PreAppSecond';
import {Route,Switch} from 'react-router-dom'
import Register from './CommonApps/Register';
import BookAdmin from './BookAdmin/BookAdmin';
import JitsiVideo from './VideoPlayer/Jitsimeet/JitsiVideo';


const PreAppFirst=()=>{



return (

<div>

<Switch>

   <Route exact path='/createaccount/' >
        <Register/>
   </Route>


   <Route exact path='/bookadmin/' >
        <BookAdmin/>
   </Route>


   <Route  path='/video/' >
        <JitsiVideo/>
   </Route>




   
   <Route  path='/' >
        <PreAppSecond/>
   </Route>	
   



</Switch>




</div>
);
}

export default PreAppFirst;
