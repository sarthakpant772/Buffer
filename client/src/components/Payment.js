import { useState } from 'react'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const Payment = () => {
  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch('http://localhost:5000/payment/razorpay', {
      method: 'POST',
    }).then((t) => t.json())

    console.log(data)

    const options = {
      key: 'rzp_test_LIBykHmf9U826c',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Buffer',
      description: 'Thank you for nothing. Please give us some money',
      image:
        'https://imgs.search.brave.com/nnernw_s4TZNL9KCtjSc6I91juOVcsmFT4juxisRvxM/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/Mk0wWnppbVBKVFZ1/VEFKakhlOHFRSGFK/NCZwaWQ9QXBp',
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: 'sarthak pant',
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate $5
          </a>
        </header>
      </div>
    </div>
  )
}

export default Payment
