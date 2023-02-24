
async function getData(){
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data)
const users=document.getElementById("users")
users.innerHTML=`<div>
<h1>${data[0].title}</h1>
<h1>${data[1].title}</h1>
<h1>${data[0].title}</h1>
</div>`
}
getData();