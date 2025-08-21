export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center px-6 h-[70vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Discover Amazing Products <br /> at MyShop
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 drop-shadow-md">
          Shop the latest tech gadgets, accessories, and more with exclusive discounts.
        </p>
        <a
          href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 transition"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}
