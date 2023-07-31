import "./App.css";
import PostCard from "./components/PostCard/PostCard";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";

function App() {
  const imgUrl = "./img.jpeg";

  const cards = [
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
    {
      image: imgUrl,
      description:
        "When Jujutsu Kaisen season 2 comes out, based on everything we know",
      footer: "Read",
    },
  ];

  return (
    <div>
      <header>
        <Input />
        <Title />
      </header>
      <main>
        <div>
          {cards.map((el) => (
            <PostCard card={el} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;