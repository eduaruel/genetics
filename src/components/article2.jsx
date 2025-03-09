import { Link } from 'react-router-dom'
const Article2 = ({p1,p2,h4,p3,p4}) => {
    return (
        <div className="bg-secondary text-white p-3">
           <div className="container">
                <div className="row text-center">
                
               <Link className="navbar-brand" to="/">
                     <img src="#" alt="Logo" height="30" className="d-inline-block align-text-top me-2" />
                </Link>
                    <div>
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                    <div>
                        <h4>{h4}</h4>
                        <p>{p3}</p>
                        <p>{p4}</p>
                        <p> contacto@genetics.net</p>
                    </div>
                </div>
           </div>
        </div>
    );
}
export default Article2;