const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div >
    <table>
    <tr>
    <td>key</td>
    <td>keycode</td>
    <td>code</td>
    </tr>
     <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    
    </div>`
})