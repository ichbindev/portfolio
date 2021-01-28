export const sendEmail = (body) => {
  const env = process.env.NODE_ENV;
  const url = `/lambda/${env}/email/send`;
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
}