export type ListQueryParameters = {
  limit: number;
  offset: number;
};

export type RemoteListResponse = {
  results: {name: string}[];
};

export type RemotePokemonItemListResponse = {
  id: number;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  species: {
    url: string;
  };
  weight: number;
  height: number;
};

export type RemotePokemonSpecieResponse = {
  color: {
    name: string;
  };
};
