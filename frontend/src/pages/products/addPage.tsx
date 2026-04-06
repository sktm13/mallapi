import AddComponent from "../../components/products/addComponent";

function AddPage() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>
        <AddComponent />
      </div>
    </div>
  );
}

export default AddPage;