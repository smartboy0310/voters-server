const PG = require('../../lib/postgres')

class Voters extends PG {
   allVoters() {
      return this.fetchAll(`
         SELECT 
               *
         FROM
            voters
      `)
   }
   addVoters(name, age, address) {
      return this.fetch(`
      INSERT INTO 
                  voters (
                     voter_name,
                     voter_age,
                     voter_address
                  )
      VALUES
            ($1, $2, $3) 
      RETURNING *     
      `, name, age, address)
   }
   sortby_AGE(age_1, age_2) {
      return this.fetchAll(`
      SELECT
            *
      FROM
            voters
      WHERE 
            voter_age >= $1 AND voter_age < $2
      `, age_1, age_2)
   }
}

module.exports = new Voters