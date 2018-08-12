import { Platform, PixelRatio } from 'react-native';

/* eslint-disable */

export const icons = {};

export const loadIcons = iconsToLoad => new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(iconsToLoad).map(name =>
      iconsToLoad[name][0].getImageSource(
        iconsToLoad[name][1],
        iconsToLoad[name][2] || Platform.select({android: 24, ios: 24}),
        iconsToLoad[name][3] || 'black'
      ))
  ).then((sources) => {
    Object.keys(iconsToLoad).forEach((name, i) => icons[name] = sources[i]);
    resolve(icons);
  });
});
