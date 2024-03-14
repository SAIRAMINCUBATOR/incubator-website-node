import React from "react";

const SDGpage = () => {
  const html = `
  <style>
  
.sdg-goals{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1%;
    /* outline: 1px solid red; */
    gap: 10px;
    position: relative;
}

.vr{
    border: none;
    width: 2px;
    height: 90%;
    background: rgba(0, 0, 0, 0.397);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -5;
}

.vr-nav{
    border: none;
    width: 2px;
    height:30rem;
    background: rgba(0, 0, 0, 0.397);
    position: fixed;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -8;
}

.sdg-nav{
    position: fixed;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    z-index: 50;
    gap: 3rem;
    left: 5%;
}

.sdg-nav-link{
    text-decoration: none;
    color: #454545;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    padding: 1.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.sdg-nav-link:focus{
    background-color: #4389fa;
    color: #cccccc;
}

.sdg-goal{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;
    /* outline: 1px solid red; */
    padding: 1%;
    height: max-content
}

.sdg-goal-card{
    padding: 1%;
    background: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    position: relative;
    overflow-y: hidden;
    cursor: pointer;
    transition: transform 0.5s ease;
    transform: translateX(3rem);
    border-radius: 5px;
}

.sdg-goal-card:hover .click-to-reveal{
    transform: translateY(0)
}

.click-to-reveal{
    position: absolute;
    width: 100%;
    height: 3rem;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgb(0, 0, 0, 0.04), rgb(0, 0, 0, 0.1) , rgb(0, 0, 0, 0.5));
    color: rgb(236, 236, 236);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    transform: translateY(100%);
    font-size: 1rem;
}

.sdg-goal-card img{
    aspect-ratio: 1;
    width: 16rem;
}
.funds{
    display: flex;
    padding: 5%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(173, 204, 233, 0.5) 100%);
    box-shadow: inset 0px 0px 15px #ADCCE9;
    gap: 5%;
    position: relative;
    overflow: hidden;
}
.our-projects {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: rgba(69, 69, 69, 0.8);
}

.sdg-goal-project{
    background: white;
    display: flex;
    height: 16rem;
    max-height: 16rem;
    overflow: hidden;
    padding: 3rem;
    width: 0;
    opacity: 0;
    border-radius: 5px;
    transition: width 0.5s ease, opacity 0.3s ease 0.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"]{
    opacity: 0;
}

input[type="checkbox"]:checked ~ .sdg-goal-project{
    width: 25rem; /*temporary*/
    opacity: 1;
}

input[type="checkbox"]:not(:checked) ~ .sdg-goal-project{
    transition: opacity 0.3s ease, width 0.5s ease;
    opacity: 0;
    width: 0;
}

input[type="checkbox"]:checked ~ .sdg-goal-card {
    /* transition: transform 0.5s ease 0.5s; */
    transform: translateX(0);
}

input[type="checkbox"]:checked ~ .sdg-goal-card .click-to-reveal{
    transform: translateY(100%)
}</style>
  <hr class="vr-nav">
  <div class="sdg-nav">
      <a href="#sdg-one" class="sdg-nav-link">1</a>
      <a href="#sdg-two" class="sdg-nav-link">2</a>
      <a href="#sdg-three" class="sdg-nav-link">3</a>
      <a href="#sdg-four" class="sdg-nav-link">4</a>
      <a href="#sdg-five" class="sdg-nav-link">5</a>
      <a href="#sdg-six" class="sdg-nav-link">6</a>
  </div>
  <section id="fund" class="funds">
      <img src="images/Illustrations/14.png" alt="" class="fundillus fundillus-static">
      <h2 id="sdg-one" class="our-projects" data-splitting>SDG MAPPING</h2>

      <div class="sdg-goals">
          <hr class="vr">
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-1">
              <label for="sdg-1" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-01.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-2">
              <label for="sdg-2" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-02.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-3">
              <label for="sdg-3" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-03.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div id="sdg-two" class="sdg-goal">
              <input type="checkbox" id="sdg-4">
              <label for="sdg-4" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-04.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-5">
              <label for="sdg-5" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-05.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-6">
              <label for="sdg-6" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-06.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div id="sdg-three" class="sdg-goal">
              <input type="checkbox" id="sdg-7">
              <label for="sdg-7" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-07.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-8">
              <label for="sdg-8" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-08.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>

          <div class="sdg-goal">
              <input type="checkbox" id="sdg-9">
              <label for="sdg-9" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-09.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div id="sdg-four" class="sdg-goal">
              <input type="checkbox" id="sdg-10">
              <label for="sdg-10" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-10.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-11">
              <label for="sdg-11" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-11.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-12">
              <label for="sdg-12" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-12.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div id="sdg-five" class="sdg-goal">
              <input type="checkbox" id="sdg-13">
              <label for="sdg-13" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-13.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-14">
              <label for="sdg-14" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-14.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-15">
              <label for="sdg-15" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-15.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div id="sdg-six" class="sdg-goal">
              <input type="checkbox" id="sdg-16">
              <label for="sdg-16" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-16.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          <div class="sdg-goal">
              <input type="checkbox" id="sdg-17">
              <label for="sdg-17" class="sdg-goal-card">
                  <img src="/sdg/E_SDG_Icons-17.jpg" alt="">
                  <div class="click-to-reveal">
                      Click to reveal →
                  </div>
              </label>
              <div class="sdg-goal-project">
                  <div>
                      <p>content goes here</p>
                  </div>
              </div>
          </div>
          
          
      </div>
  </section>
  <script>


        if(screen.width < 575){
            document.querySelectorAll(".click-to-reveal").forEach((elem)=>{
                elem.innerHTML = \`Click to reveal &nbsp; <i class="fa fa-angle-down"></i>\`
            })
        }

        AOS.init();

        Splitting();
    </script>`;
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default SDGpage;
