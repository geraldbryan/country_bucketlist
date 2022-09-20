function Content(props){
    return(
        <div className="card">
            <img src={`../images/${props.image}`} className="card--img" alt="place"></img>
            <div className="card--details">
                <div>
                    <i style={{ color: "#f55a5a"}} className="fa-solid fa-location-dot pinpoint"></i>
                    <span className="location whitespace">
                        {props.country.toUpperCase()}
                    </span>
                    <a className="maps-url" href={props.maps}> View on Google Maps</a>
                </div>
                <h1 className="card--title"> {props.location} </h1>
                <small className="reason">
                    {props.reason}
                </small>
                <p className="description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Content