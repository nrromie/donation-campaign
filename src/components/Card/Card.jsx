import { Link } from "react-router-dom";

const Card = ({ donation }) => {
    const { id, img, title, description, category, bgColor, btnBg, textColor, price } = donation;


    const cardStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    const catStyles = {
        backgroundColor: btnBg,
    }
    return (
        <Link to={`/Details/${id}`}>
        <div style={cardStyles} className="card">
            <figure><img className="h-48 w-full object-cover" src={img} alt="Donations" /></figure>
            <div className="p-4">
                <h1 className="px-4 py-1 rounded w-min" style={catStyles}>{category}</h1>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
        </Link>
    );
};
export default Card;