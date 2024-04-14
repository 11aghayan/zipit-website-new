import { SortOptionType } from "../types";

const sortOptions: SortOptionType[] = [
  {
    label: {
      am: 'hay name_asc',
      ru: 'rus name_asc'
    },
    query: 'name,asc'
  },
  {
    label: {
      am: 'hay name_desc',
      ru: 'rus name_desc'
    },
    query: 'name,desc'
  },
  {
    label: {
      am: 'hay price_asc',
      ru: 'rus price_asc'
    },
    query: 'price,asc'
  },
  {
    label: {
      am: 'hay price_desc',
      ru: 'rus price_desc'
    },
    query: 'price,desc'
  }
];

export default sortOptions;