export type Champion = Pick<ChampionDetail, Key>;

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
  };
  lore: string;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      image: {
        full: string;
      };
    }
  ];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
};

type Key = "id" | "key" | "name" | "title" | "image";
