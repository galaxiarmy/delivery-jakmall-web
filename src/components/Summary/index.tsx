import { numberWithCommas } from '../../helper/general';
import styles from './summary.module.css'

const Summary = ({type, onSubmit, isDropshipper, selectedShipment, selectedPayment}: any) => {

    const priceShipment = Object.keys(selectedShipment).length > 0 ? selectedShipment.price : 0
    const priceDropshipper = isDropshipper ? 5900 : 0;

    const totalPrice = 500000 + priceShipment +  priceDropshipper;
  return (
    <div className={styles.container_summary}>
        <div className={styles.container_header}>
        <h2 className={styles.header_title}>Summary</h2>
        <p className={styles.title_summary}>10 Items Purchase</p>
        {
            Object.keys(selectedShipment).length > 0 && 
            <div>
            <p className={styles.title_delivery}>Delivery Estimation</p>
            <p className={styles.description_method}>{selectedShipment.method}</p>
             </div>
        }

        {
            Object.keys(selectedPayment).length > 0 && 
            <div>
            <p className={styles.title_delivery}>Payment Method</p>
            <p className={styles.description_method}>{numberWithCommas(selectedPayment.method)}</p>
            </div>
        }
        </div>
   

        <div className={styles.content_summary}>
            <p className={styles.title_summary}>Cost of goods</p>
            <p className={styles.description_summary}>500,000</p>
        </div>
        {isDropshipper &&
        <div className={styles.content_summary}>
            <p className={styles.title_summary}>Dropshipping Fee</p>
            <p className={styles.description_summary}>5,900</p>
        </div>
        }
        <div className={styles.content_summary}>
            <p className={styles.title_total}>Total</p>
            <p className={styles.title_total}>{numberWithCommas(totalPrice)}</p>
        </div>
        {type !== "finish" &&
        <div onClick={onSubmit} className={styles.button_payment}>
            <p>{type == "delivery" ? "Continue To Payment" : "Pay With E-Wallet"}</p>
        </div>
        }
    </div>
  )
}

export default Summary