import "./App.css";
import img from "./images/icon-cart.svg";
function App() {
  return (
    <div className="main-container">
      <div className="image-container"></div>
      <section className="text-container">
        <span className="category">PERFUME</span>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="paragraph">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </p>
        <div className="prices">
          <p className="new-price">$149.99</p>
          <span className="old-price">$169.99</span>
        </div>
        <button className="btn">
          <img src={img} alt="cart" />
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default App;
