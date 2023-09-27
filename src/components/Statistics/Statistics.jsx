import { useEffect, useState } from "react";
import { getStoredDonations } from "../../utility/LocalStorage";
import CustomPieChart from "../CustomPieChart/CustomPieChart";
const Statistics = () => {
    const [donations, setDonations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [donatedItems, setDonatedItems] = useState([]);
  
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
  
    useEffect(() => {
      const storedDonations = getStoredDonations();
      if (donations.length > 0) {
        const donated = donations.filter((donation) =>
          storedDonations.includes(donation.id)
        );
        setDonatedItems(donated);
      }
    }, [donations]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }

    let yourDonation = 0;
    {donatedItems.map((donation) => (
        yourDonation =yourDonation+ donation.price
      ))};

    return (
        <div>
            <CustomPieChart yourDonation={yourDonation}></CustomPieChart>
            <div className="flex justify-center items-center gap-20">
            <div>Your Donation <span className="btn bg-[#0088FE]"></span></div>
            <div>Total Donation <span className="btn bg-[#00C49F]"></span></div>
            </div>
        </div>
    );
};

export default Statistics;