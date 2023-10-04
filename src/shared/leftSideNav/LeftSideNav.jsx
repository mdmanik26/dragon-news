import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-5">All Caterogy</h1>
            {
                categories.map(category => <NavLink to={`category/${category.id}`}  key={category.id}><p className="mb-5 text-xl font-medium px-5">{category.name}</p></NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;