// import logo from '../images/logo.svg';
import '../styles/App.css';
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

import logo from '../assets/leaf.png'
import { useState } from 'react'


function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' height = '50px' width = '50px'/>
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <ShoppingList/>
      {/* <QuestionForm/> */}
      <Footer/>
    </div>
    )
}


// function QuestionForm() {
//   const [inputValue, setInputValue] = useState('Posez votre question ici')
//   return (
//       <div className = 'App'>
//           <textarea
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//           />
//       </div>
//   )
// }

export default App

