export const validationEmail = (email: any) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(validRegex)) {
        return true;
    }

}

export const validationPhone = (phone: any) => {
    var validRegex =  /^(\d+-)*(\d+,)*(\d+)$/;

    if(phone.match(validRegex) && phone.length >= 6 && phone.length <= 20) {
        return true;
    }
}

export const numberWithCommas = (price: any) =>  {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const generateId = (length: any) => {
    var result           = '';
    var characters       = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz23456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
