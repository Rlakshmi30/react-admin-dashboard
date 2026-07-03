type Product = {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: string;
  change: string;
  positive: boolean;
};

const products: Product[] = [
  {
    id: "01",
    name: "Wireless Noise-Cancel Headphones",
    category: "Electronics",
    sales: 1284,
    revenue: "$89,880",
    change: "+12.4%",
    positive: true,
  },
  {
    id: "02",
    name: "Organic Cotton Hoodie",
    category: "Apparel",
    sales: 982,
    revenue: "$49,100",
    change: "+8.2%",
    positive: true,
  },
  {
    id: "03",
    name: "Smart Fitness Watch Pro",
    category: "Electronics",
    sales: 847,
    revenue: "$76,230",
    change: "-3.1%",
    positive: false,
  },
  {
    id: "04",
    name: "Ceramic Plant Pot Set",
    category: "Home",
    sales: 623,
    revenue: "$18,690",
    change: "+24.7%",
    positive: true,
  },
  {
    id: "05",
    name: "Vitamin C Serum 30ml",
    category: "Beauty",
    sales: 591,
    revenue: "$23,640",
    change: "+15.3%",
    positive: true,
  },
];

export default function TopProducts() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-5 md:p-8">
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Top Performing Products
          </h2>
          <p className="text-sm text-gray-500">
            Best sellers this month
          </p>
        </div>

        <button className="text-indigo-600 text-sm font-medium hover:underline">
          View all →
        </button>

      </div>

      <div className="space-y-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="flex items-center justify-between"
          >


            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                {product.id}
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {product.category}
                  <span className="mx-2">•</span>
                  {product.sales.toLocaleString()} sold
                </p>
              </div>
            </div>


            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                {product.revenue}
              </p>

              <p
                className={`text-sm font-medium ${
                  product.positive
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}