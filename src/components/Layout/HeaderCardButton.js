import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../Store/cart-context";
import { useContext,useEffect, useState } from "react";

const HeaderCardButton = (props) => {
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberofCardItems = items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);


    const btnclasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(cartCtx.items.length===0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
            
        }, 300);

        return () =>{
            clearTimeout(timer);
        }

    },[items]);


  return (
    <button className={btnclasses} onClick={props.onshowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCardItems}</span>
    </button>
  );
};

export default HeaderCardButton;
