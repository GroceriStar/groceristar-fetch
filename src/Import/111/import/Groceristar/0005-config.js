

/// sample, related to groceristar api server.

var db_name = 'groceryDS';

var lbTables = [
	// 'User',
	'accessToken',
	// 'AccessToken',
	'ACL', 'RoleMapping',
	'Role',

	// custom tables
	'user', 'userCredential', 'userIdentity',

	// 'userGrocery', 'userFav',
	'Ingredient', 'Grocery', 'Department',

];

module.exports = {
  db_name: db_name,
  lbTables: lbTables
}
