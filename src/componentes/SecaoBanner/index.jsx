import './style.css';

import banner from '../../assets/banner.png';

function SecaoBanner(){
    return(
        <section className='secao-banner'>
            <img src={banner} alt="banner" className='img-banner'/>
            <div className='banner-conteudo'>
                <div>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h1>Agência de Branding</h1>
                    <span>e design digital</span>
                </div>
            </div>
        </section>
    );
}

export default SecaoBanner;