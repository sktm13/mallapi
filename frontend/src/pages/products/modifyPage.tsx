import { useLoaderData } from "react-router";
import ModifyComponent from "../../components/products/modifyComponent";

function ModifyPage() {
  const product: ProductDTO = useLoaderData() as ProductDTO;

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="text-3xl font-bold mb-6">Modify Product</div>
        <ModifyComponent product={product} />
      </div>
    </div>
  );
}

export default ModifyPage;