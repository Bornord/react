import CareScale from '../components/Carescale';
import '../styles/App.css';

function PlantItem({id, category, cover, name, water, light}) {
    return (
        <div className = 'padding'>
            <img src={cover} alt='La maison jungle' height = '200px' width = '200px'/>
            <br></br>
            <b>{name}</b>
            <div className= 'contour'>
                {category}
            </div>
            <div className='gauche'>
                <CareScale careType='light' scaleValue={light} />    
                <CareScale careType='water' scaleValue={water} />   
            </div>                
        </div>
    )
}
    

export default PlantItem;