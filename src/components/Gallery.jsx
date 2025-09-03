import Card from './Card';

function Gallery() {
  // Datos de ejemplo para los productos
  const products = [
    {
      id: 1,
      image: "/assets/postHamburguesa.png",
      title: "Hamburguesa Especial",
      description: "Carne 100% premium con queso cheddar, lechuga y tomate",
      price: 12.99
    },
    {
      id: 2,
      image: "/assets/sandwichGrillado.png",
      title: "Sandwich Grillado",
      description: "Pollo grillado con vegetales frescos y salsa especial",
      price: 10.99
    },
    {
      id: 3,
      image: "/assets/postHamburguesa.png", // Puedes agregar más imágenes
      title: "Hamburguesa Clásica",
      description: "La hamburguesa tradicional con todos los ingredientes clásicos",
      price: 9.99
    },
    {
      id: 4,
      image: "/assets/sandwichGrillado.png",
      title: "Sandwich Premium",
      description: "Doble carne con bacon crujiente y queso fundido",
      price: 13.99
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestras Categorias
        </h2>
        
        {/* Grid de dos columnas para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;