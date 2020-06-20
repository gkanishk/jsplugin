var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://gkanishk.github.io/jsplugin/css/style.css';  
head.appendChild(link); 

var script = document.getElementById('emb')
var data= script.getAttribute("data");
console.log(data+" hui");
document.write(`
<div class="card">
<div id="dimg"><img src="${data}/favicon.ico" id="uimg"/></div>
<div class="container">
<a href=${data} target="_blank" rel="noreferrer noopener" class=button1>Visit</a>
<h4>${data}</h4>
</div>
</div>`);
