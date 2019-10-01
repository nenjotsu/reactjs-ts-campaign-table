import moment from 'moment';

export const DateFormat: string = 'YYYY-MM-DD';
export const UpdatesPending: string = 'UpdatesPending';
export const UpdatesComplete: string = 'UpdatesComplete';

export const abbrNum = (number: number, decPlaces: number = 1) => {
  decPlaces = Math.pow(10, decPlaces);
  var abbrev = ['k', 'm', 'b', 't'];
  let finalString = number.toString();
  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;
      finalString = number + abbrev[i];
      break;
    }
  }

  return finalString;
};

export const formatDate = (date: string) => moment(date).format('DD/MM/YYYY');

export const addCommas = (nStr: string) => {
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1,$2');
  }
  return x1 + x2;
};

export const SpanConfig = {
  xs: { span: 24 },
  md: { span: 12 },
};
