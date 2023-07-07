import Link from "next/link";

export default function SuccessPage() {
  return (
    <div>
      Success!
      <Link href={"/"}>Back home</Link>
    </div>
  );
}
