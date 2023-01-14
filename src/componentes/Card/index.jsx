import './style.css';

function Card(props){
    return(
        <div className='card'>
            <div className='data'>
                {props.data}
            </div>
            <div className='empresa'>
                {props.empresa}
            </div>
            <div className='tipo'>
                {props.tipo}
            </div>
            <div className='descricao'>
                {props.descricao}
            </div>
        </div>
    );
}

export default Card;