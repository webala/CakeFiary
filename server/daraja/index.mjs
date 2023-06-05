import axios from "axios"
import console from "console"

const businessShortCode = process.env.BUSINESS_SHORT_CODE
const lipaNaMpesaPasskey = process.env.LIPANAMPESA_PASSKEY
const consumerKey = process.env.CONSUMER_KEY
const consumerSecret = process.env.CONSUMER_SECRET

const generateToken = async () => {
    let buffer = Buffer.from(consumerKey + ":" + consumerSecret)
    let Authorization = `Basic ${buffer.toString("base64")}`

    console.log('authorization: ', Authorization)

    try {
        const response = await axios.get(process.env.ACCESS_TOKEN_URL, {
            headers: {
                Authorization
            }
        })

        return response.data
    } catch (error) {
        console.log('token error:', error)
    }

}

const formatTime = () => {
    const timestamp = new Date()
        .toISOString()
        .replace(/[^0-9]/g, "")
        .slice(0, -3);
    return timestamp;
}

const generatePassword = (formatedTime) => {
    let dataToEncode = (businessShortCode + lipaNaMpesaPasskey + formatedTime)
    let password = Buffer.from(dataToEncode).toString("base64")
    return password
}

const initiateStkPush = async (phone, amount = 1) => {
    const requestEndpoint = process.env.API_REQUEST_ENDPOINT
    const Timestamp = formatTime()
    const Password = generatePassword(Timestamp)
    const token = await generateToken()
    const Authorization = `Bearer ${token.access_token}`

    const payload = {
        BusinessShortCode: businessShortCode,
        Password,
        Timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: "174379",
        PhoneNumber: phone,
        CallBackURL:
            "https://bfae-105-163-61-89.eu.ngrok.io/api/daraja/mpesa-callback",
        AccountReference: "Cake Fairy",
        TransactionDesc: "Make Payment for cake",
    }

    try {
        const response = await axios.post(requestEndpoint, payload, {
            headers: {
                Authorization,
                "Content-Type": "application/json",
            }
        })
        return response.data
    } catch (error) {
        console.log('stk error: ', error)
    }
}

export default initiateStkPush