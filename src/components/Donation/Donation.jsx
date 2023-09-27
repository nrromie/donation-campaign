import { useEffect, useState } from "react";
import { getStoredDonations } from "../../utility/LocalStorage";
import DonationsCard from "../DonationsCard/DonationsCard";

const Donation = () => {
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

  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {donatedItems.map((donation) => (
            <DonationsCard key={donation.id} donation={donation}></DonationsCard>
          ))}
    </div>
  );
};

export default Donation;
