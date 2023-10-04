import moment from 'moment';

const Header = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
            <img src="logo.png" alt="" />
            <h5>Journalism Without Fear or Favour</h5>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;