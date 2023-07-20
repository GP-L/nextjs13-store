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
            className="inline-block mt-10 rounded-md border border-gray-900 bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900">
            Shop Collection
          </Link>
        </div>
      </div>
      <div>
        <img
          src="https://source.unsplash.com/Mv7kokwzIMw"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
