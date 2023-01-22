import { generateId } from '../../helper/general'
import BackToTitle from '../BackToTitle'
import styles from './Finish.module.css'
const Finish = ({onClick, selectedShipment, type}: any) => {
  return (
    <div className={styles.container_finish}>
        <div>
        <h1 className={styles.header_title}>Thank you</h1>
        <p className={styles.order_id_title}>Order ID: {generateId(5)}</p>
        <p className={styles.order_shipment_title}>Your order will be delivered {selectedShipment.duration} with  {selectedShipment.method}</p>
        <div className={styles.title_homepage}>
        <BackToTitle onClick={onClick} type={type} />
        </div>
        </div>
    </div>
  )
}

export default Finish
