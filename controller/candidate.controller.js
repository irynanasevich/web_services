const db = require('../db')

class CandidateController {
    async createCandidate(req, res){
        const {numCandidate, name, surname, yearOfBirth} = req.body;
        const newCandidate = await db.query(`INSERT INTO candidate (numCandidate, name, surname, yearOfBirth) VALUES ($1, $2, $3, $4) RETURNING *`, [numCandidate, name, surname, yearOfBirth]);
        res.json(newCandidate.rows[0]);
    }

    async getCandidates(req, res){
        const users = await db.query(`SELECT * FROM candidate`);
        res.json(users.rows);
    }

    async getOneCandidate(req, res){
        const id = req.params.id;
        const candidate = await db.query(`SELECT * FROM candidate WHERE id=$1`, [id]);
        res.json(candidate.rows[0]);
    }

    async updateCandidate(req, res){
        const {id, numCandidate, name, surname, yearOfBirth} = req.body;
        const candidate = await db.query(
            `UPDATE candidate SET numCandidate=$1, name= $2, surname=$3, yearOfBirth=$4  WHERE id = $5 RETURNING *`, [numCandidate, name, surname, yearOfBirth, id]
        );
        res.json(candidate.rows[0]);
    }

    async deleteCandidate(req, res){
        const id = req.params.id;
        const candidate = await db.query(`DELETE FROM candidate WHERE id=$1`, [id]);
        res.json(candidate.rows[0]);
    }
}

module.exports = new CandidateController()
