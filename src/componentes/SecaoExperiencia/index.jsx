import './style.css';

function SecaoExperiencia(props){
    return(
        <section className= {props.ehTemaDark ? 'secao-exp-dark' :'secao-exp-light'}>
            <h2 className= {props.ehTemaDark ? 'titulo-exp-dark' :'titulo-exp-light'}>
                Experiências de Trabalho
                <div className='linha'></div>
            </h2>
            <p className = {props.ehTemaDark ? 'desc-dark' : 'desc-light'}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
            Sites e Marketing Digital, nos empenhamos diariamente para entregar
            resultados que tragam impacto aos nossos clientes.</p>
            <div className='colecao-cards'>
                <div className = {props.ehTemaDark ? 'card-dark' : 'card-light'}>

                    <p className={props.ehTemaDark ?'data-dark':'data-light'}>JUNHO 2012 - 2016</p>

                    <h4 className={props.ehTemaDark?'empresa-dark':'empresa-light'}>Web Designer</h4>

                    <p className={props.ehTemaDark?'tipo-dark':'tipo-light'}>Pied Piper StartUp.</p>

                    <p className={props.ehTemaDark?'descricao-dark':'descricao-light'}>
                        Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores.
                    </p>
                </div>

                <div className = {props.ehTemaDark ? 'card-dark' : 'card-light'}>

                    <p className={props.ehTemaDark ?'data-dark':'data-light'}>AGOSTO 2016 - 2019</p>

                    <h4 className={props.ehTemaDark?'empresa-dark':'empresa-light'}>Product Designer</h4>

                    <p className={props.ehTemaDark?'tipo-dark':'tipo-light'}>E Corp.</p>

                    <p className={props.ehTemaDark?'descricao-dark':'descricao-light'}>
                        Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra.
                    </p>
                </div>

                <div className = {props.ehTemaDark ? 'card-dark' : 'card-light'}>

                    <p className={props.ehTemaDark ?'data-dark':'data-light'}>FEVEREIRO 2019 - 2021</p>

                    <h4 className={props.ehTemaDark?'empresa-dark':'empresa-light'}>Digital Consulting</h4>

                    <p className={props.ehTemaDark?'tipo-dark':'tipo-light'}>Arasaka Inc.</p>

                    <p className={props.ehTemaDark?'descricao-dark':'descricao-light'}>
                        Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SecaoExperiencia;