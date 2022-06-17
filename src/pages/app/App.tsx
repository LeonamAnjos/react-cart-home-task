import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import ProductList from "../products/ProductList";
import CartItemList from "../cart/CartItemList";
import { useCartStore } from "../stores/useCartStore";
import { totalValue } from "../utils/utils";
import Caption from "../../components/Caption";
import LocaleContext from "../../context/LocaleContext";
import useProducts from "../hooks/useProducts";

// TODO: move it to proper configuration
const url = "/products.json";

const App = () => {
  const products = useProducts({ url });

  const { items } = useCartStore();
  const { currencyFormat } = useContext(LocaleContext);

  const total = totalValue(items);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Caption variant="h6">{"Products"}</Caption>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={6}>
        <Caption variant="h6">{"Cart"}</Caption>
        {items.length > 0 ? (
          <>
            <CartItemList items={items} />
            <Caption variant="h6">{`Total: ${currencyFormat(total)}`}</Caption>
          </>
        ) : (
          <Caption variant="h6">{"Empty"}</Caption>
        )}
      </Grid>
    </Grid>
  );
};

export default App;
