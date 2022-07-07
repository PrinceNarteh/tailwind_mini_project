import EmailSubscribe from "./components/EmailSubscribe";
import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";

function App() {
  return (
    <div className="bg-teal-400">
      <ProductModal />
      <PricingCard />
      <EmailSubscribe />
    </div>
  );
}

export default App;
