module.exports = function(data) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>NEW YORK KNICKS</h1>
        <h2>2021 - 2022 ROSTER</h2>
        <div id="knickslogo">
          <img src="./knickslogo.png" id="logo">
        </div>
        <div class="main">
          ${data.map(player => `
          <div class="player">
            <a href="/posts/${player.id}">
              <div id="text">
                <p class="playerText">${player.name}</p>
              </div>
              <img src=${player.img} id="imgPlayer">
            </a>
          </div>
          `).join('')}
        </div> 
      </body>
    </html>
    `
}