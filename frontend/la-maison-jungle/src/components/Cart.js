import '../styles/App.css';
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
       const [isOpen, setIsOpen] = useState(true);
       const total = cart.reduce((acc,element) => 
              acc + element.amount * element.price,0
       )
       // useEffect(() => {alert(`J'aurai ${total}€ à payer 💸`)},[total]);
       useEffect(() => {
              document.title = `LMJ: ${total}€ d'achats`
          }, [total])
       return isOpen ? (
              <div className='lmj-cart'>
                     <div className = 'App'>
                            <button onClick={() => setIsOpen(false)}>Fermer</button>

                            <h2>Panier</h2>
                     </div>
                     {cart.map(({name,price,amount},index) => (
                            <div 
                                   className = 'App'
                                   key= {`${name}-${index}`}
                            >
                                   <b>{amount}</b> {name} à {price}€
                            </div>
                     ))}
                     <div className = 'App'>
                     <h3>Total : {total}€</h3>
                     </div>
                     <div className='App'>
                            <button 
                                   onClick={() => updateCart([])}>Vider le panier
                            </button>
                     </div>
              </div>
       ): 
       <div>
              <div className = 'App'>
                     <button 
                            className='lmj-cart'
                            onClick={() => setIsOpen(true)}>Ouvrir le Panier
                     </button>
              </div>
       </div>
}

export default Cart;