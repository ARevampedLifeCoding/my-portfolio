import React from "react";

export default function Resume() {
  return (
    <div>
      <header class="contanier header">
        <h2>HOW TO REACH ME</h2>
        <br />
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="tel:3522756254"
            >
              Cell: 352-275-6254
            </a>
            <br />
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailto: arevampedlifecoding@gmail.com">
              Email: arevampedlifecoding@gmail.com
            </a>
            <br />
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/randylangston/"
              target="_blank" rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </li>
        </ul>
      </header>
      <div class="container p3 border">
        <div class="row ">
          <div class="col">
            <h1>Bruce 'Randy' Langston</h1>
            <h2>Aspiring software engineer</h2>
          </div>
        </div>
      </div>
      <div class="container p3 border">
        <h2 class="justify-content-center">Profile</h2>
        <p>
          An upcoming graduate of the University of Denver Coding Bootcamp, I'm
          excited to re- enter the workforce as a software engineer. Learning to
          code has been the hardest yet most rewarding skill I have ever
          studied. The continual cycle of growth required for this industry
          excites the learner in me. This trait has made me a professional who
          is eager and ready to transition from my previous roles.
        </p>
      </div>
      <div class="container p3 border">
        <h2>Career Summary</h2>
        <p>
          <strong>Termite Inspector/Lawn Specialist</strong>
          Brooker Pest Control | May 2018 to Sept 2020 Maintained a positive
          client relationship Educated clients and other staff on proper
          identification of pests and the appropriate methods for reducing their
          impact on lawns. Inspected residential and commercial properties for
          pest damage. Treated properties for termite/pest damage
        </p>
        <p>
          <strong>Second Assistant Superintendent</strong>
          UAA Golf Course | Apr. 2013 to May 2018 Assisted in planning &
          supervising maintenance of greens, tees, & fairways. Scheduled work
          and supervised the employees and their use of the equipment.
          Supervised pesticide applications and/or operated and calibrated
          pesticide application equipment; and supervised and participated in
          the operation and maintenance of pumps, and in the maintenance of
          irrigation and drainage systems. Assisted in personnel management
          including employee evaluation, employee safety, and personnel
          discipline.
        </p>
        <h2>Educational Training</h2>
        <p>
          Tulsa Welding School (September 2008) Master Welder Pennsylvania State
          University (December 2018) Turfgrass Management Associate in Science
          Degree University of Denver (December 2021) Computer Science, Coding
        </p>
      </div>
      <div class="container p3 border">
        <h2>Skills</h2>
        <p>
          <strong>Coding Languages</strong>
        </p>
        <p>SQL, JavaScript,HTML/CSS</p>
        <h2>Frameworks/Systems</h2>
        <p>Visual Studio, bootstrap</p>
      </div>
      <div class="container p3 border">
        <h2>Character References</h2>
        <p>
          <strong>Ryan Barrett</strong> Software Engineer,
          <br />
          Medkeeper
          <br />
          Cell:<a href="tel:7723424438">772-342-4438</a>
        </p>
      </div>
      <div class="container p3 border"></div>
      <h2>How to reach me</h2>
      <a href="tel:3522756254">Cell</a>
      <br />
      <a href="mailto: arevampedlifecoding@gmail.com">Email</a>
      <br />
      <a href="https://www.linkedin.com/in/randylangston/" target="_blank">
        LinkedIn
      </a>
      <br />
      <a href="https://github.com/ARevampedLifeCoding" target="_blank">
        GitHub
      </a>
    </div>
  );
}


