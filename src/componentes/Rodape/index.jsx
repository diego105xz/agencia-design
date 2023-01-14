import './style.css';

import logo from '../../assets/logo.png';
import face from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import be from '../../assets/behance.png';
import google from '../../assets/google-plus.png';

function Rodape(){
    return(
        <footer>
            <img src={logo} alt="logo" className="logo-img"/>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
            </p>
            <div>
                <img src={face} alt='logo' className='redes'/>
                <img src={twitter} alt='logo' className='redes'/>
                <img src={linkedin} alt='logo' className='redes'/>
                <img src={dribble} alt='logo' className='redes'/>
                <img src={be} alt='logo' className='redes'/>
                <img src={google} alt='logo' className='redes'/>
            </div>
            <p>Copyright 2022 © <span>Diego Melo</span></p>
        </footer>
    );
}

export default Rodape;