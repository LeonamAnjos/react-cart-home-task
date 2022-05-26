import ElementButton from "../../components/Button";
import AddShoppingCart from "../../icons/AddShoppingCart";

type AddToCartButtonProps = {
  onClick?: () => void | undefined;
};

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
  return (
    <ElementButton
      variant="contained"
      style={{ marginLeft: "Auto" }}
      endIcon={<AddShoppingCart />}
      onClick={onClick}
    >
      Add
    </ElementButton>
  );
};

export default AddToCartButton;
