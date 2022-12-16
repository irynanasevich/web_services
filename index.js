const express = require('express');
const cors = require('cors');
const candidateRouter = require('./routes/candidate.routes');
const electionRouter = require('./routes/election.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', candidateRouter);
app.use('/api', electionRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
