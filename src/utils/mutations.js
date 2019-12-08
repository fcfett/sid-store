import React from 'react';
import Regex from './regularExpressions';
import Validators from './validators';

import Icon from '../components/atoms/Icon';

const userStatus = {
  active: 'Ativo',
  inactive: 'Inativo'
};

const daysOfTheWeek = {
  monday: 'Segunda',
  tuesday: 'Terça',
  wednesday: 'Quarta',
  thursday: 'Quinta',
  friday: 'Sexta',
  saturday: 'Sábado',
  sunday: 'Domingo'
};

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

const calendarLabels = {
  nextMonth: 'Próximo mês',
  previousMonth: 'Mês anterior'
};

const Order = {
  ASC: 1,
  DESC: -1
};

const TotalizerType = {
  SUM: 1,
  AVERAGE: 0
};

const CustomJoin = (arr = [], separator = ', ', lastSeparator = separator, wrapper = '') => {
  arr = arr.filter((item) => item);
  return arr.reduce((acc, item, index) => {
    const isLastIndex = index === arr.length - 1;
    const wrappedItem = `${wrapper}${item}${wrapper}`;
    return acc + (index > 0 ? `${isLastIndex ? lastSeparator : separator}${wrappedItem}` : `${wrappedItem}`);
  }, '');
};

const AddWordBreakers = (text) => {
  if (!Validators.isString(text)) return text;
  const wordBreaker = `\u200B`;
  return text.replace(Regex.wordBoundry, `${wordBreaker}$1${wordBreaker}`);
};

const RemoveCopiedWordBreakers = (e) => {
  const { nativeEvent: event } = e;
  if (event) {
    const { type, target, clipboardData } = event;
    if (clipboardData) {
      event.preventDefault();
      if (/cut|copy/.test(type)) {
        const textContent = target.textContent;
        const text = textContent.replace(Regex.wordBreaker, '');
        clipboardData.setData('text', text);
      }
    }
  }
};

const FormatDate = (date, showYear = true) => {
  if (Validators.isNullOrUndefined(date)) return;
  const isoDate = new Date(date).toISOString();
  return isoDate ? isoDate.replace(Regex.formatDate, `$3/$2${showYear ? '/$1' : ''}`) : null;
};

const FormatTime = (date) => {
  if (Validators.isNullOrUndefined(date)) return;
  const isoDate = new Date(date).toISOString();
  return isoDate ? isoDate.replace(Regex.formatTime, '$1:$2') : null;
};

const FormatDateTime = (date, showYear = true) => {
  if (Validators.isNullOrUndefined(date)) return;
  const isoDate = new Date(date).toISOString();
  const formattedDate = isoDate ? isoDate.replace(Regex.formatDate, `$3/$2${showYear ? '/$1' : ''}`) : null;
  const formattedTime = isoDate ? isoDate.replace(Regex.formatTime, '$1:$2') : null;
  return formattedDate && formattedTime && `${formattedDate} ${formattedTime}`;
};

const FormatTimeString = (date) => {
  if (Validators.isNullOrUndefined(date)) return;
  return date.toString().replace(Regex.timeString, '$1:$2');
};

const FormatCPF = (cpf) => (cpf ? cpf.replace(Regex.formatCPF, '$1.$2.$3-$4') : cpf);
const FormatPhone = (phone) => (phone ? phone.replace(Regex.formatPhone, '($1) $2-$3') : phone);

const DescribeTime = (hours, minutes, seconds) => {
  const h = +hours || 0;
  const m = +minutes || 0;
  const s = +seconds || 0;
  const description = [];

  if (h > 0) description.push(`${h} hora${h > 1 ? 's' : ''}`);
  if (m > 0) description.push(`${m} minuto${m > 1 ? 's' : ''}`);
  if (s > 0) description.push(`${s} segundo${s > 1 ? 's' : ''}`);

  return CustomJoin(description, ', ', ' e ');
};

const DescribeTimeString = (value) => {
  const arrTime = Validators.isTimeString(value) ? value.split(':') : [];
  return DescribeTime(...arrTime);
};

