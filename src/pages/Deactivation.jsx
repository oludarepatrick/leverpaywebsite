const Deactivation = () => {
  return (
    <div className="bg-blue-500 px-4 py-12 min-h-screen flex items-start justify-center">
      <div
        className="container mx-auto p-8 bg-blue shadow-lg rounded-lg border border-gray-200 
                            relative before:content-[''] before:absolute before:inset-0 before:border before:border-blue-300 
                            before:rounded-lg before:-z-10 before:opacity-50"
      >
        <h1 className="text-3xl font-semibold text-blue-800 text-center mb-6">
          Account Deactivation
        </h1>
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
          We would like to know why you want to close your account with us
        </h3>
        <p className="text-lg text-gray-800 mb-4 text-center">
          Please send an email to:
          <a
            href="mailto:contact@leverpay.io"
            className="text-blue-600 hover:underline"
          >
            {" "}
            contact@leverpay.io
          </a>
        </p>
        <p className="text-lg text-gray-800 mb-4 text-center">
          You can also send us a WhatsApp message or request a callback at:
          <a
            href="tel:+2349060898687"
            className="text-blue-600 hover:underline"
          >
            {" "}
            +2349060898687
          </a>
        </p>
      </div>
    </div>
  );
};

export default Deactivation;
