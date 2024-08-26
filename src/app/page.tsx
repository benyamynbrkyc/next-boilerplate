import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>Hello {"<3"}</div>
      <Button asChild>
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
    </>
  );
}
