import '../styles/Banner.css';
import logo from '../assets/leaf.png'

function Banner() {
    const title = 'La maison jungle';
    return (
        // Soit on fait appel à la className <=> class = "lmj-banner" en vue.js
        <div >
            <img 
                src = {logo} 
                alt = 'La maison jungle' 
                className = 'lmj-logo'
            />
            <h1 className = 'lmj-title'>{title}</h1>
        </div>

        // Soit on définit "à la volée le css associé"
        // Solution temporaire pour test PUIS l'insérer dans un fichier séparé pour modularité et ré-utilisation
        // <h1 style={{
        //     color: 'black',
        //     textAlign: 'right',
        //     padding: 32,
        //     borderBottom: 'solid 3px black',
        // }}> 

    );
}

export default Banner