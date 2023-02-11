export default function createFormData(data) {
  const formData = new FormData();
  Object.keys(data).forEach(item => formData.set(item, data[item]));
  return formData;
}
