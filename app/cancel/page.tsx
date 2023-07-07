import Link from "next/link";

export default function CancelPage() {
  return (
    <div>
      Cancelled!
      <Link href={"/"}>Back home</Link>
    </div>
  );
}
