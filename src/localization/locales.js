import * as React from 'react';
import { enGB, enUS, fr } from 'date-fns/locale'; // ewe retiré car non disponible nativement
import { ReactComponent as FranceFlagSvg } from 'icons/france.svg';
import { ReactComponent as TogoFlagSvg } from 'icons/togo.svg';
import { ReactComponent as UnitedKingdomFlagSvg } from 'icons/united-kingdom.svg';
import { ReactComponent as UnitedStatesFlagSvg } from 'icons/united-states.svg';

// Custom Ewe locale based on enGB
const ewe = {
  code: 'ewe',
  formatDistance: enGB.formatDistance,
  formatLong: enGB.formatLong,
  formatRelative: enGB.formatRelative,
  localize: enGB.localize,
  match: enGB.match,
  options: {
    ...enGB.options,
    weekStartsOn: 1, // Lundi comme début de la semaine
    firstWeekContainsDate: 1,
  },
};

// Default locale set to enGB (London, GMT)
const defaultLocale = enGB;

// Available locales
const locales = [
  {
    code: 'en-US',
    label: 'English US',
    icon: <UnitedStatesFlagSvg />,
    import: enUS,
  },
  {
    code: 'en-GB',
    label: 'English GB',
    icon: <UnitedKingdomFlagSvg />,
    import: enGB,
  },
  {
    code: 'fr',
    label: 'Français',
    icon: <FranceFlagSvg />,
    import: fr,
  },
  {
    code: 'ewe',
    label: 'Ewe',
    icon: <TogoFlagSvg />,
    import: ewe, // Lier Ewe à enGB car pas de locale ewe dans date-fns
  },
];

export { defaultLocale, locales };
