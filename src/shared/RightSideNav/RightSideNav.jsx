import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='p-3'>
            <div className='mb-10'>
            <h1 className="text-3xl font-bold ">Login With</h1>
            <button className="btn w-full my-3">
                <FaGoogle></FaGoogle>
                Login With Google
            </button>
            <button className="btn w-full">
                <FaGithub></FaGithub>
                Login With Github
            </button>
            </div>

            <div>
                <h1 className='text-3xl font-bold mb-6'>Find Us On</h1>

                <a className='flex items-center text-2xl border rounded-t-lg p-4' href="">
                    <FaFacebook className=' mr-3'></FaFacebook>
                    Facebook
                </a>

                <a className='flex items-center text-2xl border-x p-4' href="">
                   <FaTwitter></FaTwitter>
                    Twitter
                </a>

                <a className='flex items-center text-2xl border rounded-b-lg p-4' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>


            <div className='bg-gray-200 border-2 p-3 space-y-3 mt-10'>
                <h1 className='text-3xl font-bold'>Q-Zone</h1>
                <img src="qZone1.png" alt="" />
                <img src="qZone2.png" alt="" />
                <img src="qZone3.png" alt="" />

            </div>


        </div>
    );
};

export default RightSideNav;