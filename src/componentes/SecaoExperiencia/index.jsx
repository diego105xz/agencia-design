import './style.css';

import Card from '../Card';

function SecaoExperiencia(){
    return(
        <section className='secao-exp'>
            <h2>
                Experiências deTrabalho
                <div className='linha'></div>
            </h2>
            <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
            Sites e Marketing Digital, nos empenhamos diariamente para entregar
            resultados que tragam impacto aos nossos clientes.</p>
            <div className='colecao-cards'>
                <Card 
                data="JUNHO 2012 - 2016"
                empresa="Web Designer"
                tipo="Pied piper StartUp"
                descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores."
                />
                <Card 
                data="AGOSTO 2016 - 2019"
                empresa="Product Designer"
                tipo="E Corp."
                descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."
                />
                <Card 
                data="FEVEREIRO 2019 - 2021"
                empresa="Digital Consulting"
                tipo="Arasaka Inc."
                descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução."
                />
            </div>
        </section>
    );
}

export default SecaoExperiencia;