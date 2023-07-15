import React from 'react'
import Layout from '../components/Layout'
import { useContext } from 'react'
import allContext from '../context/allContext/allContext'

function ReturnPolicy() {
    const context = useContext(allContext)
    const { toggleMode, mode } = context
    return (
        <Layout>
           <div className="container mx-auto px-4 py-16">
           <h1 className=' text-3xl font-bold text-center mb-5' style={{ color: mode === 'dark' ? 'white' : '' }}>Refund and Cancellation Policy</h1>
            <p style={{ color: mode === 'dark' ? 'white' : '' }}>At <span className=' font-semibold' style={{ color: mode === 'dark' ? 'white' : '' }}>E-Bharat.com</span>, our focus is complete customer satisfaction. In the event, if you are displeased with the services provided , we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase.
<br />
<br />
                In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows:

<br />
<br />
               <h1 className=' font-bold text-2xl' > Cancellation Policy</h1>
<br />
                For Cancellations please contact the us via contact us link.
<br />
<br />
                Requests received later than 3 business days prior to the delivery of the product will not be processed.
<br />
<br />
<h1 className=' font-bold text-2xl'> Refund Policy</h1>
        
<br />
                We will try our best to create the best products for our customers. Images are only for representational purpose and are taken in a certain lighting conditions. Colour shade may slightly vary as per the lighting conditions. In case any you are not completely satisfied with our products due to the defect in the product we can review your case and provide a refund. If paid online, refunds will be issued to the original payment method provided at the time of purchase and in case of COD, refund will be made to the UPI ID provided by the customer.</p>
           </div>
        </Layout>
    )
}

export default ReturnPolicy