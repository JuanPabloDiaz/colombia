const stats = [
  { id: 1, name: "WORLDWIDE CUSTOMERS", value: "782" },
  { id: 2, name: "PROJECTS DONE", value: "12 K" },
  { id: 3, name: "IT PRODUCTS", value: "5,896" },
  { id: 4, name: "PROJECTS SPEND", value: "$ 890 K" },
];

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
