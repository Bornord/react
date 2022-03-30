import Plants from '../datas/Plants'
import {Categories,BestSales} from '../datas/Extensions'
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
            <ul>
                {Plants.map((plant) => (
                    <li key = {plant.id}>
                        <b>
                            {plant.name}

                        </b> avec la catégorie
                        <b>
                            {plant.category}
                        </b>
                        {plant.isBestSale && <span> 🤩 </span> }
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;
