import CareScale from '../components/Carescale';
import '../styles/App.css';
import logo from '../assets/leaf.png';

function PlantItem({id, category, cover, name, water, light}) {
    return (
        <div className = 'padding'>
            <img src={logo} alt='La maison jungle' height = '50px' width = '50px'/>
            <br></br>
            <b>{name}</b> de cat: {category}
            <div>
                <CareScale careType='light' scaleValue={light} />    
                <CareScale careType='water' scaleValue={water} />   
            </div>                
        </div>
    )
}
    
export default PlantItem;