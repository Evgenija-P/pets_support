import * as yup from 'yup';

const FILE_MAX_SIZE = 8388608;
const ACCEPTABLE_MIMETYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const DATE_REGEX =
  /(^(0+?[1-9]|[12][0-9]|3[01])[-/.](0+?[1-9]|[1][0-12])[-/.]((19|20)\d\d))/;
const PRICE_REGEX = /^[1-9]+[0-9]*$/;

const addNoticeSchema = yup.object({
  title: yup.string().min(2).max(48).required(),

  name: yup.string().min(2).max(16),

  birthdate: yup
    .string()
    .matches(DATE_REGEX, "birthdate must be a 'DD.MM.YYYY' format."),

  breed: yup.string().min(2).max(24),

  sex: yup.string().oneOf(['male', 'female']).required(),

  petImage: yup
    .mixed()
    .test('FILE_SIZE', 'file must be less than 8 mb.', value =>
      value ? value.size < FILE_MAX_SIZE : true
    )
    .test(
      'MIME_TYPE',
      'file must be on of folowing formats: jpeg/jpg/png. ',
      value => (value ? ACCEPTABLE_MIMETYPES.includes(value.type) : true)
    ),

  location: yup.string().required(),

  price: yup
    .string()
    .matches(PRICE_REGEX, "price must be a 'Number' type.")
    .when('categoryName', {
      is: 'sell',
      then: yup.string().required(),
    }),

  comments: yup.string().min(2).max(120),
});

export default addNoticeSchema;
