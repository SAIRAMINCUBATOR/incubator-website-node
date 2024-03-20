import React from "react";

const ManagementPage = () => {
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
  
        <h2 class="our-projects" data-splitting>OUR MANAGEMENT TEAM</h2>
        <table class="tg">
            <thead>
              <tr>
                <th class="tg-cly1">S.NO</th>
                <th class="tg-cly1">NAME OF THE STAFF</th>
                <th class="tg-cly1">DESIGNATION</th>
                <th class="tg-cly1">EXPERIENCE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-cly1">1.</td>
                <td class="tg-5lax">Mr. K. Naresh Raj </td>
                <td class="tg-5lax">CEO & MD </td>
                <td class="tg-5lax">13 years global experience in Advanced technologies and Entrepreneurship </td>
              </tr>
              <tr>
                <td class="tg-cly1">2.</td>
                <td class="tg-5lax">Mr. Premanand </td>
                <td class="tg-5lax">Director </td>
                <td class="tg-5lax">15 years experience and Specialization in Engineering & Media </td>
              </tr>
              <tr>
                <td class="tg-cly1">3.</td>
                <td class="tg-5lax">Mr. A. Muthuvel </td>
                <td class="tg-5lax">Incubation Manager </td>
                <td class="tg-5lax">15 years experience in innovation, Startups and Multidisciplinary research</td>
              </tr>
              <tr>
                <td class="tg-cly1">4.</td>
                <td class="tg-5lax">Mr. Balamurugan </td>
                <td class="tg-5lax">R&D Executive - Senior </td>
                <td class="tg-5lax">23 years experience in Automotive R&D </td>
              </tr>
              <tr>
                <td class="tg-cly1">5.</td>
                <td class="tg-5lax">Mr. Sam Austin </td>
                <td class="tg-5lax">R&D Executive - Senior</td>
                <td class="tg-5lax">4 years experience in Engineering Design </td>
              </tr>
              <tr>
                <td class="tg-cly1">6.</td>
                <td class="tg-5lax">Mr. Jayandan </td>
                <td class="tg-5lax">R&D Executive - Senior </td>
                <td class="tg-5lax">4 years experience in Environmental & Soil Technologies </td>
              </tr>
              <tr>
                <td class="tg-cly1">7.</td>
                <td class="tg-5lax">Mr. Lelin </td>
                <td class="tg-5lax">R&D Executive</td>
                <td class="tg-5lax">4 years experience in Computer aided Modelling </td>
              </tr>
              <tr>
                <td class="tg-cly1">8.</td>
                <td class="tg-5lax">Mr. Shamsudeen </td>
                <td class="tg-5lax">R&D Executive</td>
                <td class="tg-5lax">3 years experience in Physics Theorist </td>
              </tr>
              <tr>
                <td class="tg-cly1">9.</td>
                <td class="tg-5lax">Ms. Pooja </td>
                <td class="tg-5lax">Office Assistant & Operation in Charge </td>
                <td class="tg-5lax">Accountant and Office operation Management </td>
              </tr>
            </tbody>
            </table>
            <br><br><br>
            <h2 class="our-projects" data-splitting>MENTORS</h2>
            <table class="tg">
                <thead>
                  <tr>
                    <th class="tg-cly1">S.NO</th>
                    <th class="tg-cly1">NAME OF THE MENTOR</th>
                    <th class="tg-cly1">CURRENT ORGANISATION</th>
                    <th class="tg-cly1">DESIGNATION IN CURRENT ORGANISATION</th>
                    <th class="tg-cly1">SECTOR EXPERTISE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-cly1">1.</td>
                    <td class="tg-5lax">Dr. Sai Prakash Leo Muthu</td> 
                    <td class="tg-5lax">Sri Sairam Group of Institution</td>
                    <td class="tg-5lax">Chairman</td>
                    <td class="tg-5lax">Management</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">2.</td>
                    <td class="tg-5lax">Dr. K. Porkumaran</td>
                    <td class="tg-5lax">Principal / Sri Sairam Engineering College</td>
                    <td class="tg-5lax">Chief Mentor</td>
                    <td class="tg-5lax">Intelligent systems& Instrumentation</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">3.</td>
                    <td class="tg-5lax">K. Naresh Raj</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">CEO-SSTIF</td>
                    <td class="tg-5lax">Management</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">4.</td>
                    <td class="tg-5lax">Dr. C. R. Rene Robin</td>
                    <td class="tg-5lax">Professor & Dean Innovation, Sri Sairam Engineering College, Chennai-44</td>
                    <td class="tg-5lax">Manager & Innovation Ecosystem</td>
                    <td class="tg-5lax">IOT technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">5.</td>
                    <td class="tg-5lax">Mr Sampath Veeraraghavan</td>
                    <td class="tg-5lax">IT IEEE-HKN President</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Globally Renowned Technologist</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">6.</td>
                    <td class="tg-5lax">Dr. B. Vinod Kumar</td>
                    <td class="tg-5lax">Coddissia Defence Innovation & Atal Incubation Centre (CDIIC)</td>
                    <td class="tg-5lax">General Manager</td>
                    <td class="tg-5lax">Defence</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">7.</td>
                    <td class="tg-5lax">Dr. K. Renganathan</td>
                    <td class="tg-5lax">Professor and Head, Department of Electronics and Instrumentation Engineering, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">AI & Industrial Automation</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">8.</td>
                    <td class="tg-5lax">Dr. A. Sanjeevi Gandhi</td>
                    <td class="tg-5lax">Professor, Department of EEE, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Electrical Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">9.</td>
                    <td class="tg-5lax">Mr. M. Subramanian</td>
                    <td class="tg-5lax">Assistant Professor, Dept of EIE, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">IoT</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">10.</td>
                    <td class="tg-5lax">Dr. Swagata Sarkar</td>
                    <td class="tg-5lax">Professor and Head, Department of AI & DS, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">AI & Drone technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">11.</td>
                    <td class="tg-5lax">Dr. B. Vijay Ramanath</td>
                    <td class="tg-5lax">Professor and Head, Department of Mechanical Engineering, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Materials and Composites Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">12.</td>
                    <td class="tg-5lax">Mr. K. Mohanraj</td>
                    <td class="tg-5lax">Asst. Professor, Department of ICE Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Drone Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">13.</td>
                    <td class="tg-5lax">Mr. C. Jeeva</td>
                    <td class="tg-5lax">Professor, Department of EEE, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Electrical Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">14.</td>
                    <td class="tg-5lax">Dr.J.ThamilSelvi</td>
                    <td class="tg-5lax">Associate Professor, Department of ECE Sri Sairam Engineering College, Chennai-44</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Health care technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">15.</td>
                    <td class="tg-5lax">Mr. N. Balaji</td>
                    <td class="tg-5lax">Professor, Department of ICE, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Instrumentation Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">16.</td>
                    <td class="tg-5lax">Dr. B. Thanuja</td>
                    <td class="tg-5lax">Professor, Department of Chemistry, Sri Sairam Engineering college</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Chemical Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">17.</td>
                    <td class="tg-5lax">Mr. A. Muthuvel</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">Incubation Manager</td>
                    <td class="tg-5lax">Marine Robotics</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">18.</td>
                    <td class="tg-5lax">Mr. Balamurugan</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">CTO</td>
                    <td class="tg-5lax">Engine &Waste management</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">19.</td>
                    <td class="tg-5lax">Mr. Ashok Shanmugam</td>
                    <td class="tg-5lax">Entrepreneurship Initiatives, Start-up Ecosystem Enabler, Digital Accelerator Enabler, Silicon Valley, USA.</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Investor Connect</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">20.</td>
                    <td class="tg-5lax">Mr. Ravichandran</td>
                    <td class="tg-5lax">Business Advisor -Consultant</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Consultant -Business</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">21.</td>
                    <td class="tg-5lax">Ms. Uma Maheshwari</td>
                    <td class="tg-5lax">AIC - AU Incubation Foundation</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">CEO</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">22.</td>
                    <td class="tg-5lax">Mr. Arun Kumar</td>
                    <td class="tg-5lax">VIDHAI ART SPACE (SILAII)</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Proprietor</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">23.</td>
                    <td class="tg-5lax">Mr. Jayandan</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">R&D Executive</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">24.</td>
                    <td class="tg-5lax">Mr. Sam Austin</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">R&D Executive</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">25.</td>
                    <td class="tg-5lax">Mr. Lenin Lal</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">R&D Executive</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">26.</td>
                    <td class="tg-5lax">Mr. Shamsudheen</td>
                    <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">R&D Executive</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">27.</td>
                    <td class="tg-5lax">Mr. Sathish</td>
                    <td class="tg-5lax">Sri Sairam Group of Institution</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">CBO</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">28.</td>
                    <td class="tg-5lax">Dr.Sivaraman</td>
                    <td class="tg-5lax">BigBangBoom Solution Private Limited</td>
                    <td class="tg-5lax">Member</td>
                    <td class="tg-5lax">Defence & Aerospace</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">29.</td>
                    <td class="tg-5lax">Mr. Jayakumar</td>
                    <td class="tg-5lax">nROOT Technologies</td>
                    <td class="tg-5lax">Wing Commander (Retired)</td>
                    <td class="tg-5lax">Defence & Aerospace</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">30.</td>
                    <td class="tg-5lax">Suseendar Marimuthu</td>
                    <td class="tg-5lax">BLUNAV</td>
                    <td class="tg-5lax">FOUNDER</td>
                    <td class="tg-5lax">AIRPORT OPERATION</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">31.</td>
                    <td class="tg-5lax">Dr. Palani Kumar</td>
                    <td class="tg-5lax">Sri Sairam Institute of technonolgy</td>
                    <td class="tg-5lax">Principal</td>
                    <td class="tg-5lax">Materials and Composites Technology</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">32.</td>
                    <td class="tg-5lax">Mr. Premanand</td>
                    <td class="tg-5lax">LMES</td>
                    <td class="tg-5lax">FOUNDER</td>
                    <td class="tg-5lax">EDUTECH</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">33.</td>
                    <td class="tg-5lax">Mr. Anbarasu Mahadevan</td>
                    <td class="tg-5lax">President, World Youth Federation</td>
                    <td class="tg-5lax">Legal Advisor</td>
                    <td class="tg-5lax">CA & Legal</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">34.</td>
                    <td class="tg-5lax">Mr. Daniel Prabhakaran</td>
                    <td class="tg-5lax">Head of Incubator | Startup Fundraising Consultant | Ex Chief Executive Officer at Annamalai Innovation and Incubation Research Foundation,AnnamalaiUniversity</td>
                    <td class="tg-5lax">Consulatant</td>
                    <td class="tg-5lax">Incubation</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">35.</td>
                    <td class="tg-5lax">Dr. Vanitha R Muralikumar</td>
                    <td class="tg-5lax">Dhanwanthralaya Ayurveda Hospital</td>
                    <td class="tg-5lax">Entrepreneur</td>
                    <td class="tg-5lax">Entrepreneur</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">36.</td>
                    <td class="tg-5lax">Dr. Shanmughapriya M</td>
                    <td class="tg-5lax">Sri Sai Ram Institute of Technology</td>
                    <td class="tg-5lax">Assistant Professor</td>
                    <td class="tg-5lax">Machine Learning, Image Processing, Video Analysis, Statistical Analysis</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">37.</td>
                    <td class="tg-5lax">Mr. P. Suthahar</td>
                    <td class="tg-5lax">Sri Sai Ram Institute of Technology</td>
                    <td class="tg-5lax">PROFESSOR</td>
                    <td class="tg-5lax">Web Design, Cyber Security, Cloud Computing</td>
                  </tr><tr>
                    <td class="tg-cly1">38.</td>
                    <td class="tg-5lax">Dr B Sreedevi</td>
                    <td class="tg-5lax">Sri Sai Ram Institute of Technology</td>
                    <td class="tg-5lax">Organization Professor</td>
                    <td class="tg-5lax">Machine Learning</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">39.</td>
                    <td class="tg-5lax">Dr. V. R. Kanagavalli</td>
                    <td class="tg-5lax">Sri Sai Ram Engineering College</td>
                    <td class="tg-5lax">PROFESSOR</td>
                    <td class="tg-5lax">Teaching Experience and Project guidance</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">40.</td>
                    <td class="tg-5lax">Dr. G.Adiline Macriga</td>
                    <td class="tg-5lax">Sri Sai Ram Engineering College</td>
                    <td class="tg-5lax">PROFESSOR</td>
                    <td class="tg-5lax">Cyber Security</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">41.</td>
                    <td class="tg-5lax">Dr. S. Susila Sakthy</td>
                    <td class="tg-5lax">Sri Sai Ram Engineering College</td>
                    <td class="tg-5lax">PROFESSOR</td>
                    <td class="tg-5lax">Artificial intelligence, wireless sensor networks</td>
                  </tr>
                  <tr>
                    <td class="tg-cly1">42.</td>
                    <td class="tg-5lax">Dr. T MANJU</td>
                    <td class="tg-5lax">Sri Sai Ram Engineering College</td>
                    <td class="tg-5lax">PROFESSOR</td>
                    <td class="tg-5lax">Artificial Intelligence</td>
                  </tr>
                </tbody>
                </table>
                <br><br>
                <h2 class="our-projects" data-splitting>ADVISORY BOARD</h2>
                <table class="tg">
                    <thead>
                      <tr>
                        <th class="tg-cly1">S.NO</th>
                        <th class="tg-cly1">NAME OF THE MENTOR</th>
                        <th class="tg-cly1">CURRENT ORGANISATION</th>
                        <th class="tg-cly1">DESIGNTION IN CURRENT ORGANISATION</th>
                        <th class="tg-cly1">SECTOR EXPERTISE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="tg-cly1">1.</td>
                        <td class="tg-5lax">Dr. Sai Prakash Leo Muthu</td>
                        <td class="tg-5lax">Sri Sairam Group of Institution</td>
                        <td class="tg-5lax">Chairman</td>
                        <td class="tg-5lax">Management</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">2.</td>
                        <td class="tg-5lax">Dr. K. Porkumaran</td>
                        <td class="tg-5lax">Principal / Sri Sairam Engineering College</td>
                        <td class="tg-5lax">Chief Mentor</td>
                        <td class="tg-5lax">Intelligent systems& Instrumentation</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">3.</td>
                        <td class="tg-5lax">K. Naresh Raj</td>
                        <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                        <td class="tg-5lax">CEO& MD</td>
                        <td class="tg-5lax">Management</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">4.</td>
                        <td class="tg-5lax">Dr. C. R. Rene Robin</td>
                        <td class="tg-5lax">Sairam Group of Institution - Innovation Ecosystem</td>
                        <td class="tg-5lax">Professor & Dean Innovation</td>
                        <td class="tg-5lax">IOT technology</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">5.</td>
                        <td class="tg-5lax">Mr. A. Muthuvel</td>
                        <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                        <td class="tg-5lax">Incubation Manager</td>
                        <td class="tg-5lax">Marine Robotics</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">6.</td>
                        <td class="tg-5lax">Mr. Balamurugan</td>
                        <td class="tg-5lax">Sri Sairam Techno Incubator Foundation</td>
                        <td class="tg-5lax">CTO </td>
                        <td class="tg-5lax">Engine &Waste management</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">7.</td>
                        <td class="tg-5lax">Ms. Uma Maheshwari</td>
                        <td class="tg-5lax">AIC - AU Incubation Foundation</td>
                        <td class="tg-5lax">Member</td>
                        <td class="tg-5lax">CEO</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">8.</td>
                        <td class="tg-5lax">Mr. Arun Kumar</td>
                        <td class="tg-5lax">VIDHAI ART SPACE (SILAII)</td>
                        <td class="tg-5lax">FOUNDER</td>
                        <td class="tg-5lax">Statue</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">9.</td>
                        <td class="tg-5lax">Mr. Sathish</td>
                        <td class="tg-5lax">Sairam Group of Institution</td>
                        <td class="tg-5lax">Member</td>
                        <td class="tg-5lax">Chief Business Officer</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">10.</td>
                        <td class="tg-5lax">Mr. Suseendar Marimuthu</td>
                        <td class="tg-5lax">BLUNAV</td>
                        <td class="tg-5lax">FOUNDER</td>
                        <td class="tg-5lax">AIRPORT OPERATION</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">11.</td>
                        <td class="tg-5lax">Dr. Palani Kumar </td>
                        <td class="tg-5lax">Sri Sairam Institute of technology</td>
                        <td class="tg-5lax">Principal</td>
                        <td class="tg-5lax">Materials and Composites Technology</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">12.</td>
                        <td class="tg-5lax">Mr. Premanand</td>
                        <td class="tg-5lax">LMES</td>
                        <td class="tg-5lax">FOUNDER</td>
                        <td class="tg-5lax">EDUTECH</td>
                       </tr>
                       <tr>
                        <td class="tg-cly1">13.</td>
                        <td class="tg-5lax">Dr. Vanitha R Muralikumar</td>
                        <td class="tg-5lax">Dhanwanthralaya Ayurveda Hospital </td>
                        <td class="tg-5lax">FOUNDER</td>
                        <td class="tg-5lax">Entrepreneur</td>
                       </tr>
                    </tbody>
                    </table>
                    <br>
    </section>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ManagementPage;
