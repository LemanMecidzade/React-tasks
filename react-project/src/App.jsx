import "./App.css";
import PostCard from "./components/PostCard/PostCard";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import ProfileAvatar from "./components/ProfileAvatar/ProfileAvatar";

function App() {
  const imgUrl = "https://www.looper.com/img/gallery/jujutsu-kaisen-season-2-release-date-cast-and-plot-what-we-know-so-far/intro-1680014975.jpg";

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
        <Title title="Anime World" />
        <Input placeholderText="Search..." />
        <ProfileAvatar initials="LM" />
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