import styles from './stepper.module.css'
import IconChevron from '../../assets/icons/icons8-chevron-right.png'

const Stepper = ({type} : any) => {
   
    
    return (
    <div className={styles.container_stepper}>
        <div className={styles.stepper_body}>
            <div className={styles.number_circle}>
                <p>1</p>
            </div>
            <p className={styles.title_stepper}>Delivery</p>
        </div>
        <div className={styles.icon_stepper}>
            <img alt='chevron' width={20} height={20} src={IconChevron} ></img>
        </div>
        <div className={styles.stepper_body}>
             <div className={type == "payment" || type == "finish" ? styles.number_circle : styles.number_circle_inactive}>
                <p>2</p>
            </div>
            <p className={styles.title_stepper}>Payment</p>
        </div>
        <div className={styles.icon_stepper}>
            <img alt='chevron' width={20} height={20} src={IconChevron} ></img>
        </div>        
        <div className={styles.stepper_body}>   
        <div className={type == "finish" ? styles.number_circle : styles.number_circle_inactive}>
            <p>3</p>
            </div>
            <p className={styles.title_stepper}>Finish</p>
            
        </div>
    </div>
  )
}

export default Stepper
