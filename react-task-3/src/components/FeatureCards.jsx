import './FeatureCards.css'

function FeatureCards(featureCard) {
  return (
    <>
        <div className='feature-card' style={{backgroundImage: `url(${featureCard.backgroundImage})`, color:`${featureCard.color}` }}>
            <div className='feature-card_title'>{featureCard.title}</div>
            <div className="feature-card_description">{featureCard.description}</div>
        </div>
    </>
  )
}

export default FeatureCards