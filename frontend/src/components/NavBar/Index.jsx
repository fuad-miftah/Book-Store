import logo from "../../assets/Group.svg";
import menu from "../../assets/burger_menu_2.svg";
import cart from "../../assets/shopping_cart.svg";
import searchIcon from "../../assets/search.svg";
import user from "../../assets/user.svg";
import wishlist from "../../assets/favorite_border.svg";
import { useSelector } from 'react-redux';

export { logo, menu, cart, searchIcon, user, wishlist };

export const selectCartTotal = (state) => {
    return state.cart.reduce((total, item) => total + item.totalPrice, 0);
};