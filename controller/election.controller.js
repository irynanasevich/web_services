const db = require('../db');
class ElectionController {

    async createElection(req, res){
        const {yearOfElection, isHead, candidate_id} = req.body;
        const newPost = await db.query(
            `INSERT INTO election (yearOfElection, isHead, candidate_id) VALUES ($1, $2, $3) RETURNING *`, [yearOfElection, isHead, candidate_id]
        );
        res.json(newPost.rows[0]);

    }

    async getElectionsByCandidate (req, res){
        const {id} = req.query;
        const getElections = await db.query(`SELECT yearOfElection, isHead FROM election WHERE candidate_id=$1`, [id]);
        res.json(getElections.rows);

    }

}

module.exports = new ElectionController();
