import React from 'react';
import logo from './logo.svg';
//import 'bootstrap/dist/css/boostrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

const Data =[
  {
    senderId: "Arthur",
    text: "aaaaa"
  },
  {
    senderId: "Jean",
    text: "bbbbb"
  }

]

// class App extends React.Component
// {
  
//   constructor()
//   {
//     super()
//     this.state = {
//       messages: Data
//     }
//   }
//   render()
//   {
//     return(
//       <div>
//           <Title/>
//           <MessageList messages={this.state.messages}/>
//           <MessageForm/>
//           <NavBar/>
//       </div>
//     );
//   } 
// }
const App = () => {
  return (
    // <div>
    //   <Title/>
      
    //   <MessageForm/>
    //   <NavBar/>
    // </div>
    <BrowserRouter>
      <Route exact path='/' component={Register} />
      <Route exact path='/login'component={Login}/>
      
      <Route exact path='/register' component={Register}></Route>
    </BrowserRouter>
    
  )
}

export default App;