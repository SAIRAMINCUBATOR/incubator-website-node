import React from "react";

const FundingPage = () => {
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
.heading{
    font-size: 1.5rem;
    font-weight: bold;
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
        <h2 class="our-projects" data-splitting>GALLERY</h2>
        <br><br>
        <h2 class="heading">EXISTING FACILITY</h2>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/ExistingFacilities/img1.jpg" height="200" width="600" alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img2.jpg" height="200" width="600" alt=""></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/ExistingFacilities/img3.jpg" height="200" width="600" alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img4.png" height="200" width="600" alt=""></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/ExistingFacilities/img5.jpg"  alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img6.jpg"  alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img7.jpg"  alt=""></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/ExistingFacilities/img8.jpg"  alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img9.jpg"  alt=""></div>
            <div class="maingal-img"><img src="/ExistingFacilities/img10.jpg"  alt=""></div>
        </div>
    </section>

    <section class="main-gallery1" id="main-gallery1">
        <br><br>
        <h2 class="heading">INCUBATION INFRASTRUCTURE</h2>
        <div class="maingal-class">
            <div class="maingal-main">
                <div class="maingal-class1">
                    <div class="maingal-img"><img src="/IncubationInfrastructure/img1.jpg"  height="300" width="400" alt=""></div>
                </div>
                <div class="maingal-class1">
                    <div class="maingal-class2">
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img2.jpg"  height="200" width="300" alt=""></div>
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img3.jpg"  height="200" width="300" alt=""></div>
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img4.jpg"  height="200" width="200" alt=""></div>
                    </div>
                    <div class="maingal-class">
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img5.jpg"  height="200" width="300" alt=""></div>
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img6.jpg"  height="200" width="225"  alt=""></div>
                        <div class="maingal-img"><img src="/IncubationInfrastructure/img7.jpg"  height="200" width="200"  alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/IncubationInfrastructure/img8.png"  height="200" width="260" alt=""></div>
            <div class="maingal-img"><img src="/IncubationInfrastructure/img9.jpg" height="200" width="265" alt=""></div>
            <div class="maingal-img"><img src="/IncubationInfrastructure/img10.jpg" height="200" width="300" alt=""></div>
            <div class="maingal-img"><img src="/IncubationInfrastructure/img11.jpg" height="200" width="260" alt=""></div>
        </div>
    </section>

    <section class="main-gallery" id="main-gallery">
        <br><br>
        <h2 class="heading">FACILITY</h2>
        <div class="maingal-class">
            <div class="maingal-class1">
                <div class="maingal-class2">
                    <div class="maingal-img"><img src="/Facilities/img1.png" height="200" width="300" alt=""><h2>PCB Milling Machine</h2></div>
                    <div class="maingal-img"><img src="/Facilities/img2.png" height="200" width="300" alt=""><h2>3D Resin Printer</h2></div>
                </div>
                <div class="maingal-class">
                    <div class="maingal-img"><img src="/Facilities/img3.png" height="200" width="300" alt=""><h2>Laser Cutting Machine</h2></div>
                    <div class="maingal-img"><img src="/Facilities/img4.png" height="200" width="300" alt=""><h2>3D Printing & Milling</h2></div>
                </div>
            </div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/Facilities/img5.png" height="200" width="300" alt=""><h2>CNC Lathe</h2></div>
            <div class="maingal-img"><img src="/Facilities/img6.png" height="200" width="150" alt=""><h2>CNC Mill</h2></div>
            <div class="maingal-img"><img src="/Facilities/img7.png" height="200" width="150" alt=""><h2>CMM</h2></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/Facilities/img8.jpg" height="200" width="300"  alt=""><h2>Cooling Centrifuge</h2></div>
            <div class="maingal-img"><img src="/Facilities/img9.jpg" height="200" width="150" alt=""><h2>Co2 Incubator</h2></div>
            <div class="maingal-img"><img src="/Facilities/img11.jpg" height="200" width="150"  alt=""><h2>Stir Casting Machine</h2></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/Facilities/img12.jpg" height="200" width="150" alt=""><h2>Orbital Shaking Incubator</h2></div>
            <div class="maingal-img"><img src="/Facilities/img13.jpg" height="250" width="150" alt=""><h2>Laminar Air Flow</h2></div>
            <div class="maingal-img"><img src="/Facilities/img14.jpg" height="250" width="150"  alt=""><h2>Quick Freezer</h2></div>
        </div>
        <div class="maingal-class">
            <div class="maingal-img"><img src="/Facilities/img10.jpg" height="200" width="300" alt=""><h2>UV Spectrometer</h2></div>
        </div>
    </section>

    <section class="main-gallery1" id="main-gallery1">
        <br><br>
        <h2 class="heading">AUDITORIUM</h2>
        <div class="maingal-class">
            <div class="maingal-main">
                <div class="maingal-class1">
                    <div class="maingal-class2">
                        <div class="maingal-img"><img src="/Auditoriums/img1.png"  height="300" width="500" alt=""></div>
                        <div class="maingal-img"><img src="/Auditoriums/img2.png"  height="300" width="500" alt=""></div>
                    </div>
                    <div class="maingal-class">
                        <div class="maingal-img"><img src="/Auditoriums/img3.png"  height="300" width="400" alt=""></div>
                        <div class="maingal-img"><img src="/Auditoriums/img4.png"  height="300" width="400"  alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default FundingPage;
