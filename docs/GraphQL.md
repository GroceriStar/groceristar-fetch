---
id: GraphQL
title: GraphQL
---

####  getDepartmentsGraphQL()
```
graphQL.getDepartmentsGraphQL()
```
Result
```
[ { department_id: 1,
    name: 'Fresh vegetables',
    desc: 'desc for department1',
    created_at: 1547670651329,
    updated_at: 1547670651329 },
  { department_id: 2,
    name: 'Condiments / sauces',
    desc: 'desc for department1',
    created_at: 1547670651329,
    updated_at: 1547670651329 },
  { department_id: 3,
    name: 'Dairy',
    desc: 'desc for department1',
    created_at: 1547670651329,
    updated_at: 1547670651329 },
...
]
```
getDepartmentsGraphQLKey()
Result
```
[ { department_id: '43c59060-19ca-11e9-ba92-1de8759e63a0',
    name: 'Fresh vegetables',
    desc: 'desc for department1',
    created_at: 1547669212262,
    updated_at: 1547669212262 },
  { department_id: '43c59061-19ca-11e9-ba92-1de8759e63a0',
    name: 'Condiments / sauces',
    desc: 'desc for department1',
    created_at: 1547669212262,
    updated_at: 1547669212262 },
  { department_id: '43c59062-19ca-11e9-ba92-1de8759e63a0',
    name: 'Dairy',
    desc: 'desc for department1',
    created_at: 1547669212262,
    updated_at: 1547669212262 },
  { department_id: '43c59063-19ca-11e9-ba92-1de8759e63a0',
    name: 'Cheese',
    desc: 'desc for department1',
    created_at: 1547669212262,
    updated_at: 1547669212262 },

```
```groceristar.getGroceryGraphQLKey()```
Result
```
[ { grocery_id: '75abb7b0-1a4e-11e9-b4c7-e1d68a07bcac',
    name: 'Ultimate Grocery List',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547725989547,
    updated_at: 1547725989547,
    id_1: 1,
    favs: false },
  { grocery_id: '75abb7b1-1a4e-11e9-b4c7-e1d68a07bcac',
    name: 'Clean Fatiring',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547725989547,
    updated_at: 1547725989547,
    id_1: 1,
    favs: false },
  { grocery_id: '75abb7b2-1a4e-11e9-b4c7-e1d68a07bcac',
    name: 'Grocery List Essentials',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547725989547,
    updated_at: 1547725989547,
    id_1: 1,
    favs: false },
...
]
```
---
`groceristar.getGroceryGraphQL()`
Result
```
[ { grocery_id: 1,
    name: 'Ultimate Grocery List',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547727639587,
    updated_at: 1547727639587,
    id_1: 1,
    favs: false },
  { grocery_id: 2,
    name: 'Clean Fatiring',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547727639587,
    updated_at: 1547727639587,
    id_1: 1,
    favs: false },
  { grocery_id: 3,
    name: 'Grocery List Essentials',
    img: false,
    desc: false,
    slug: false,
    created_at: 1547727639587,
    updated_at: 1547727639587,
    id_1: 1,
    favs: false },
...
]
```
---
`groceristar.getIngredientsGraphQL()`
Result
```
[ { ingredient_id: 1,
    favs: '',
    name: 'Asparagus',
    description: 'description',
    custom: false,
    created_at: 1547729556095,
    updated_at: 1547729556095,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: 2,
    favs: '',
    name: 'Broccoli',
    description: 'description',
    custom: false,
    created_at: 1547729556095,
    updated_at: 1547729556095,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: 3,
    favs: '',
    name: 'Carrots',
    description: 'description',
    custom: false,
    created_at: 1547729556095,
    updated_at: 1547729556095,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: 4,
    favs: '',
    name: 'Cauliflower',
    description: 'description',
    custom: false,
    created_at: 1547729556095,
    updated_at: 1547729556095,
    id_1: 1,
    department_id: 1 },
...
]
```
---
`groceristar.getIngredientsGraphQLKey()`
```
[ { ingredient_id: '103a1670-1a57-11e9-af5d-63a3005c23d7',
    favs: '',
    name: 'Asparagus',
    description: 'description',
    custom: false,
    created_at: 1547729684838,
    updated_at: 1547729684838,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: '103c6060-1a57-11e9-af5d-63a3005c23d7',
    favs: '',
    name: 'Broccoli',
    description: 'description',
    custom: false,
    created_at: 1547729684839,
    updated_at: 1547729684839,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: '103c8770-1a57-11e9-af5d-63a3005c23d7',
    favs: '',
    name: 'Carrots',
    description: 'description',
    custom: false,
    created_at: 1547729684839,
    updated_at: 1547729684839,
    id_1: 1,
    department_id: 1 },
  { ingredient_id: '103c8771-1a57-11e9-af5d-63a3005c23d7',
    favs: '',
    name: 'Cauliflower',
    description: 'description',
    custom: false,
    created_at: 1547729684839,
    updated_at: 1547729684839,
    id_1: 1,
    department_id: 1 },
  ...
]
```
---

`groceristar.getUsersGraphQL()`
Result
```
[ { userId: 1,
 favs: false,
 ingredient_id: 1,
 grocery_id: 1 },
  { userId: 2,
favs: false,
ingredient_id: 1,
grocery_id: 1 },
  { userId: 3,
favs: false,
ingredient_id: 1,
grocery_id: 1 }
]
```
---
`groceristar.getUsersGraphQLKey()`
```
[ { userId: 'acc92b60-1a58-11e9-9637-39d66ad43fc6',
    favs: false,
    ingredient_id: 1,
    grocery_id: 1 },
  { userId: 'acc95270-1a58-11e9-9637-39d66ad43fc6',
    favs: false,
    ingredient_id: 1,
    grocery_id: 1 },
  { userId: 'acc95271-1a58-11e9-9637-39d66ad43fc6',
    favs: false,
    ingredient_id: 1,
    grocery_id: 1 } ]

```
