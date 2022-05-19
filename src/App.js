import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Sneakers",
      imageUrl: "./img/sneaker.webp",
    },
    {
      id: 2,
      title: "Casual",
      imageUrl: "/img/casual-shoes.webp",
    },
    {
      id: 3,
      title: "Running",
      imageUrl: "./img/running-shoes.jpeg",
    },
    {
      id: 4,
      title: "Training",
      imageUrl: "./img/training-shoes.jpeg",
    },
    {
      id: 5,
      title: "Dress",
      imageUrl: "./img/dress-shoes.webp",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-img"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
