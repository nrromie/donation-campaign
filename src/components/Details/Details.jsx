import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonations } from "../../utility/LocalStorage";

const Details = () => {
    const [donations, setDonations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { i } = useParams();
    const ni = parseInt(i);

    useEffect(() => {
        fetch('../donations.json')
            .then((res) => res.json())
            .then((data) => {
                setDonations(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
    }, []);

    const donation = donations.find((donat) => donat.id === ni);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!donation) {
        return <div>Donation not found</div>;
    }


    const { id, img, title, description, category, bgColor, btnBg, textColor, price } = donation;

    const btnStyle = {
        backgroundColor: textColor
    };
    const handleDonations = () => {
        saveDonations(id);
        toast("Thank you for your contribution!!");
    }

    return (
        <div className="w-10/12 mx-auto mb-16">
            <div className="relative">
                <img className="w-full h-[600px] object-cover" src={img} alt="Image" />
                <div className="w-full h-32 bottom-0 absolute z-10 bg-[#0b0b0b80] flex items-center">
                    <button onClick={handleDonations} className="text-white px-4 py-2 rounded ml-10 text-xl font-semibold" style={btnStyle}>Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-5xl font-bold mt-12">{title}</h1>
            <p className="text-[#0b0b0bb3] mt-5">{description}</p>
            <ToastContainer />
        </div>
    );
};

export default Details;
