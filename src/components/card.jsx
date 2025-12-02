import s from './card.module.css'


export const Card = ({image, name, species}) => {
    return(
        <div className={s.wrapCard}>
            <img className={s.roundImg} src={image} alt={name} />
            <h2 className={s.nome}>{name}</h2>
            <p className={s.text}>{species}</p>
        </div>
    )
}