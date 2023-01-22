
import { useEffect, useState } from 'react';
import BackToTitle from '../components/BackToTitle';
import Delivery from '../components/Delivery';
import Payment from '../components/Payment';
import Stepper from '../components/Stepper';
import Summary from '../components/Summary';
import styles from '../styles/DeliveryOrder.module.css'
import shipmentData from '../helper/shipment_method.json';
import paymentData from '../helper/payment_method.json';
import Finish from '../components/Finish';
import { validationEmail, validationPhone } from '../helper/general';
import Droshipper from '../components/Dropshipper';


const  DeliveryOrder = () => {
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [deliveryAddress, setDeliveryAddress] = useState<any>("");
  const [dropshipperName, setDropshipperName] = useState<any>("");
  const [dropshipperPhone, setDropshipperPhone] = useState<any>("");
  const [isDropshipper, setIsDropshipper] = useState<any>(false);
  const [type, setType] = useState<any>("delivery");
  const [shipmentMethod, setShipmentMethod] = useState<any>([]);
  const [paymentMethod, setPaymentMethod] = useState<any>([]);
  const [selectedShipment, setSelectedShipment] = useState<any>({});
  const [selectedPayment, setSelectedPayment] = useState<any>({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    setShipmentMethod(shipmentData);
    setPaymentMethod(paymentData);
  }, [shipmentMethod, paymentMethod])

  const finishShipment = () => {
    setType("delivery");
    setEmail("");
    setPhone("");
    setDeliveryAddress("");
    setDropshipperName("");
    setDropshipperPhone("");
    setIsDropshipper(false);
    setSelectedShipment({});
    setSelectedPayment({});
  }

  const submitPayment = () => {
    if(type == "delivery") {
      if(validationEmail(email) && validationPhone(phone) && (deliveryAddress.length > 0 && deliveryAddress.length <= 200) && !isDropshipper) {
          setType("payment")
      } else if (isDropshipper) {
        if(dropshipperName != "" && validationPhone(dropshipperPhone)) {
          setType("payment")
        } else {
          alert("Semua input dropshipper harus di isi dengan benar atau terchecklist!")
        }
      } 
      else {
       alert("Semua input harus di isi dengan benar atau terchecklist!")
      }
    }
    else {
      if( Object.keys(selectedShipment).length > 0 &&  Object.keys(selectedPayment).length > 0 ) {
        setType("finish")
      } else {
        alert("Shipment dan Payment harus di pilih!")
      }
    }
  }

  return (
    <div className={styles.container_delivery_order}>
      <div className={styles.body_delivery_order}>
       <div style={{display: "flex", justifyContent :"center"}}>
        <Stepper type={type} />
        </div>
        {
          type != "finish" &&
          <BackToTitle 
          title="Back To Cart"
          type={type}
          onClick={() => {
            if(type == "payment") {
              setType("delivery")
            } else if(type == "finish") {
              setType("payment")
            }
          }}
           />
        }  
          <div className={styles.flex_container}>
            <div className={styles.container_stepper}>
              {
                type == "delivery" && 
                <Delivery
                isDropshipper={isDropshipper}
                email={email}
                phone={phone}
                deliveryAddress={deliveryAddress}
                dropshipperName={dropshipperName}
                dropshipperPhone={dropshipperPhone}
                type={type}
                onChangeIsDropshipper={(e: any) => setIsDropshipper(!isDropshipper)}
                onChangeEmail={(e: any) => setEmail(e.target.value)}
                onChangePhone={(e: any) => setPhone(e.target.value)}
                onChangeDeliveryAddress={(e: any) => {
                  setCount(e.target.value.length)
                  setDeliveryAddress(e.target.value)
                }}
                onChangeDropshipperName={(e: any) => setDropshipperName(e.target.value)}
                onChangeDropshipperPhone={(e: any) => setDropshipperPhone(e.target.value)}
                count={count}
                />
              }

              {
                type == "payment" && 
                <Payment 
                paymentMethod={paymentMethod} 
                shipmentMethod={shipmentMethod}
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
                selectedShipment={selectedShipment}
                setSelectedShipment={setSelectedShipment}
                />
              }

              {
                type == "finish" &&
                <Finish 
                type={type}
                selectedShipment={selectedShipment}
                onClick={() => {
                  finishShipment();
                }} />
                
              }
        </div>
        {
          type == "delivery" && 
              <Droshipper 
                isDropshipper={isDropshipper}
                email={email}
                phone={phone}
                deliveryAddress={deliveryAddress}
                dropshipperName={dropshipperName}
                dropshipperPhone={dropshipperPhone}
                type={type}
        
                onChangeIsDropshipper={(e: any) => setIsDropshipper(!isDropshipper)}
                onChangeEmail={(e: any) => setEmail(e.target.value)}
                onChangePhone={(e: any) => setPhone(e.target.value)}
                onChangeDeliveryAddress={(e: any) => setDeliveryAddress(e.target.value)}
                onChangeDropshipperName={(e: any) => setDropshipperName(e.target.value)}
                onChangeDropshipperPhone={(e: any) => setDropshipperPhone(e.target.value)}
              />
        }
{/*        
        <div style={{width: 50, height: "100%", }}>
        </div> */}
        <Summary 
          isDropshipper={isDropshipper} 
          type={type} 
          onSubmit={() => {
             submitPayment()
          }} 
          selectedPayment={selectedPayment}
          selectedShipment={selectedShipment}
        />
        </div>

        </div>
      </div>
  );
}

export default DeliveryOrder;
