import '../styles/Banner.css';

function Banner({children}) {
    return (
        // Soit on fait appel à la className <=> class = "lmj-banner" en vue.js
        <div className = 'lmj-banner'>
            {children}
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