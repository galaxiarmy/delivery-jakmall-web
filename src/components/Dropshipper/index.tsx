import { validationPhone } from '../../helper/general';
import styles from './Dropshipper.module.css'

const Droshipper = ({
    dropshipperName,
    dropshipperPhone,
    isDropshipper,
    onChangeIsDropshipper,
    onChangeDropshipperName,
    onChangeDropshipperPhone,
}: any) => {

  return (
    <div className={styles.container_dropshipper_details}>
            <div className={styles.information_dropshipper}>
            <div className={styles.container_checkbox}>
            <input type='checkbox' value={isDropshipper} onChange={onChangeIsDropshipper} />
            <div style={{ display: "flex", alignItems: "center"}}>
            <p>Send as dropshipper</p>
            </div>
           </div>
            {
                isDropshipper &&
                <div className={styles.container_dropshipper}>
                <div>
                    <input value={dropshipperName} onChange={onChangeDropshipperName} className={dropshipperName == "" ? styles.inputTextDefault :   styles.inputTextValid} placeholder='Droshipper Name' required />
                </div>
                <div>
                    <input type='phone' value={dropshipperPhone} onChange={onChangeDropshipperPhone} className={dropshipperPhone == "" ? styles.inputTextDefault : validationPhone(dropshipperPhone) ? styles.inputTextValid : styles.inputTextInvalid}  placeholder='Dropshipper phone number' required  />
                </div>
              
                </div>
    
            }
            </div>
      
        </div>
  )
}

export default Droshipper;