const renderPortfolio = (data) => {
  $('.portfolio').empty();
  var myDiv = document.getElementById('portfolio');
  let html = ""
  portfolioData.forEach((item) =>{
  let url = '';
    if(item.url){
     url =  `
        <a href=" ${item.url}" target="_blank" rel="noopener">
          <span class="link-button">Site</span>
        </a>
      `
    }
  html += `
    <div class="portfolio-item">
      <div class="card">
        <img alt="website image" src="${item.image}"/>
      </div>
      <h1>${item.title}</h1>
      <p>${item.stack}</p>
      <div>
        <a href="${item.repo}" target="_blank" rel="noopener">
        <span class="link-button">Repo</span>
        </a>
        ${url}
      </div>
    </div>
     `
  })
  myDiv.innerHTML = (html);
}
$(document).ready(() => {
	renderPortfolio();
}) 