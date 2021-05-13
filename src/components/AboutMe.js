import React from 'react';
//import Profile from '../assets/maria1.JPG'


function AboutMe() {
    return (
    <div className="container">
        
        <div class="card">
            <h3 className="font-weight-bold text-center m-3">About Me</h3>
            <img class="card-img-top rounded mx-auto d-block profile-img m-3" src= "./assets/maria1.JPG" alt="Maria Lara profile shot"/>
            <p class="card-text text-center m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim dolor sed eros egestas, sit amet vehicula mi tincidunt. Ut consectetur purus et magna aliquam varius. Curabitur rutrum est libero, a consectetur risus pretium nec. Aenean commodo fermentum tortor, in lacinia lorem malesuada et. Aenean ac vulputate lectus, ac mattis dolor. Nunc eget commodo orci. Sed venenatis sagittis neque, at facilisis diam sagittis nec. Aenean ante nibh, elementum et sem eu, pretium tincidunt nisi. Integer sit amet leo augue. Donec at dui volutpat, imperdiet elit quis, molestie sem. Nullam id quam vel lorem hendrerit efficitur et id ante. Sed nec volutpat urna.</p>
            <a href="/projects" class="btn btn-primary text-center m-5">View my work</a>
        </div>

        <div class="card">
            <a class="col mx-auto" href="https://www.linkedin.com/in/maria-lara-sf/"><img alt="" class="icon" src="https://github.com/maria-lara/react-portfolio/blob/main/src/assets/LI-In-Bug.png" /></a>
            <a class="col mx-auto" href="https://github.com/maria-lara"><img alt="" class="icon" src="https://github.com/maria-lara/react-portfolio/blob/main/src/assets/Octocat.png" /></a>
            <a class="col mx-auto" href="mailto:mariaerlara@gmail.com"><img alt="" class="icon" src="https://github.com/maria-lara/react-portfolio/blob/main/src/assets/gmail.png" /></a>
            <a class="col" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1nJCFbYevE7jfEVj9vZs6Cp7yp1dNB3eh/view?usp=sharing"><img alt="" class="icon" src="https://github.com/maria-lara/react-portfolio/blob/main/src/assets/resume.png" /></a>
        </div>

    </div>
    )
}

export default AboutMe;