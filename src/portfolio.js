const renderPortfolio = (data) => {
  $('.portfolio').empty();
  var myDiv = document.getElementById('portfolio');
  let html = ""
  portfolioData.forEach((item) =>{
  html += `
    <div class="portfolio-item">
    <a href=" ${item.url}" target="_blank">
    <img src="${item.image}">
    <h1>${item.title}</h1>
    </a>   
    <p>${item.stack}</p>
    <a href="${item.repo}" target="_blank">
    <p>Repo</p>
    </a>
    </div>
     `
  })
  myDiv.innerHTML = (html);
}
$(document).ready(() => {
	renderPortfolio();
})