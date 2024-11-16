
import  movies from "./data.js";

const data = (() => {
  return {
    render() {
      const htmlListMovie = movies.Movies.slice(218).map((m) => {
        return `
        <div class="col">
        <div style="display:flex;gap:10px">
        <p>${m.title}</p>        
        </div>
        <img src=${m.image} alt="anh" width=150>
        <span>Năm Phát Hành: ${m.year}</span>
        </div>
        `;
      }, "").join("");
      document.querySelector(".search_input").innerHTML = htmlListMovie;
    },
    innit() {
      this.render();
    },
    renderSilder() {
     
      const htmlDataSlider = movies.Movies.slice(230).map((m,i) => {
          return `
            <div class="carousel-item ">
                <div class="silder_anh">
                    <img src=${m.image} alt="anh">
                </div>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${m.directorList.map((m)=>m.name)}</h5>
                </div>
            </div>
            `;
        }, "")
        .join("");
        console.log(movies.Movies.length)
      document.querySelector(".silder-one").innerHTML = htmlDataSlider;
    },
    inits() {
      this.renderSilder();
    },
  };
})();
data.inits();
data.innit();

function Onchange() {
  alert('ji')
  const name = document.getElementById("search_movie").value.toLowerCase();
  const names = movies.Movies.map((m, i) => {
    if (
      m.directorList.map((m)=>m.name).toLowerCase().includes(name) ||
      m.title.toLocaleLowerCase().includes(name)
    ) {
      document.querySelector(".silder_content").style.display = "none";
      return `
      
      <div class="col">
      <div style="display:flex;gap:10px">
      <img src=${m.image} height=500px>
      </div>
      <span style="margin-right:10px">${m.name}</span>
      <span>Năm Phát Hành: ${m.manufacture}</span>
      </div>
        `;
    }
  });
  document.querySelector(".search_input").innerHTML = names.join(" ");
  document.querySelector(".silder_content").style.display = "block";
}

