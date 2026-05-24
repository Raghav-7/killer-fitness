export default async function handler(req, res) {
  const urls = [
    'https://killer-fitness-chennai.surge.sh',
    'https://play-fitness-chennai.surge.sh',
    'https://sayan-fitness-chennai.surge.sh'
  ];

  try {
    const promises = urls.map(url => fetch(url).catch(e => console.error(e)));
    await Promise.all(promises);
    res.status(200).json({ status: 'Surge pinged successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to ping.' });
  }
}
