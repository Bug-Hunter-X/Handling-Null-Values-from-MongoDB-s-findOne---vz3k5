```javascript
const query = { name: 'John Doe' };
const options = { projection: { _id: 0, age: 1 } };
db.collection('users').findOne(query, options, (err, result) => {
if (err) throw err;console.log(result); // This will log the result if found or null if not found
});
```