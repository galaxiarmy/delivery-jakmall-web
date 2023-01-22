import styles from './BackToTitle.module.css'
import IconBack from '../../assets/icons/icons8-left.png'

const BackToTitle = ({onClick , type}: any) => {
  return (
    <div onClick={onClick} className={styles.container_back}>
        <img width={16} height={16} src={IconBack} alt="icon-back" />
        <p className={styles.title}>{type == "delivery" ? "Back to cart" : type == "payment" ? "Back to delivery" : "Go to homepage"}</p>
    </div>
  )
}

export default BackToTitle