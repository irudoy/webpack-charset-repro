good.innerHTML = `
<h1 style="color:green;">Not broken</h1>
абвгдеёжзийклмнопрстуфхцчшщъыьэюя<br/>
АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ<br/>
abcdefghijklmnopqrstuvwxyz<br/>
ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
`;

setTimeout(() => import('./module'), 1000);