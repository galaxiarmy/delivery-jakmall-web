import styles from './Payment.module.css'
const Payment = ({
    paymentMethod, 
    shipmentMethod, 
    selectedShipment, 
    setSelectedShipment, 
    selectedPayment, 
    setSelectedPayment}: any) => {

  return (
    <div className={styles.container_payment}>
        <div>
            <h1 className={styles.header_title}>
                Shipment
            </h1>
            <div className={styles.container_method}>
            {
                shipmentMethod.length > 0 && shipmentMethod.map((value:any) => {
                    return (
                        <div onClick={() => setSelectedShipment(value)} className={selectedShipment.id == value.id ? styles.box_method : styles.box_method_unselected} key={value.id}>
                           <div>
                            <p className={styles.title_method}>{value.method}</p>
                            <p className={styles.title_price}>{value.price}</p>
                            </div>
                        </div>
                    )
                })

            }
            </div>

        </div>
        <div>
            <h1 className={styles.header_title}>
                Payment
            </h1>
            <div className={styles.container_method}>
            {
                paymentMethod.length > 0 && paymentMethod.map((value:any) => {
                    return (
                        <div onClick={() => setSelectedPayment(value)} className={selectedPayment.id == value.id ? styles.box_method : styles.box_method_unselected} key={value.id}>
                            <p className={styles.title_method}>{value.method}</p>
                        </div>
                    )
                })

            }
            </div>
        </div>
    </div>
  )
}

export default Payment