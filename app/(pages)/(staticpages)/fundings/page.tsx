import React from "react";

const FundingPage = () => {
  const html = `
  <style>
  .our-team {
    display: flex;
    flex-direction: column;
    padding: 2%;
    width: 100%;
    /* justify-content: space-between; */
    align-items: center;
    gap: 25px;
    background: linear-gradient(270deg, rgba(173, 204, 233, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}
.our-projects {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: rgba(69, 69, 69, 0.8);
}
.tg  {border-collapse:collapse;border-color:#aabcfe;border-spacing:0;}
.tg td{background-color:#e8edff;border-color:#aabcfe;border-style:solid;border-width:1px;color:#669;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#b9c9fe;border-color:#aabcfe;border-style:solid;border-width:1px;color:#039;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:center;vertical-align:middle}
.tg .tg-5lax{background-color:#D2E4FC;text-align:center;vertical-align:middle}
tr .tg-cly1:nth-child(1){ text-align: center;}
.project-main {
    width: 40%;
}
</style>
<section id="team" class="our-team">
<h2 class="our-projects" data-splitting>FUNDING PROGRAMME</h2>
<p >Sri Sairam techno Incubator providing financial, Physical and mentoring support to the various startups far enhancing entrepreneurship. </p>
<p>Startups received Physical & Financial support </p>
<table class="tg">
    <thead>
      <tr>
        <th class="tg-cly1">S.NO</th>
        <th class="tg-cly1">INCUBATEE NAME (STARTUP)</th>
        <th class="tg-cly1">CORPORATE IDENTIFICATION NUMBER (CIN) / REGISTRATION NUMBER</th>
        <th class="tg-cly1">CONTACT PERSON NAME (FOUNDER / COFOUNDER / CEO / DIRECTOR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-cly1">1.</td>
        <td class="tg-5lax">TECHNO RAISE PVT. LTD.</td>
        <td class="tg-5lax">U73200TN2021PTC140804</td>
        <td class="tg-5lax">Dr. Swagata Sarkar</td>
      </tr>
      <tr>
        <td class="tg-cly1">2.</td>
        <td class="tg-5lax">SMILE HEALTHCARE TECHNOLOGIES</td>
        <td class="tg-5lax">UDYAM-TN-08-0030610</td>
        <td class="tg-5lax">Dr. J. Thamilselvi</td>
      </tr>
      <tr>
        <td class="tg-cly1">3.</td>
        <td class="tg-5lax">BIG BUCKS INNOVATION</td>
        <td class="tg-5lax">UDYAM-TN-02-0156078</td>
        <td class="tg-5lax">Dr. Anandhi</td>
      </tr>
      <tr>
        <td class="tg-cly1">4.</td>
        <td class="tg-5lax">MICE BERRY INDIA PRIVATE LIMITED</td>
        <td class="tg-5lax">U55101TN2019PTC130068</td>
        <td class="tg-5lax">V. Sasikala</td>
      </tr>
      <tr>
        <td class="tg-cly1">5.</td>
        <td class="tg-5lax">Genik Technologies</td>
        <td class="tg-5lax">UDYAM-TN-080018316</td>
        <td class="tg-5lax">C.S.Sai Ganesh</td>
      </tr>
      <tr>
        <td class="tg-cly1">6.</td>
        <td class="tg-5lax">Techyy service center</td>
        <td class="tg-5lax">UDYAM-TN-02-0060174</td>
        <td class="tg-5lax">Sugunesh.R</td>
      </tr>
      <tr>
        <td class="tg-cly1">7.</td>
        <td class="tg-5lax">TECHNOSPAN</td>
        <td class="tg-5lax">UDYAM-TN-08-0014233</td>
        <td class="tg-5lax">Dr.Saswati Behera Kumari</td>
      </tr>
      <tr>
        <td class="tg-cly1">8.</td>
        <td class="tg-5lax">SKYCATCH BOTS</td>
        <td class="tg-5lax">UDYAM-TN-08-0043138</td>
        <td class="tg-5lax">K.Mohanraj</td>
      </tr>
      <tr>
        <td class="tg-cly1">9.</td>
        <td class="tg-5lax">AGSAIMO</td>
        <td class="tg-5lax">UDYAM-TN-08-0052456</td>
        <td class="tg-5lax">Thanuja</td>
      </tr>
      <tr>
        <td class="tg-cly1">10.</td>
        <td class="tg-5lax">LMES ACADEMY PRIVATE LIMITED</td>
        <td class="tg-5lax">U80100TN2017PTC116207</td>
        <td class="tg-5lax">Premanand</td>
      </tr>
      <tr>
        <td class="tg-cly1">11.</td>
        <td class="tg-5lax">Vidhai Art Space</td>
        <td class="tg-5lax">UDYAM-TN-02-0122721</td>
        <td class="tg-5lax">Sowmya</td>
      </tr>
      <tr>
        <td class="tg-cly1">12.</td>
        <td class="tg-5lax">Hakate Technologies Private Limited</td>
        <td class="tg-5lax">U72200TG2017PTC117610</td>
        <td class="tg-5lax">HarshaVardhan Reddy Kankanala</td>
      </tr>
      <tr>
        <td class="tg-cly1">13.</td>
        <td class="tg-5lax">Sri Sai Fusion Techno Works</td>
        <td class="tg-5lax">33AEFFS6544E1Z3</td>
        <td class="tg-5lax">Avudaiyappan K</td>
      </tr>
      <tr>
        <td class="tg-cly1">14.</td>
        <td class="tg-5lax">Universys Technologies</td>
        <td class="tg-5lax">U52399TN2016PTC104642</td>
        <td class="tg-5lax">Shiva Kumar S</td>
      </tr>
      <tr>
        <td class="tg-cly1">15.</td>
        <td class="tg-5lax">Armor Grandeur Private Limited</td>
        <td class="tg-5lax">U72900TN2022PTC156391</td>
        <td class="tg-5lax">Dr K Porkumaran</td>
      </tr>
    </tbody>
    </table>
</section>
`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default FundingPage;
