import Plants from '../datas/Plants'
import {Categories} from '../datas/Extensions'
import CareScale from './Carescale'
import '../styles/App.css';


function ShoppingList() {
    return (
        <div> 
            <div className = 'wrapper'>
                {Categories.map((cat) => (
                       <div className='listeDeCategories' key={cat}>
                        <input 
                            type="button"
                            value= {`${cat}`}
                        />
                       </div>
                ))}
            </div>
            <ul className = 'wrapper2'>
                {Plants.map((plant) => (
                    <div>
                        <li key = {plant.id}>
                            <b>
                                {plant.name}
                            </b>
                            <b>
                                {plant.category}
                            </b>
                            {plant.isBestSale && <span> 🤩 </span> }
                            <CareScale careType='light' scaleValue={plant.light} />    
                            <CareScale careType='water' scaleValue={plant.water} />                   
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;
