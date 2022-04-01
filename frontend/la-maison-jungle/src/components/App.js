// import logo from '../images/logo.svg';
import '../styles/App.css';
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import Cart from './Cart'

import logo from '../assets/leaf.png'
import { useState, useEffect} from 'react'

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' height = '50px' width = '50px'/>
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className= 'separation'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
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

