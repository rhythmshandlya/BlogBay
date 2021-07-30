import React, { Fragment } from 'react'
import MobNav from './Navbar_m';
import ComNav from './Navbar_c';

const init = () => window.innerWidth < 800;

const Navbar = () => {
    
    const [menu, menuSetter] = React.useState(init);
    
    function check(){
        if(window.innerWidth<800)
            menuSetter(true);
        else
            menuSetter(false);
    }

    window.addEventListener("resize",check);
    return (<>{menu ? <MobNav /> : <ComNav />}</>);
}
export default Navbar;
