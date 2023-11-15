import { Fragment } from "react";
import HeaderCardButton from "./HeaderCardButton";
import classes from './Header.module.css';
import mealImage from '../../assests/meals.jpg';

const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton onshowCart={props.onshowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="meals image"/>
        </div>
    </Fragment>
};
export default Header;