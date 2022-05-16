import store from '@/store';
import Vue from 'vue';

function toUSD(value, fromUnit): number {
  if (fromUnit === 'USD') {
    return value;
  }

  const { exchangeRate } = store.getters;
  if (!exchangeRate) {
    return null;
  }

  const targetRate = exchangeRate[fromUnit];
  if (!targetRate) {
    return null;
  }

  const usd = value / targetRate;

  return usd;
}

function toVND(value, fromUnit): number {
  if (fromUnit === 'VND') {
    return value;
  }

  const { exchangeRate } = store.getters;
  if (!exchangeRate) {
    return null;
  }

  const targetRate = exchangeRate[fromUnit];
  if (!targetRate) {
    return null;
  }

  const usd = value / targetRate;

  return usd * exchangeRate.VND;
}

Vue.filter('easyLook', (value) => {
  const splitedStrings = (isNaN(value) ? '' : value).toString().split('.');
  const beforeDot: string = splitedStrings[0];
  const afterDot: string = splitedStrings[1];
  const reverseString = beforeDot
    .split('')
    .reverse()
    .reduce((accumulator, currentValue, index) => {
      return `${accumulator}${
        index && index % 3 === 0 ? ',' + currentValue : currentValue
      }`;
    }, '');
  const finalString =
    reverseString.split('').reverse().join('') +
    (afterDot ? `.${afterDot}` : '');

  return finalString;
});

Vue.filter('toUSD', (value, unit) => {
  return toUSD(value, unit);
});

Vue.filter('toVND', (value, unit) => {
  return toVND(value, unit);
});

Vue.filter('sumToUSD', (value: any[] = [], unit) => {
  const { exchangeRate } = store.getters;
  if (!exchangeRate) {
    return null;
  }

  return value.reduce((t, c) => t + toUSD(c.quantity, c.unit), 0);
});

Vue.filter('sumToVND', (value: any[] = [], unit) => {
  const { exchangeRate } = store.getters;
  if (!exchangeRate) {
    return null;
  }

  return value.reduce((t, c) => t + toVND(c.quantity, c.unit), 0);
});
