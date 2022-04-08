import '../styles/App.css';
import { useState } from 'react'

function Footer() {
    const [inputValue, setInputValue] = useState('paul.durant@gmail.com')
    return (
       <div className = "ecart">
              <div>
                     <h2> Pour les passionnés de plantes 🌿🌲</h2>
              </div>
              <div>
                     <h2> Laissez-nous votre e-mail</h2>
              </div>
              <div>
                     <input
                            size="30"
                            className = "button"
                            id='1'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}  
                     />
                     <input
                            id="2"
                            type='button'
                            value='Envoyer'
                            onClick= {envoyer}
                     />
              </div>
       </div>
    )
}

function envoyer() {
       const mail = document.getElementById('1').value;
       const contienta = mail.indexOf("@");
       const contientp = mail.indexOf(".");
       if (mail ==='paul.durant@gmail.com') {
              // rien
       } else {
              if (contienta !== -1 && contientp !== -1) {
                     alert("Votre inscription est validée ✅" + "\n" +mail);
                     document.getElementById('1').value = ''
              } else {
                     alert("Désolé, ce mail n'a pas l'air d'être valide. ❌" + "\n" + "Il doit être du type: " + "\n" + "paul.durant@gmail.com")
              }
       }
}

export default Footer;