const TimeStringToSeconds = (value) => {
  const arrTime = Validators.isTimeString(value) ? value.split(':') : [];
  return TimeToSeconds(...arrTime);
};

const TimeToSeconds = (hours, minutes, seconds) => {
  return (+hours || 0) * 3600 + (+minutes || 0) * 60 + (+seconds || 0);
};

const SecondsToTime = (seconds, showSeconds = false) => {
  if (Validators.isNullOrUndefined(seconds)) return;

  const sec = parseInt(seconds, 10);
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec - h * 3600) / 60);
  let s = sec - h * 3600 - m * 60;

  if (h < 10) h = `0${h}`;
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;

  return `${h}:${m}${showSeconds ? `:${s}` : ''}`;
};

const FormatNumber = (value) => {
  if (Validators.isNullOrUndefined(value)) return;
  return value
    .toString()
    .replace(Regex.formatNumber, '.')
    .replace(/^\./g, '');
};

const FormatMoney = (value, currency = 'R$') => {
  if (Validators.isNullOrUndefined(value)) return;
  const splitedVal = value.toFixed(2).split('.');
  return `${currency} ${FormatNumber(splitedVal[0])},${splitedVal[1]}`;
};

const Compare = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const SortByValue = (array, value, mutation, order = Order.ASC) => {
  if (array.length === 0) return array;
  const sortedArray = array.sort((a, b) => {
    const values = mutation ? [mutation(a[value]), mutation(b[value])] : [a[value], b[value]];
    return Compare(...values);
  });
  return order === Order.ASC ? sortedArray : sortedArray.reverse();
};

const UrlToHref = (value) => {
  const hasUrl = Validators.isUrl(value);
  const url = hasUrl ? value : null;
  return (
    <a className="img-href" href={url} target="_blank" rel="noopener noreferrer">
      <Icon name={`${!hasUrl ? 'no-' : ''}image`} />
    </a>
  );
};

const GetTranslatedCalendarWeekdaysArray = (isShort = false) => {
  return Object.values(daysOfTheWeek).map((m) => (isShort ? m.slice(0, 1) : m));
};

const GetTranslatedCalendarMonthArray = (isShort = false) => {
  return months.map((m) => (isShort ? m.slice(0, 3) : m));
};

const GetTranslatedCalendarLabels = () => calendarLabels;

const GetTranslatedStatus = (status) => {
  return userStatus[status] || status;
};

const GetDate = (date) => {
  return date ? new Date(date) : new Date();
};

const GetIsoDate = (date) => {
  const newDate = date ? new Date(date) : new Date();
  return newDate.toISOString().replace(Regex.isoDate, '$1');
};

const TranslateDayOfTheWeek = (dayOfTheWeek, captalize = true, short = true) => {
  if (!dayOfTheWeek || typeof dayOfTheWeek !== 'string') return;

  const lowerCase = dayOfTheWeek.toLowerCase();
  const translatedDay = daysOfTheWeek[lowerCase];
  let day = translatedDay;

  if (!short && !/^(sat|sun)/i.test(lowerCase)) day += '-feira';

  if (!captalize) day = day[0].toLowerCase() + day.slice(1);

  return day;
};

export default {
  AddWordBreakers,
  RemoveCopiedWordBreakers,
  FormatNumber,
  FormatMoney,
  FormatDate,
  FormatTime,
  FormatDateTime,
  FormatTimeString,
  FormatCPF,
  FormatPhone,
  DescribeTime,
  DescribeTimeString,
  TimeToSeconds,
  TimeStringToSeconds,
  SecondsToTime,
  Order,
  TotalizerType,
  CustomJoin,
  SortByValue,
  UrlToHref,
  GetDate,
  GetIsoDate,
  TranslateDayOfTheWeek,
  GetTranslatedCalendarWeekdaysArray,
  GetTranslatedCalendarMonthArray,
  GetTranslatedCalendarLabels,
  GetTranslatedStatus
};
