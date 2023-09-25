import CartWidget from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>logo</h4>
      <ul>
        <li>Nike</li>
        <li>Adidas</li>
        <li>Puma</li>
        <li>Vans</li>
      </ul>
      <CartWidget />
    </div>
  );
};
