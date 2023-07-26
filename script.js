let inHTML = document.querySelector(".about_your_result");

async function data() {
  const response = await fetch("./data.json");
  const da = await response.json();

    let show = "";

    da.forEach(element => { 
        console.log(element)
        show += ` 
            <div class="container_forEach_result" style="background-color: ${element.backgroundColor}">  

                <div class="iconSide"> 
                    <img src="${element.icon}" /> 
                    <p> ${element.category} </p>
                </div>
                    
                <div class="ratioSide"> 
                    <p> ${element.score} </p>
                    <p> / </p>
                    <p> 100 </p>
                </div>

            </div> 
        `
        inHTML.innerHTML = show;
    });
}


data()