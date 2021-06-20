import React from "react";

export default function Work() {
  return (
    <section id="mywork">
      <h2>my work</h2>
      <p>
        {" "}
        These are a few of the projects I have completed thus far, the most
        prominent being a collaborative project. Take a look:
      </p>
      <a href="https://writers--block.herokuapp.com/">
        <div class="big">
          <div class="large_project_slot">
            <h3>writer's block</h3>
          </div>{" "}
        </div>
      </a>
      <div id="small_project_container">
        <a href="https://github.com/zchalk/dailyPlanner">
          <div class="small">
            <div class="small_projects_slot" id="daily">
              <h3>daily planner</h3>
            </div>{" "}
          </div>
        </a>
        <a href="https://github.com/zchalk/Password_Generator">
          <div class="small">
            <div class="small_projects_slot" id="password">
              <h3>password generator</h3>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
