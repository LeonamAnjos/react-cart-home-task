import ElementButton from "../../components/Button";
import AddShoppingCart from "../../icons/AddShoppingCart";

type AddToCartButtonProps = {
  onClick?: () => void | undefined;
  disabled?: boolean;
};

const AddToCartButton = ({ onClick, disabled }: AddToCartButtonProps) => {
  return (
    <ElementButton
      variant="contained"
      style={{ marginLeft: "Auto" }}
      data-testid="add-to-cart-button"
      endIcon={<AddShoppingCart />}
      onClick={onClick}
      disabled={disabled}
    >
      Add
    </ElementButton>
  );
};

export default AddToCartButton;
