import { useState } from "react";
import {
  UserPlus,
  Wallet,
  BarChart3,
  Receipt,
  Settings,
  HelpCircle,
} from "lucide-react";

const categories = [
  {
    title: "Account Opening",
    description: "Get started with your account",
    icon: <UserPlus className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Funds & Withdrawals",
    description: "Deposits, withdrawals & balances",
    icon: <Wallet className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Orders & Trades",
    description: "Placing & managing orders",
    icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Charges & Billing",
    description: "Brokerage & tax details",
    icon: <Receipt className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Technical",
    description: "Login & platform issues",
    icon: <Settings className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Others",
    description: "Anything else",
    icon: <HelpCircle className="h-6 w-6 text-gray-600" />,
  },
];

const CreateTicket = () => {
  const [topic, setTopic] = useState("");

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Support Portal</h1>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm">
            Create Ticket
          </button>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-14">
          <input
            type="text"
            placeholder="Search for help (withdrawal, order rejected, etc.)"
            className="w-full max-w-2xl px-5 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-8 text-center">
          What can we help you with?
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => setTopic(cat.title)}
              className="group bg-white rounded-xl border p-6 cursor-pointer
                         hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">{cat.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-blue-600">
                  {cat.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Selected Topic */}
        {topic && (
          <div className="mt-14 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
              <p className="text-sm text-gray-500 mb-2">Selected topic</p>
              <h3 className="text-lg font-semibold mb-4">{topic}</h3>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                Continue to create ticket
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreateTicket;
