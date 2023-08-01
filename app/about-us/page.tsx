export default function Home() {
  return (
    <div className="bg-white grid lg:grid-cols-2">
      <div className="hidden lg:inline-block">
        <img
          src="https://source.unsplash.com/AtVGLkuZsJM"
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex items-center my-20 lg:m-0">
        <div className="mx-auto max-w-7xl px-6 text-center lg:text-left lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            We started Glasses because we were tired of paying for overpriced
            frames. That is why we decided to make our own frames.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Along the way, we have created beatiful frames at afordable prices.
            We want to redefine the industry by continuing to create even more
            frames at modest prices.
          </p>
        </div>
      </div>
      <div className="lg:hidden bg-[url('https://source.unsplash.com/AtVGLkuZsJM')] bg-cover bg-center min-h-[500px]"></div>
    </div>
  );
}
