import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import "./PageNotFound.css"
function PageNotFound () {
    return (
        <div className="pageNotFound">
        <img src={logo} alt="Error 404: Página no encontrada" className="pageNotFound--img"/>
        <h2 className="pageNotFound--message">¡Página no encontrada!</h2>
        <Link to="/">Regresar al Home</Link>
        </div>
    )
}

export default PageNotFound