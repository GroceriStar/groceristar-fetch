'use strict'

const debug = require('debug')

let tableName = 'user'

// let attributes = [
//   'userId'
// ]

// @TODO this is a duplicate
function assignAdmin (options, adminId) {
  let server
  let database
  let raven
  // @TODO enable it again
  // { server, database, raven } = options;

  // User        = server.models.user;
  let Role = server.models.Role
  let RoleMapping = server.models.RoleMapping
  // database    = server.datasources.recipeDS;

  database.automigrate('Role', function (err) {
    if (err) return err

    Role.create({ name: 'admin' })
      .then(function (role) {
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: adminId
        }, function (principal) {
          console.log('Principal', principal)
        })
      }).catch(function (err) {
        raven.captureException('admin was not assigned')
        throw err
      })
  })
  debug('admin was created')
};

const attachRecipesToUsers = () => {
  // recipes.forEach(function(recipe){
  // recipe.updateAttribute('userId', users[2].id);

  // });
}

const attachMenusToUsers = (users, menus) => {
  // helper.attach(users, menus, attributes[0])
}

module.exports = {
  // get: get,
  tableName: tableName,
  assignAdmin: assignAdmin,
  attachRecipesToUsers: attachRecipesToUsers,
  attachMenusToUsers: attachMenusToUsers
}
