import ElementButton from "../../components/Button";
import RemoveShoppingCart from "../../icons/RemoveShoppingCart";

type RemoveFromCartButtonProps = {
  onClick?: () => void | undefined;
};

const RemoveFromCartButton = ({ onClick }: RemoveFromCartButtonProps) => {
  return (
    <ElementButton
      variant="contained"
      color="secondary"
      style={{ marginLeft: "Auto" }}
      data-testid="remove-from-cart-button"
      endIcon={<RemoveShoppingCart />}
      onClick={onClick}
    >
      Remove
    </ElementButton>
  );
};

export default RemoveFromCartButton;
