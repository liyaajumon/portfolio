//

import {FaHome,FaTasks,FaGithub} from "react-icons/fa";
import { FiInstagram,FiLinkedin } from "react-icons/fi";
import {FaEnvelope} from "react-icons/fa";
import { BsFillPersonFill,BsAt} from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import './App.css';

function App() {
  const mystyle={
    color:"white",
    backgroundColor:"grey",
    padding:"200px",
   
}
  
  return (
      <div>

              <div id="main__container">
                 <header>
                <nav class="nav" >
                <a >PORTFOLIO</a>
                <a href="#home" class="nav_link" id="nav__align"><FaHome/>  HOME</a> 
                <a href="#about" class="nav_link" id="nav__align"><BsFillPersonFill/>    ABOUT ME</a>
                <a href="#work" class="nav_link" id="nav__align"><FaTasks/> PROJECTS</a> 
                 <a href="#contact" class="nav_link" id="nav__align"><BsAt/> CONTACTS</a>                 
                </nav>   
                </header>
                </div>
           
                <div > 
                  <h2 style={mystyle} id="home" class="homes">Hello,<img src={require('./image/liya3.jpg').default} align ="right" class="image"></img> 
                  <h1 class="name"> I Am Liya Ajumon</h1>
                  <h4 class="college">B.tech Computer Science, Mar Baselios College Of Engineering And Technology</h4>
                  <br></br>
                  <p class="para">Welcome To My Portfolio !
                    The best way to know me is to come over for a cup of coffee<br></br>
                    but this is a good start too..<br></br>
                    Please have a seat and scroll down to know me better.
                  </p>
                 </h2>                              
                 </div>
          
              
               
               
               <div classname="container">
               <div classname="item">
                 <br></br> 
                 <p><p id="about" class="aboutme" ><h2>About me!!</h2>Being a B.tech student, helps me to explore and expand my thinking abilities in different manners.
                        My interest lies on improving  development skills and is also passionate about learning new things, where I hope to contribrute in the field of engineering.
                        
                    </p>
                    <br></br>
                   </p>
                   <p class="tab">
                    <table class="table" align="center">
                    <tr>
                    <th class="th">EDUCATION</th>
                    <th class="th">INTEREST</th>
                    <th class="th">LANGUAGE</th>
                    <th class="th">SOFT SKILLS</th>
                  </tr>
                  
                  <tr>                  
                    <td class="td2">2020-2024 <br/>
                     MAR BASELIOS COLLEGE OF ENGINEERING AND TECHNOLOGY,TRIVANDRUM. <br/><br/>
                     2018-2020<br/>
                     ST. JOHNS MODEL HSS,TRIVANDRUM.<br/><br/>
                     2012-2018<br/>
                     SARVODAYA CENTRAL VIDYALAYA,TRIVANDRUM.<br/><br/>
                     2005-2012<br/>
                     SAKAKA INTERNATIONAL SCHOOL,KSA.                   

                  </td>
                  <td class="td">
                    READING<br></br> SKETCHING<br></br>TRAVEL<br></br>ART
                    </td>  
                    <td class="td">
                      ENGLISH<br/>
                      MALAYALAM<br/>
                      HINDI<br/>
                      </td>  
                    <td class="td1">
                      PUNCTUALITY<br/>
                      TIME MANAGEMENT<br/>
                      CREATIVITY<br/>
                      TEAMWORK<br/>
                      COMMUNICATION<br/>
                      </td>              
                     
                  </tr>
                  
                   </table>
                    </p>
                 </div>                                        
                                          
              
              </div>

              <br/><br/><br/><br/><br/><br/>
              <h1  id="work" class="font">Projects</h1>
               <div id="work" class="proj">
               <br/> 
              
              <div class="gallery">
              <a target="_blank"href="http://liyaajumon.github.io/counter_app">
              <img  src={require('./image/project2.png').default} alt="counter app"></img>
              </a>
              <div class="desc">COUNTER APP</div>              
              </div>
              <div class="gallery">
                <a target="_blank" href="https://liyaajumon.github.io/_colorpicker_">
                  <img src={require('./image/project1.png').default} ></img>
                  </a> 
                  <div class="desc">COLOUR PICKER</div>
               
              </div>
               
               <p align="right" class="projpara2"> Developed during web-development bootcamp,
                 <br></br>conducted by CSI MBCET STUDENT CHAPTER
               </p>
               
               
               
               
                </div>
               
               <div>  
                 <a><h1  id="contact" class="con">CONTACTS</h1></a>
                 <div class="social-list">
                 <a href="mailto:kadampattuabraham@gmail.com" class="social-list__item"><FaEnvelope/></a>
                 <a class="social-list__item" href="https://github.com/liyaajumon/"><FaGithub/></a>
                 <a class="social-list__item" href="https://www.instagram.com/_kadampatt_leah_/"><FiInstagram/></a>
                 <a class="social-list__item" href="https://www.linkedin.com/in/liya-ajumon-8388a9205/"><FiLinkedin/></a>
                 </div>          
             </div>


                <div class="footer">
                <footer>
                <p class="logo">PORTFOLIO</p>
                <nav class="navi">          
                <a href="#home" class="nav_links" id="nav__aligns" align="center"><FaHome/></a> 
                <a href="#about" class="nav_links" id="nav__aligns"align="center"> <BsFillPersonFill/></a> 
                <a href="#work" class="nav_links" id="nav__aligns" align="center"> <FaTasks/></a>
                <a href="#contact" class="nav_links" id="nav__aligns" align="center"><BsAt/></a>
                </nav>   
                </footer>
                </div>

      </div>

  );
}

export default App;
