// =======================================
// Challenge 1
// =======================================

const p = document.querySelectorAll('p');
p.forEach(p => p.style.color = 'red' );

// =======================================
// Challenge 2
// =======================================

const theusers = [
    'George', 'Brad', 'Mary'
];

const ul = document.createElement('ul');
theusers.forEach(user => {
  const li = document.createElement('li');
  li.textContent = user;
  ul.append(li);
});
document.body.append(ul);
// Generate unordered list of users

// =======================================
// Challenge 3
// =======================================

// Generate todo unordered list with checkboxes
 const todos = [
    {title: 'Todo 1', completed: false},
    {title: 'Todo 2', completed: true},
    {title: 'Todo 3', completed: false},
];
const ul = document.createElement('ul');
const createEl = (title,completed) => {
  const li = document.createElement('li');
  li.innerHTML = `
      <div>
        <span>${title}</span>
        <input type="checkbox" ${completed ? 'checked' : ''}>
      </div>
  `;
  return li;
}
todos.forEach(todo => {
  ul.append(createEl(todo.title,todo.completed));
});
document.body.append(ul);

const newTodo = {title: 'new Todo', completed: false};
// // Insert todo at position 2
ul.insertBefore(createEl(newTodo.title,newTodo.completed),ul.children[1]);



// =======================================
// Challenge 4
// =======================================

const users = [
    {username: 'zura', email: 'zura@example.com'},
    {username: 'brad', email: 'brad@example.com'},
    {username: 'mary', email: 'mary@example.com'},
]
// Generate table
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
thead.innerHTML = `
<tr>
<th>Username</th>
<th>E-mail</th>
</tr>
`;
users.forEach(user => {
      const tr = document.createElement('tr');
      tr.style.border = '1px solid black';
      tr.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      `;
      tbody.append(tr);
});
table.append(thead);
table.append(tbody);
document.body.append(table);