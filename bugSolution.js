```javascript
const query = { name: 'John Doe' };
const options = { projection: { _id: 0, age: 1 } };
db.collection('users').findOne(query, options, (err, result) => {
if (err) throw err;
if (result) {
  console.log(result.age); // Accessing age only if result is not null
} else {
  console.log('No user found.');
}
});
```