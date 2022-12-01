import { MainLayout } from '@components/compound';

export default function Product() {
  return (
    <div>
      <h1>Product</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

Product.Layout = MainLayout;
