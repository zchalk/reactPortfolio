import React from "react";

export default function Work() {
  return (
    <section id="mywork">
      <h2>my work</h2>
      <p>
        {" "}
        These are a few of the projects I have completed thus far, take a look:
      </p>
      <div id="project_container">
      <div class="small_project_container">
      <a href="https://writers--block.herokuapp.com/" class= 'project'>
        <div class="small">
          <div class="small_projects_slot" id="writer">
            <h3>writer's block</h3>
          </div>{" "}
        </div>
      </a>
      <a href="https://zchalk.github.io/weatherApp/" class= 'project'>
          <div class="small">
            <div class="small_projects_slot" id="weather">
              <h3>weather app</h3>
            </div>
          </div>
        </a>
        <a href="" class= 'project'>
          <div class="small">
            <div class="small_projects_slot" id="">
              <h3>the little guy</h3>
            </div>
          </div>
        </a>
        </div>
        <div class="small_project_container">
        <a href="" class= 'project'>
          <div class="small">
            <div class="small_projects_slot" id="">
              <h3>book search app</h3>
            </div>
          </div>
        </a>
        <a href="https://github.com/zchalk/dailyPlanner" class= 'project'>
          <div class="small">
            <div class="small_projects_slot" id="daily">
              <h3>daily planner</h3>
            </div>{" "}
          </div>
        </a>
        <a href="https://github.com/zchalk/Password_Generator" class= 'project'>
          <div class="small">
            <div class="small_projects_slot" id="password">
              <h3>password generator</h3>
            </div>
          </div>
        </a>
      </div>
      </div>
    </section>
  );
}
