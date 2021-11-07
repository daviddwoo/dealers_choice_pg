module.exports = function(post) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="button">
          <a href='/' id="rosterbtn"><button id="btn"> Back to Roster</button></a>
        </div>
        <div>
          <div class="playerImage">
            <img src=".${post.postimg}" id="postImg">
          </div>
          <div class="playerDetails">
            <h1 class="posth1">
              <span>NAME</span>: ${post.name}<br>
              <span>AGE</span>: ${post.age} years<br>
              <span>HEIGHT</span>: ${post.height}<br>
              <span>WEIGHT</span>: ${post.weight}<br>
              <span>POSITION</span>: ${post.position}<br>
              <span>BIO</span>: ${post.content}
            </h1>
          </div>
        </div>
      </body>
    </html>
    `
}

