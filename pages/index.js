function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: 1,
          title: "Product 1",
        },
        {
          id: 2,
          title: "Product 2",
        },
        {
          id: 3,
          title: "Product 3",
        },
        {
          id: 4,
          title: "Product 4",
        },
      ],
    },
  };
}

export default HomePage;
