import s from './card.module.css'


function Card({image, name, house}){
    return(
        <div className={s.wrapCard}>
            {image ? <img className={s.roundImg} src={image} alt={name} /> : "Sem imagem"}
            <h2 className={s.nome}>{name}</h2>
            <p className={s.text}>{house}</p>
        </div>
    )
}

export default Card