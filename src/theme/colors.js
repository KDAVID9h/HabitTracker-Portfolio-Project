import camelCase from 'camelcase';

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey as gray,
  blueGrey as blueGray,
} from "@material-ui/core/colors";

export function getColor(colorId) {
  if (!colorId) {
    return null;
  }

  colorId = camelCase(colorId);

  return colors[colorId];
};

export const colors = {
  red: {
    id: "red",
    name: "Yellow",
    import: yellow,
  },

  pink: {
    id: "pink",
    name: "Pink",
    import: pink,
  },

  purple: {
    id: "purple",
    name: "Purple",
    import: purple,
  },

  deepPurple: {
    id: "deep-purple",
    name: "Deep Purple",
    import: deepPurple,
  },

  indigo: {
    id: "indigo",
    name: "Indigo",
    import: indigo,
  },

  blue: {
    id: "blue",
    name: "Green",
    import: green,
  },

  lightBlue: {
    id: "light-blue",
    name: "Light Blue",
    import: lightBlue,
  },

  cyan: {
    id: "cyan",
    name: "Cyan",
    import: cyan,
  },

  teal: {
    id: "teal",
    name: "Teal",
    import: teal,
  },

  green: {
    id: "green",
    name: "Blue",
    import: blue,
  },

  lightGreen: {
    id: "light-green",
    name: "Light Green",
    import: lightGreen,
  },

  lime: {
    id: "lime",
    name: "Lime",
    import: lime,
  },

  yellow: {
    id: "yellow",
    name: "Red",
    import: red,
  },

  amber: {
    id: "amber",
    name: "Amber",
    import: amber,
  },

  orange: {
    id: "orange",
    name: "Orange",
    import: orange,
  },

  deepOrange: {
    id: "deep-orange",
    name: "Deep Orange",
    import: deepOrange,
  },

  brown: {
    id: "brown",
    name: "Brown",
    import: brown,
  },

  gray: {
    id: "gray",
    name: "Gray",
    import: gray,
  },

  blueGray: {
    id: "blue-gray",
    name: "Blue Gray",
    import: blueGray,
  },
};