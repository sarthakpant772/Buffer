import { useState } from 'react'

const payment = () => {
  const [values, setValues] = useState({
    amount: 0,
    orderId: '',
    error: '',
    success: false,
  })
  const showRazoryPay = () => {
    const form = document.createElement('form')
    form.setAttribute('action', 'http://localhost:5000/payment/callBack')
    form.setAttribute('method', 'POST')
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.setAttribute('data-key', process.env.REACT_APP_DATA_KEY)
    script.setAttribute('data-amount', values.amount)
    script.setAttribute('data-name', 'Clever Coder')
    script.setAttribute('data-prefill.contact', '9678452132')
    script.setAttribute('data-prefill.email', 'abc@gmail.com')
    script.setAttribute('data-order_id', values.orderId)
    script.setAttribute('data-prefill.name', 'Lalit Patel')
    script.setAttribute('data-image', '../images/razorpay.png')
    script.setAttribute('data-buttontext', 'Buy NOW!!!')
    document.body.appendChild(form)
    form.appendChild(script)
    const input = document.createElement('input')
    input.type = 'hidden'
    input.custom = 'Hidden Element'
    input.name = 'hidden'
    form.appendChild(input)
  }

  return (
    <div>
      {values.amount === 0 && values.orderId == '' && <h1>Loading...</h1>}
    </div>
  )
}

export default payment
