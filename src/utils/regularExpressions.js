const isoDate = /^(.+)T.+$/;
const wordBreaker = /[\u200B]/g;
const wordBoundry = /(?!^\w|\w*$)\b([\w\u00C0-\u00FF]+)\b/gi;
const formatCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/;
const formatDate = /(\d{4}).(\d{0,2}).(\d{0,2}).+/;
const formatTime = /.+T(\d{2}).(\d{2}).(\d{2}).*/;
const formatPhone = /(0?\d{2})(\d{4,5})(\d{4})/;
const timeString = /^(\d{2}):(\d{2})(?::(\d{2}))?$/;
const formatNumber = /(?=(\d{3})+(?!\d))/g;
const validUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
const urlLastState = /^(.*\/)(.+)$/;

export default {
  isoDate,
  wordBreaker,
  wordBoundry,
  formatCPF,
  formatDate,
  formatTime,
  formatPhone,
  timeString,
  formatNumber,
  validUrl,
  urlLastState
};
