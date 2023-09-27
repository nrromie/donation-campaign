import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Container = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setDonations(data));
    },[])
    
    return (
        <div className="w-10/12 mx-auto my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {donations.map(donation => <Card key={donation.id} donation={donation}></Card>)}
        </div>
    );
};
export default Container;