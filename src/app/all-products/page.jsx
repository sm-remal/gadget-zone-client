import ProductList from "../products-list/page";

async function getAllProducts() {
  const res = await fetch("https://gadget-zone-gamma.vercel.app/products", {
    cache: "no-store",
  });
  return res.json();
}

const Page = async () => {
  const products = await getAllProducts();

  return <ProductList products={products} />;
};

export default Page;
