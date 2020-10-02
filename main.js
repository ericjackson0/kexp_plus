function fetchData() {
  fetch(
    'https://api.kexp.org/v2/plays/?format=json&limit=1&ordering=-airdate&airdate_before=2020-10-01T02:09:00.000Z',
    {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-US,en;q=0.9',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
      referrer: '',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
    },
  )
    .then(response => response.json())
    .then(data => {
      console.log({ data });
      const { results } = data;
      console.log({ results });
      const resultDiv = document.getElementById('fetchResult');
      const newData = document.createTextNode(JSON.stringify(results));
      resultDiv.appendChild(newData);
    })
    .catch(error => {
      console.log({ error });
    });
}
