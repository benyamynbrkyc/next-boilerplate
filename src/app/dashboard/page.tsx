import { HorizontalCards, RecentSales, Transactions } from "./dashboard-items";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <HorizontalCards />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Transactions />
        <RecentSales />
      </div>
    </div>
  );
}
