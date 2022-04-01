import Plants from '../datas/Plants'
import {Categories} from '../datas/Extensions'
import '../styles/App.css';
import PlantItem from '../datas/PlantItem';
import { useState} from 'react'



function ShoppingList({cart,updateCart}) {
    let [activeChoice,updateChoice] = useState('Extérieur');

    function load(e) {
        updateChoice(e.target.value);
    }

    function addToCart(name,price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name);
        if (currentPlantAdded) {
            const cartFilteredCurrentPant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPant,
                {name,price,amount: currentPlantAdded.amount+1}
            ])
        } else {
            updateCart([...cart, {name,price,amount: 1}])
        }
    }

    
    return (
        <div> 
            {/* <div className = 'wrapper'>
                {Categories.map((cat) => (
                       <div className='listeDeCategories'>
                        <input 
                            type="button"
                            value= {cat}
                        />
                       </div>
                ))} */}
                <div className = 'App'>
                    <select onChange={e=> load(e)} name="categories" id="cat-select">
                        <option value=''>---</option>
                        {Categories.map((cat) => (
                            <option value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            {/* </div> */}
            <ul className = 'wrapper2'>
                {Plants.map(({id,category,cover,name,water,light,price}) => 
                    activeChoice === '' || activeChoice === category ?
                    // TENTER AVEC SCHEMA REDUCE
                        (<div key={id}>
                            <PlantItem
                                id = {id}
                                category = {category}
                                cover = {cover} 
                                name = {name} 
                                water = {water}
                                light = {light} 
                            />
                            <button 
                                onClick={() => addToCart(name,price)}
                            >
                                Ajouter
                            </button>
                        </div>
                ): null
                )}
            </ul>
        </div>
    )
}


export default ShoppingList;
