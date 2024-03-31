import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params: { title } }) => {
  switch (title) {
    case "TheLostJournal":
      return {
        title: "The Lost Journal",
        theme: "Adventure",
        brief:
          "A young person discovers an ancient journal leading to a hidden treasure in their small town, sparking an adventure that teaches them about history, bravery, and friendship.",
        image: "/images/stories/lost_journal.webp",
      };
    case "AWhisperInTheForest":
      return {
        title: "A Whisper in the Forest",
        theme: "Fantasy",
        brief:
          "In a world where forests are alive with magic, a whisper from the trees sends a village girl on a quest to find a legendary creature believed to be the forest's guardian.",
        image: "/images/stories/forest_whisper.webp",
      };
    case "StarsOverTheSea":
      return {
        title: "Stars Over the Sea",
        theme: "Romance",
        brief:
          "Two individuals from contrasting worlds find themselves at the same seaside town for summer. Amidst the backdrop of starlit nights and the soothing sea, they discover love in unexpected places.",
        image: "/images/stories/stars_over_sea.webp",
      };
    case "EchoesOfTheFuture":
      return {
        title: "Echoes of the Future",
        theme: "Science Fiction",
        brief:
          "In a future where time travel is possible but strictly regulated, a curious teenager accidentally discovers a plot to alter history and must navigate the complexities of time to prevent a disaster.",
        image: "/images/stories/echoes_future.webp",
      };
    case "TheChefsSecret":
      return {
        title: "The Chef's Secret",
        theme: "Mystery",
        brief:
          "When a renowned but reclusive chef suddenly disappears, a determined food critic finds themselves unraveling the mystery, leading to a secret recipe with surprising ingredients and a history that changes everything.",
        image: "/images/stories/chefs_secret.webp",
      };
  }

  error(404, "Not found");
};
