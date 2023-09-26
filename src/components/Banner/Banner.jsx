const Banner = () => {
    return (
        <div className="h-[600px] mt-[-40px] bg-[url('https://i.ibb.co/LShKmfD/Rectangle-4281.png')] bg-cover bg-center">
            <div className="flex flex-col justify-center items-center h-full w-full bg-gradient-to-t from-[#fffffff2] to-[#fffffff2]">
                <h1 className="text-black">I Grow By Helping People In Need</h1>
                <div>
                    <input type="text" name="SearchBox" id="a" placeholder="Search here...." />
                    <input className="btn" type="submit" value="Search" />
                </div>
            </div>
        </div>
    );
};

export default Banner;