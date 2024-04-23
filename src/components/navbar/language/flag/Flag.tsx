import './Flag.css';

import { LangType } from '../../../../types';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
  lang: LangType;
}

export default function Flag({ lang }: Props) {
  const icon = lang === 'am' ? 'flagpack:am' : 'flagpack:ru';

  return (
    <Icon icon={icon} />
  );
}