import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us</h2>
            <div className="join flex join-vertical *:bg-base-100  *:hover:bg-gray-300">
                <button className="btn join-item justify-start py-7"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start py-7"><FaTwitter></FaTwitter> Twitter </button>
                <button className="btn join-item justify-start py-7"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;