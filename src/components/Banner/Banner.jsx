const Banner = () => {
    return (
        <div className="h-[100vh] min-h-[600px] mt-[-190px] bg-[url('https://i.ibb.co/LShKmfD/Rectangle-4281.png')] bg-cover bg-center">
            <div className="h-full w-full bg-gradient-to-t from-[#fffffff2] to-[#fffffff2]">
                <div className="w-10/12 mx-auto h-full flex flex-col justify-center items-center gap-10">
                    <h1 className="sm:text-5xl text-3xl text-center font-bold">I Grow By Helping People In Need</h1>
                    <div className="lg:w-[470px] md:w-[470px] w-full">
                        <input className="w-[70%] text-sm text-[#0b0b0b66] pl-4 h-12 border border-[#DEDEDE] rounded-l-lg" type="text" name="SearchBox" id="a" placeholder="Search here...." />
                        <input className="w-[30%] bg-[#FF444A] font-semibold text-white h-12 rounded-r-lg hover:bg-[#c6464a]" type="submit" value="Search" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;