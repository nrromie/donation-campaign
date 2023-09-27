const DonationsCard = ({donation}) => {
    const { id, img, title, description, category, bgColor, btnBg, textColor, price } = donation;
    const cardStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    const catStyles = {
        backgroundColor: btnBg,
    }
    const btnStyle = {
        backgroundColor: textColor
    };
    return(
        <div style={cardStyles} className="flex gap-6">
            <img className="h-48 w-48 object-cover" src={img} alt="Image" />
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className="px-4 py-1 rounded w-min" style={catStyles}>{category}</h1>
                    <h1 className="text-black text-2xl font-semibold">{title}</h1>
                    <h1>${price}</h1>
                    <button className="text-white px-4 py-2 rounded text-xl font-semibold" style={btnStyle}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationsCard;