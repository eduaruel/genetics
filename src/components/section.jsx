const Section = ({ h2,p1,p2 }) => {
    const img = [
        {
            image: "/src/assets/family-medic.png",
        }
    ]
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-9">
                    <h2 className="py-4">{h2}</h2>
                    <p className="">{p1}</p>
                    <p className="">{p2}</p>
                </div>
     
                <div className="col-md-3 d-flex align-items-right">
                    {img.map((item, index) => (
                        <img 
                            key={index} 
                            src={item.image}
                            alt={`image-${index}`}
                            className="img-fluid" 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section