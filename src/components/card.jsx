import s from './card.module.css'


export const Card = ({image, name, house}) => {
    return(
        <div className={s.wrapCard}>
            {image ? <img className={s.roundImg} src={image} alt={name} /> : "Sem imagem"}
            <h2 className={s.nome}>{name}</h2>
            <p className={s.text}>{house}</p>
        </div>
    )
}