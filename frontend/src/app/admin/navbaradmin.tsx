import Image from 'next/image'
// import iconprofile from '../app/image/iconprofile.png'
// import iconsearch from '../app/image/search.png'

export default function NavbarAdmin() {
    return (
        <div className="relative">
            <div className="w-full h-[90px] bg-[#01BD63] flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="text-white text-xl font-normal font-['Inter'] leading-7">Food Logo</div>

                <nav className="flex space-x-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="search..."
                            className="w-[900px] px-4 py-2 pr-10 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <div className="absolute right-0 top-0 mt-2 mr-3 w-6 h-6">
                            {/* <Image src={iconsearch} alt="iconS" layout="fill" objectFit="contain" /> */}
                        </div>
                    </div>
                    <a href="#" className="text-white text-xl font-normal font-['Inter'] leading-9">Home</a>
                    <a href="#" className="text-white text-xl font-normal font-['Inter'] leading-9">Menu</a>
                    <a href="#" className="text-white text-xl font-normal font-['Inter'] leading-9">About</a>
                    <a href="#" className="text-white text-xl font-normal font-['Inter'] leading-9">Contract</a>
                    <a href="#">
                        <div className="absolute right-0 top-3 w-12 h-12 mr-4 mt-2">
                            {/* <Image src={iconprofile} alt="iconP" layout="fill" objectFit="contain" /> */}
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    )
}
