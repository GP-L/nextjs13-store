export default function Home() {
  return (
    <div className="bg-white grid lg:grid-cols-2">
      <div className="hidden lg:inline-block">
        <img
          src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      <div className="lg:hidden bg-[url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center min-h-[500px]"></div>
    </div>
  );
}
