export default function ReturnPolicy() {
  return (
    <div>
      <div className="flex items-center justify-center bg-[url('https://source.unsplash.com/0GfPlommtxM')] bg-cover bg-center bg-black bg-opacity-20 bg-blend-overlay min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Return Policy
        </h1>
      </div>
      <div className=" mx-auto my-10 p-4 text-gray-900 text-lg">
        <p className="mb-7 text-2xl text-gray-500">
          If you are looking to return or exchange your order for whatever
          reason, we are here to help! We offer free returns within 30 days of
          purchase. You can return your product for store credit, a different
          product, or a refund to the original payment method.
        </p>
        <p className="mb-7">
          Please note the following exceptions to our return and refund policy:
        </p>
        <p className="italic mb-7">
          Below are some examples of common exceptions:{" "}
        </p>
        <ul className="list-disc pl-5 mb-7">
          <li>
            Discounted items are final and cannot be returned or exchanged.
          </li>
          <li>
            Returned items must have tags still on and be returned in original
            product packaging.
          </li>
          <li>Returned items must have no visible signs of wear or use.</li>
        </ul>
        <p className="mb-7">
          To initiate a return, please complete the following steps:
        </p>
        <p className="italic mb-7">
          Your steps should be laid out clearly, linking to relevant pages, such
          as your online portal.
        </p>
        <ol className="list-decimal pl-5 mb-7">
          <li>
            Reply to your order confirmation email to request which products you
            would like to return.
          </li>
          <li>
            Print the prepaid return shipping label that you will receive by
            email.
          </li>
          <li>Send all items back to us using the label provided.</li>
        </ol>
        <p className="mb-7">Additional Information:</p>
        <p className="italic mb-7">
          The following are add-ons with more information that you may want to
          include:
        </p>
        <ul className="list-disc pl-5 mb-7">
          <li>
            How long it takes to receive your refund, replacement product, or
            store credit.
          </li>
          <li>Any shipping fees the customer will need to pay.</li>
          <li>Any return restocking fees the customer will need to pay.</li>
          <li>How you handle lost or damaged returns.</li>
          <li>
            Contact information for your business if the customer has more
            questions.
          </li>
        </ul>
      </div>
    </div>
  );
}
