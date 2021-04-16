interface NavigationData {
  name: string;
  params?: {};
}

type Screens =
  | {
      name: 'Home';
    }
  | {
      name: 'Favroite';
    }
  | {
      name: 'MovieDetails';
      params?: {
        item?: {};
      };
    };

export type {NavigationData, Screens};
