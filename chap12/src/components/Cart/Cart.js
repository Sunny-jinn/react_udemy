import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {cartItem.map((items) => (
          <CartItem
            key={Math.random()}
            item={{
              id: items.id,
              title: items.name,
              quantity: items.quantity,
              total: items.totalPrice,
              price: items.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
