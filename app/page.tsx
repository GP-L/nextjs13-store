import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white grid lg:grid-cols-2">
      <div className="flex items-center my-20 lg: m-0">
        <div className="mx-auto max-w-7xl px-6 text-center lg:text-left lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Modern Quality Glasses
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            No matter who you are, we have a frame for you. Browse our
            collection of quality glasses and select your next frames.
          </p>
          <Link
            href={"/frames"}
            className="inline-block mt-10 rounded-md border border-gray-900 bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900"
          >
            Shop Collection
          </Link>
        </div>
      </div>
      <div className="hidden lg:inline-block">
        <img
          src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full"
        />
      </div>
      <div className="lg:hidden bg-[url('https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-[700px]"></div>
    </div>
  );
}
