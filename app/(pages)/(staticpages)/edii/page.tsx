import React from "react";

const EdiiPage = () => {
  const html = `
  <style>

  .our-projects {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: rgba(69, 69, 69, 0.8);
}

  .why-funds {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    gap: 5%;
    width: 100%;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(173, 204, 233, 0.5) 100%);
    box-shadow: inset 0px 0px 15px #ADCCE9;
}

.why-funds img{
    width: 20%;
}

.why-funds .data h2{
    font-size: clamp(2.3rem, 1.5391rem + 1.2174vw, 3rem);
    text-align: left;
}

.why-funds .data .desc-info{
    line-height: 2.2rem;
    text-align: justify;
}

.voucher-a{
    display: flex;
    justify-content: center;
    padding: 5%;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(173, 204, 233, 0.5) 100%);
    width: 100%;
    gap: 50px;
    text-align: justify;
}

.voucher-b{
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(173, 204, 233, 0.5) 100%);
}

.vouching-companies{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1%;
    align-items: flex-start;
    width: 100%;
    /* flex-wrap: wrap; */
}

.voucher-a .desc-info{
    width: 70%;
}

.company-card{
    display: flex;
    width: 400px;
    height: auto;
    padding: 1%;
    margin-top: 5%;
    gap: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.company-card:hover{
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.22);
}

.company-card img{
    object-fit: cover;
}

.company-card h3{
    font-size: 1.4rem;
    font-weight: 700;
    color:rgb(69, 69, 69)
}
.incubation-main {
    width: 40%;
}

.data {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;
}

.data h2 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-size: clamp(3rem, 2.4286rem + 0.8929vw, 3.5rem);
    font-weight: 700;
    color: rgba(17, 17, 17, 0.8);
}

.underline {
    border: none;
    height: 8px;
    background-color: rgba(67, 137, 250, 255);
    width: 50%;
    border-radius: 3px;
    transition: transform 0.5s ease;
    transform: scaleX(0);
    transform-origin: left;
}

.underline-funds {
    border: none;
    height: 8px;
    background-color: rgba(67, 137, 250, 255);
    width: 50%;
    border-radius: 3px;
    transition: transform 0.5s ease;
    transform: scaleX(0);
    transform-origin: left;
}

.underline-reveal{
    transform: scaleX(1);
}

.desc-info {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 0.23rem + 1.14vw, 1.6rem);
    line-height: 32px;
    color: #454545;
}
</style>
<section id="funding" class="why-funds">
<img src="/incubator-logo.png" alt="Sairam Incubator Foundation Logo">

<div class="data">
    <h2> INNOVATION VOUCHER PROGRAMME </h2>
    <hr class="underline-funds">
    <p class="desc-info">
        Innovation Voucher Programme (IVP) is a unique State Government initiative to promote research and innovation among MSMEs/Start-ups from <strong> Agriculture, Horticulture, Veterinary, Fisheries, Engineering, Waste Management, Health, Automobiles, Nano-Technology, Electronics </strong> etc. <br><br> A solution that will enable Startups and MSMEs with innovative ideas to move to the next stages like research, validation, market study and product development. The selection process is done with steering committees that consists of top officials from the MSME Department of Government of Tamil Nadu and eminent people from the Startup and industrial fraternity in the State.
    </p>
</div>
</section>

<section id="voucher" class="voucher-a">
<h2 class="our-projects">Voucher A</h2>
<p class="desc-info">Grant is given for innovative idea to further proceed in getting their product idea validated with research and market study. This voucher provides grant upto Rs.2 lakh for selected MSMEs and Startups who will be provided constant support and also be monitored for progress with the help of their knowledge partner.</p>
<div class="vouching-companies">
    <div class="company-card" data-aos="zoom-out" data-aos-delay="100">
        <img src="/sky-catch-robots-cropped.jpg" alt="">
        <h3>Sky Catch Robots</h3>
    </div>
    <div class="company-card" data-aos="zoom-out" data-aos-delay="200">
        <img src="/techno-raise.jpg" alt="">
        <h3>Techno Raise, Pvt. Ltd.</h3>
    </div>
    <div class="company-card" data-aos="zoom-out" data-aos-delay="300">
        <img src="/big-bucks.jpeg" alt="">
        <h3>Big Bucks Innovation</h3>
    </div>
    <div class="company-card" data-aos="zoom-out" data-aos-delay="400">
        <img src="/mice_berry.jpg" alt="">
        <h3>Mice Berry India Pvt Ltd.</h3>
    </div>
</div>
</section>

<section class="voucher-a voucher-b">
<h2 class="our-projects">Voucher B</h2>
<p class="desc-info">Grant is given for validated innovative products with strong market need to develop themselves into a commercially viable product. Voucher B provides grant upto Rs.5 lakh for selected MSMEs and Startups who will be provided constant support and also be monitored for progress with the help of their knowledge partner.</p>
<div class="vouching-companies">
    <div class="company-card" data-aos="zoom-out" data-aos-delay="100">
        <img src="/geniktech.jpg" alt="">
        <h3>Genik Technologies</h3>
    </div>
</div>
</section>
`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EdiiPage;
