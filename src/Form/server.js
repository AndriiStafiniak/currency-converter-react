const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/latest', async (req, res) => {
   const { apiUrl } = req.query;
   try {
      const response = await fetch(`${apiUrl}`);
      const data = await response.json();
      res.json(data);
   } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
   }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running at port ${PORT}`);
});
