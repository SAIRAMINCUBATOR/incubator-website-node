import React from "react";

const CollabPage = () => {
  const html = `
  <style>
  .main-gallery{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    gap: 5%;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(173, 204, 233, 0.5) 100%);
    box-shadow: inset 0px 0px 15px #ADCCE9;
    max-width: 100%;
}

.maingal-class{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6%;
    padding: 1%;
}

.maingal-class-1{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6%;
    padding: 3%;
}

.maingal-main{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    padding: 0%;
}

.maingal-main h2{
    text-align: center;
}

.maingal-class1{
    justify-content: center;
    align-items: center;
}

.maingal-class2{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1%;
}

.maingal-class3{
    display: flex;
    justify-content: center;
    align-items: center;
}

.maingal-img{
    left: 10%;
}

.maingal-img h2{
    text-align: center;
    font-size: medium;
    font-weight: bold;
}

.incubation-points p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 26px;
  color: #454545;
  text-align: justify;
}

.our-projects {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  color: rgba(69, 69, 69, 0.8);
}

.main-gallery1{
    display: flex;
    flex-direction: column;
    padding: 2%;
    width: 100%;
    /* justify-content: space-between; */
    align-items: center;
    max-width: 100%;
    gap: 25px;
    background: linear-gradient(270deg, rgba(173, 204, 233, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}

.collab{
    text-align: center;
}
</style>
  <section class="main-gallery" id="main-gallery">
 
  <h2 class="our-projects" data-splitting>INCUBATION COLLABORATION</h2> <br><br>
  <div class="maingal-class-1">
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img1.jpg" height="" width="200" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img2.png" height="" width="" alt=""></div>
          </div>
          <p>(R&D Organization)</p>
      </div>
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img3.png" height="" width="185" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img4.png" height="" width="175" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img5.png" height="" width="150" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img6.png" height="100" width="120" alt=""></div>
          </div>
          <p>(Incubatee Receiving Supports From)</p>
      </div>
  </div>
  <div class="maingal-class-1">
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img7.png" height="100" width="195" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img8.png" height="150" width="" alt=""></div>
          </div>
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img9.png" height="100" width="195" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img10.jpg" height="150" width="" alt=""></div>
          </div>
          <p>(Association)</p>
      </div>
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img11.png" height="275 " width="400" alt=""></div>
          </div>
          <p>(Product)</p>
      </div>
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img12.jpg" height="" width="100" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img13.png" height="" width="100" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img14.png" height="" width="100" alt=""></div>
          </div>
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img15.png" height="" width="185" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img16.png" height="" width="175" alt=""></div>
          </div>
          <p>(Incubation Partners)</p>
      </div>
  </div>
  <div class="maingal-class-1">
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img17.png" height="100" width="300" alt=""></div>
          </div>
          <p>(Networking)</p>
      </div>
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img19.png" height="100" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img20.png" height="100" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img21.png" height="100" width="" alt=""></div>
          </div>
          <p>(1.25 Crores Funds Raised From)</p>
      </div>
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img18.png" height="" width="" alt=""></div>
          </div>
          <p>(Legal & IPR Support)</p>
      </div>
  </div>
  <div class="maingal-class-1">
      <div class="collab">
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img22.png" height="100" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img23.png" height="100" width="" alt=""></div>
          </div>
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img24.png" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img25.png" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img26.png" height="" width="" alt=""></div>
          </div>
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img27.png" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img28.jpg" height="" width="" alt=""></div>
          </div>
          <div class="maingal-main">
              <div class="maingal-img"><img src="/collaborations/img29.jpg" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img30.png" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img31.jpg" height="" width="" alt=""></div>
              <div class="maingal-img"><img src="/collaborations/img32.png" height="" width="" alt=""></div>
          </div>
          <p>(Government Support)</p>
      </div>
  </div>
</section>
`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default CollabPage;
