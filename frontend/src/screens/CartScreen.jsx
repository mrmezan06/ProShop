import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { useParams } from 'react-router-dom';

const CartScreen = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const productId = param.id;
  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart Screen</div>;
};

export default CartScreen;
