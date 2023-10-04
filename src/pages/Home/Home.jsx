import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="font-poppins font-bold text-5xl">this is home</h2>

            <div className=" border-2 p-5 grid gird-cols-1 lg:grid-cols-4 gap-3">
                <div className="border">
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border-2">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam veritatis maxime commodi, enim nihil iste laboriosam officia odio beatae tempore. Deleniti voluptatibus recusandae ipsam dicta minima eius assumenda aut harum soluta voluptates pariatur sequi consectetur veritatis facilis ducimus, commodi, libero mollitia necessitatibus veniam adipisci consequuntur incidunt consequatur! Totam et deleniti nostrum ab maiores quibusdam itaque culpa minus impedit eos eligendi at nihil sed dolor doloremque, ipsum, rem illum sint eveniet quisquam magni quod dolorem natus adipisci. Quod, maxime laborum! Nobis magni perspiciatis iusto, consequatur eius velit fugit deserunt a nesciunt adipisci fugiat tempore ad, quaerat, reiciendis vitae? Impedit, dolor.</h1>
                </div>
                <div className="border ">
                <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;