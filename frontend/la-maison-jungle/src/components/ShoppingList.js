import Plants from '../datas/Plants'
import Categories from '../datas/Categories'
import '../styles/App.css';
 

function ShoppingList() {
    return (
        <div> 
            <div>
                {Categories.map((cat) => (
                       <div className='listeDeCategories' key={cat}>
                        <input 
                            type="button"
                            value= {`${cat}`}
                        />
                       </div>
                ))}
            </div>
            {/* <ul>
                {Categories.map((cat) => (
                    <li key = {cat}>
                       {cat}
                </li>))}
            </ul> */}
            <ul>
                {Plants.map((plant) => (
                    <li key = {plant.id}>
                        {plant.name} avec la catégorie {plant.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList;
