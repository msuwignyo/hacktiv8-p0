/**
 * <h1 id="fill-me"></h1> 
 * menjadi <h1 id="fill-me">HALO!</h1>
 */
let h1 = document.getElementById("fill-me");
h1.textContent = 'HALO!';

/**
 * <p className="change-all-of-me"></p> 
 * menjadi <p className="change-all-of-me">HALO JUGA!</p>
 */
let listOfPar = document.getElementsByClassName("change-all-of-me");
for (let par of listOfPar) {
  par.textContent = 'HALO JUGA!';
}

/**
 * <h2>Change the Inside of H2!</h2> 
 * menjadi <h2>Apa Kabar!</h2>
 */
let h2 = document.getElementById("container")
                 .getElementsByTagName("h2")[0];
h2.textContent = 'Apa Kabar!';