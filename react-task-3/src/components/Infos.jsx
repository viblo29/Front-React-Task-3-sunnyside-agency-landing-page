import './Infos.css'

function Infos(info) {
  return (
    <>
        <div className="info-box">
            <div className="info">
                <div className="info_title">{info.title}</div>
                <div className="info_description">{info.description}</div>
                <button className="info_learn-more" style={{'--underline-color': info.color}}>Learn More</button>
                                    

            </div>
        </div>
    </>
  )
}

export default Infos