import { SortOptionType } from "../types";

const sortOptions: SortOptionType[] = [
  {
    label: {
      am: 'անվան՝ ա-ֆ',
      ru: 'имени: а-я'
    },
    param: 'name,asc'
  },
  {
    label: {
      am: 'անվան՝ ֆ-ա',
      ru: 'имени: я-а'
    },
    param: 'name,desc'
  },
  {
    label: {
      am: 'գնի աճման',
      ru: 'возрастанию цен'
    },
    param: 'price,asc'
  },
  {
    label: {
      am: 'գնի նվազման',
      ru: 'снижению цен'
    },
    param: 'price,desc'
  }
];

export default sortOptions;