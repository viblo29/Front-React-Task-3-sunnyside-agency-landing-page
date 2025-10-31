import './ClientReview.css'

function ClientReview(clientReview) {
  return (
    <>

        <div className='client'>
            <div className='client_pfp'><img src={clientReview.imageSrc} alt=""/></div>
            <div className='description'>{clientReview.description}</div>
            <div className='about-client'></div>
            <div className='client-name'>{clientReview.clientName}</div>
            <div className='client-position'>{clientReview.clientPosition}</div>
        </div>
    </>
  )
}

export default ClientReview