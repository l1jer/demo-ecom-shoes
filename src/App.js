import Categories from "./components/main-categories/main-categories.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Sneakers",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg",
    },
    {
      id: 2,
      title: "Casual",
      imageUrl:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F12%2Fbest-sneakers-shoes-nike-adidas-new-balance-crocs-jordan-brand-2.jpg?w=1600&cbr=1&q=90&fit=max",
    },
    {
      id: 3,
      title: "Running",
      imageUrl:
        "https://cdn.luxe.digital/media/2021/09/28150317/best-nike-running-shoes-men-review-luxe-digital%402x.jpg",
    },
    {
      id: 4,
      title: "Training",
      imageUrl:
        "https://s3.amazonaws.com/nikeinc/assets/106184/NikeNews_JordanBrand_RetroPreview_SP22_AJ12_Black_Varsity_Red_965207_A7_RightLateral_v03_HR_native_1000.jpg?1639426981",
    },
    {
      id: 5,
      title: "Dress",
      imageUrl:
        "https://blogs-images.forbes.com/forbes-finds/files/2018/03/3_12693637.jpg?width=960",
    },
  ];
  return <Categories categories={categories} />;
};

export default App;
