import React from "react";

const IPRPage = () => {
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
.tgg  {border-collapse:collapse;border-color:#aabcfe;border-spacing:0;}
.tgg td{background-color:#e8edff;border-color:#aabcfe;border-style:solid;border-width:1px;color:#669;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tgg th{background-color:#b9c9fe;border-color:#aabcfe;border-style:solid;border-width:1px;color:#039;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tgg .tgg-cly1{text-align:center;vertical-align:middle}
.tgg .tgg-5lax{background-color:#D2E4FC;text-align:center;vertical-align:middle}
.tgg .tgg-5lax1{background-color:#D2E4FC;vertical-align:middle}
tr .tgg-cly1:nth-child(1){ text-align: center;}
.project-main {
    width: 40%;
}

</style>
<section id="team" class="our-team">

<h2 class="our-projects" data-splitting>INTELLECTUAL PROPERTY RIGHTS (I.P.R.)</h2>
<table class="tgg">
    <thead>
      <tr>
        <th class="tgg-cly1">S.NO</th>
        <th class="tgg-cly1">NAME</th>
        <th class="tgg-cly1">JOBS / RESPONSITIBLITY</th>
        <th class="tgg-cly1">POSITION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tgg-cly1">1.</td>
        <td class="tgg-5lax">Dr.G. Puthilibai (CHEM, SEC)</td>
        <td class="tgg-5lax1">
            <li>Overseeing all activities within a Club/Cell.</li>
            <li>Determining the goals that members will work towards.</li>
            <li>Provide a Vision and Mission.</li>
            <li>Delegate and empower.</li>
            <li>Establish Effective clubs/cells Structure and Communication Protocols.</li>
            <li>Follow up of the activity planner.</li>
        </td>
        <td class="tgg-5lax">Team Lead </td>
      </tr>
      <tr>
        <td class="tgg-cly1">2.</td>
        <td class="tgg-5lax">Dr. G. Thamarai Selvi (ECE, SIT) </td>
        <td class="tgg-5lax1">
            <li>Conduct in-depth activity planning to identify new opportunities & innovations. </li>
            <li>Develop and maintain digital campaigns to accomplish the vision and mission of the clubs and cells.</li>
            <li>Arranging suitable resource persons for the activity planned.</li>
            <li>Preparation of Minutes of the meeting</li>
        </td>
        <td class="tgg-5lax">Strategist</td>
      </tr>
      <tr>
        <td class="tgg-cly1">3.</td>
        <td class="tgg-5lax">Ms. P. Shanmugapriya (EEE, SEC)</td>
        <td class="tgg-5lax1">
            <li>Communicating information to club members and sharing it widely for inspiration, through various digital media.</li>
            <li>Publicity of the events in social media.</li>
            <li>Posting of the event invitation on the college website.</li>
        </td>
        <td class="tgg-5lax">Communicator</td>
      </tr>
      <tr>
        <td class="tgg-cly1">4.</td>
        <td class="tgg-5lax">Ms. R. Lakshmi Devi (EEE, SIT)</td>
        <td class="tgg-5lax1">
            <li>Communicating information to club members and sharing it widely for inspiration, through various digital media.</li>
            <li>Publicity of the events in social media.</li>
            <li>Posting of the event invitation on the college website.</li>
        </td>
        <td class="tgg-5lax">Communicator</td>
      </tr>
      <tr>
        <td class="tgg-cly1">5.</td>
        <td class="tgg-5lax">Dr. S. Sumathi (ECE, SEC)</td>
        <td class="tgg-5lax1">
            <li>Keeping track and structuring of various events.</li>
            <li>Preparing invitations for the events to be organized.</li>
            <li>Documentation of all events including reports of the events and feedback collection.</li>
        </td>
        <td class="tgg-5lax">Organizer</td>
      </tr>
      <tr>
        <td class="tgg-cly1">6.</td>
        <td class="tgg-5lax">Dr.G. Saravanan (ECE, SIT)</td>
        <td class="tgg-5lax1">
            <li>Keeping track and structuring of various events.</li>
            <li>Preparing invitations for the events to be organized.</li>
            <li>Documentation of all events including reports of the events and feedback collection.</li>
        </td>
        <td class="tgg-5lax">Organizer</td>
      </tr>
    </tbody>
    </table>
    </section
`;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default IPRPage;
