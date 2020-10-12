function fetchData(page) {
  // Get artist value from input form box
  const artist = document.getElementById('artist').value;

  fetch(
    `https://api.kexp.org/v2/plays/?airdate_after=&airdate_before=&has_comment=&exclude_airbreaks=&show_ids=&host_ids=&song=&song_exact=&artist=${artist}&artist_exact=&album=&album_exact=&label=&label_exact=&recording_id=&ordering=-airdate&offset=${page * 20 - 20}`,

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
      const { results, previous, next } = data;

      // Parse our data
      const parsedResults = results.map(result => {
        return `${result.artist} - ${result.song}<br/>${result.airdate}<br/>${result.comment}`;
      });
      console.log({ parsedResults });

      const resultDiv = (document.getElementById('fetchResult').innerHTML = parsedResults.join(
        '<br/><br/>',
      ));
    })
    .catch(error => {
      console.log({ error });
    });
}
