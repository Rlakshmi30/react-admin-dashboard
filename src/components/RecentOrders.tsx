import { recentOrders } from '../data'
type Order = {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: string;
  status: "Delivered" | "Processing" | "Shipped" | "Pending";
};


  
export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Orders
      </h2>
      <p className="text-s font-medium text-gray-500">Latest Transaction across all channels</p>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="pb-3 text-sm text-gray-500 font-medium">
              Order ID
            </th>

            <th className="pb-3 text-sm text-gray-500 font-medium">
              Customer
            </th>

            <th className="pb-3 text-sm text-gray-500 font-medium">
              Product
            </th>

            <th className="pb-3 text-sm text-gray-500 font-medium">
              Amount
            </th>

            <th className="pb-3 text-sm text-gray-500 font-medium">
              Status
            </th>

          </tr>
        </thead>

        <tbody>
          {recentOrders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 font-medium">
                {order.id}
              </td>

             <td>
             <div className="flex flex-col">
            <span className="font-medium text-gray-900">
            {order.customer}
            </span>
            <span className="text-sm text-gray-500">
             {order.email}
            </span>
            </div>
            </td>   
              <td>{order.product}</td>
              <td>{order.amount}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-700"
                      :order.status ==="Shipped"
                      ? "bg-blue-100 text-blue-700"
                      :order.status === "Pending"
                      ? "bg-gray-100 text-gray-700"
                      :""
                  }
                `}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
                