// import logo from '../images/logo.svg';
import '../styles/App.css';
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import logo from '../assets/leaf.png'

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' height = '50px' width = '50px'/>
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <ShoppingList/>
    </div>
    )
}

export default App

