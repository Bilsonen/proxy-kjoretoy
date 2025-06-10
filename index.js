import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/proxy/kjoretoydata', async (req, res) => {
  const kjennemerke = req.query.kjennemerke;
<<<<<<< HEAD
  if (!kjennemerke) return res.status(400).json({ error: 'Manglende kjennemerke' });
=======
  if (!kjennemerke) {
    return res.status(400).json({ error: 'Manglende kjennemerke' });
  }
>>>>>>> 0f793b7 (Initial commit med proxy-kode)

  const apiUrl = `https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=${encodeURIComponent(kjennemerke)}`;

  try {
<<<<<<< HEAD
    const response = await fetch(apiUrl, {
      headers: { 'SVV-Authorization': process.env.SVV_API_KEY }
    });

    if (!response.ok) return res.status(response.status).json({ error: 'Feil fra Statens vegvesen API' });

    const data = await response.json();
    res.json(data);

=======
    console.log('Bruker API-nøkkel:', process.env.SVV_AUTHORIZATION);

    const response = await fetch(apiUrl, {
      headers: {
        'SVV-Authorization': process.env.SVV_AUTHORIZATION
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Feil fra Statens vegvesen API' });
    }

    const data = await response.json();
    res.json(data);
>>>>>>> 0f793b7 (Initial commit med proxy-kode)
  } catch (error) {
    res.status(500).json({ error: 'Serverfeil', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy kjører på port ${port}`);
});
