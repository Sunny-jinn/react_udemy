import { Fragment } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <Fragment>
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
          <ProductItem
            id={0}
            title="Play Station5"
            price={99.99}
            description="I want to buy it!"
          />
        </ul>
      </section>
      <section className={classes.products}>
        <ul>
          <ProductItem
            id={1}
            title="Book"
            price={12.99}
            description="Too boring..to me"
          />
        </ul>
      </section>
    </Fragment>
  );
};

export default Products;
