export type Match = {
  id: string;
  opponent: string;
  stadium: string;
  nearestStation: string;
  travelTime: string;
  cost: string;
};

export const matches: Match[] = [
  {
    id: "saga",
    opponent: "サガン鳥栖",
    stadium: "駅前不動産スタジアム",
    nearestStation: "鳥栖駅",
    travelTime: "約4時間30分",
    cost: "約22,000円",
  },
  {
    id: "oita",
    opponent: "大分トリニータ",
    stadium: "レゾナックドーム大分",
    nearestStation: "大分駅",
    travelTime: "約5時間",
    cost: "約25,000円",
  },
];
