const keyInsert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  keyInsert.innerHTML = `
  <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Kecode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
  `;
});
