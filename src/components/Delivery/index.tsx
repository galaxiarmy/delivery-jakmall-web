import { validationEmail, validationPhone } from '../../helper/general';
import styles from './Delivery.module.css'
const Delivery = ({
    email,
    phone,
    deliveryAddress,
    onChangeEmail,
    onChangePhone,
    onChangeDeliveryAddress,
    count
}: any) => {



  return (
    <div className={styles.container_delivery_details}>
            <div className={styles.information_delivery}>
                <h1 className={styles.header_title}>Delivery Details</h1>
                <div>
                <input value={email} onChange={onChangeEmail} className={email == "" ? styles.inputTextDefault : validationEmail(email) == true ? styles.inputTextValid : styles.inputTextInvalid} placeholder='Email' required  />
                </div>
                <div>
                <input type='phone' value={phone} onChange={onChangePhone} className={phone == "" ? styles.inputTextDefault : validationPhone(phone) ? styles.inputTextValid : styles.inputTextInvalid}  placeholder='Phone Number' required  />
                </div>
                <div>
                <textarea style={{resize: "none"}} value={deliveryAddress} onChange={onChangeDeliveryAddress} className={deliveryAddress == "" ? styles.inputTextDefault : deliveryAddress.length <= 200 ? styles.inputTextValid : styles.inputTextInvalid} placeholder='Delivery Address'/>
                <p className={count > 200 ? styles.word_count_warning : styles.word_count}>{count}/200</p>
                </div>
            </div>
      
    </div>
  )
}

export default Delivery;