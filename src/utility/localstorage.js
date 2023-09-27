const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
}


const saveDonations = id => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donId => donId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonations))
        toast = true;
    }
}

export { getStoredDonations, saveDonations}