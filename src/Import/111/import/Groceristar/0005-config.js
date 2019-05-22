
/// sample, related to groceristar api server.

var dbName = 'groceryDS'

var lbTables = [
  // 'User',
  'accessToken',
  // 'AccessToken',
  'ACL', 'RoleMapping',
  'Role',

  // custom tables
  'user', 'userCredential', 'userIdentity',

  // 'userGrocery', 'userFav',
  'Ingredient', 'Grocery', 'Department'

]

module.exports = {
  dbName: dbName,
  lbTables: lbTables
}
