const model = require('./model')

module.exports = {
   Query: {
      voters: async (_, {age}) => {
         if(!age || age == 'all') {
            return await model.allVoters()
         }
         else {
            const age_1 = age.split('-')[0]
            const age_2 = age.split('-')[1]
            return await model.sortby_AGE(age_1, age_2)
         }
      }
   },
   Mutation: {
      newVoters: async (_, { name, age, address }) => {
         const newVoter = await model.addVoters(name, age, address)
         return newVoter
      }
   },
   Voters: {
      id: global => global.voter_id,
      name: global => global.voter_name,
      age: global => global.voter_age,
      address: global => global.voter_address
   }
}