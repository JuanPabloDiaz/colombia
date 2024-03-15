export async function GET() {
  const productSales = [
    {
      name: "Jan",
      product1: 4000,
      product2: 2400,
    },
    {
      name: "Feb",
      product1: 3000,
      product2: 2210,
    },
    {
      name: "Mar",
      product1: 2000,
      product2: 2290,
    },
    {
      name: "Apr",
      product1: 2780,
      product2: 2000,
    },
    {
      name: "May",
      product1: 1890,
      product2: 2181,
    },
    {
      name: "Jun",
      product1: 2390,
      product2: 2500,
    },
    {
      name: "Jul",
      product1: 3490,
      product2: 2100,
    },
    {
      name: "Aug",
      product1: 4025,
      product2: 2100,
    },
    {
      name: "Sep",
      product1: 3490,
      product2: 1500,
    },
    {
      name: "Oct",
      product1: 3490,
      product2: 2100,
    },
    {
      name: "Nov",
      product1: 2100,
      product2: 3900,
    },
    {
      name: "Dec",
      product1: 3825,
      product2: 1000,
    },
  ];
  return Response.json({ productSales });
}
