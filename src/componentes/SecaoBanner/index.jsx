import './style.css';

import banner from '../../assets/banner.png';

function SecaoBanner(props){   

    return(
        <section className='secao-banner'>
            <div className={props.ehTemaDark ? 'banner-tema-dark':'banner-tema-light'}>
                <img src={banner} alt="banner" className='img-banner'/>
            </div>
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