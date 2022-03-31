import Plants from '../datas/Plants'
import {Categories} from '../datas/Extensions'
import '../styles/App.css';
import PlantItem from '../datas/PlantItem';


function ShoppingList() {
    return (
        <div> 
            <div className = 'wrapper'>
                {Categories.map((cat) => (
                       <div className='listeDeCategories'>
                        <input 
                            type="button"
                            value= {cat}
                        />
                       </div>
                ))}
            </div>
            <ul className = 'wrapper2'>
                {Plants.map(({id,category,cover,name,water,light}) => (
                    <PlantItem
                        id = {id}
                        category = {category}
                        cover = {cover} 
                        name = {name} 
                        water = {water}
                        light = {light} 
                    />
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;
