import Script from 'next/script'
import React from 'react'

const Contact = () => {
  return (
    <div>
      Contact
      <Script >
        {`alert("I am Contact")`}
      </Script>
    </div>
  )
}

export default Contact
