
const root = ReactDOM.createRoot(document.getElementById('root'));
let headermenu = ['ABOUT US','PORTOFOLIO','SERVICES','CONTACT US','PAGES','ELEMENTS'] 
let gicmenu = ['ABOUT US', 'WHY CHOOSE US','OUR MISSIONS']
  function App() {
    
    const handleClick = event => {
  
      
        let aa = document.getElementsByClassName('gic_item')
        let bb = document.getElementsByClassName('item_item')
        for (let i = 0; i < aa.length; i++) {
          aa[i].addEventListener('click',function(){
            
            for (let ii = 0; ii < aa.length; ii++) {

              aa[ii].setAttribute('class','gic_item')
              bb[ii].setAttribute('class','item_item')
            }
            this.setAttribute('class','gic_item act')
            bb[i].setAttribute('class','item_item aaa')
          })
          
        }

      
    };
    const kb = event => {
  
      
      let aa = document.getElementsByClassName('texttt')
      let bb = document.getElementsByClassName('kb')
      for (let i = 0; i < aa.length; i++) {
        aa[i].addEventListener('click',function(){
          
          for (let ii = 0; ii < aa.length; ii++) {

            aa[ii].setAttribute('class','texttt')
            bb[ii].style.transform = 'rotate(0deg)'
          }
          this.setAttribute('class','texttt tx')
          bb[i].style.transform = 'rotate(180deg)'
          
        })
        
      }

    
  };
  const qar = event => {
  
      
    let aa = document.getElementsByClassName('qar')
    let bb = document.getElementsByClassName('kria')
    for (let i = 0; i < aa.length; i++) {
      aa[i].addEventListener('click',function(){
        
        for (let ii = 0; ii < aa.length; ii++) {

          aa[ii].setAttribute('class','qar')
          
        }
        this.setAttribute('class','qar ggg')
        kria.style.left = `-${i*100}%`
        
      })
      
    }

  
};
    const handleClickk = event => {
  
      
      let aa = document.getElementsByClassName('tt')
      let bb = document.getElementsByClassName('vesh')
      for (let i = 0; i < aa.length; i++) {
        aa[i].addEventListener('click',function(){
          
          for (let ii = 0; ii < aa.length; ii++) {
            console.log(aa[ii])
            aa[ii].setAttribute('class','tt')

          }
          if (i==0) {
            bb[0].style.left = '0%'
            bb[0].style.transform = 'scale(1)'
            bb[1].style.left = '25%'
            bb[1].style.transform = 'scale(1)'
            bb[2].style.left = '50%'
            bb[2].style.transform = 'scale(1)'
            bb[3].style.left = '75%'
            bb[3].style.transform = 'scale(1)'
            bb[4].style.left = '0%'
            bb[4].style.transform = 'scale(1)'
            bb[4].style.bottom = '-30%'
            bb[5].style.left = '25%'
            bb[5].style.transform = 'scale(1)'
            bb[5].style.bottom = '-30%'
            bb[6].style.left = '50%'
            bb[6].style.transform = 'scale(1)'
            bb[6].style.bottom = '-30%'
            bb[7].style.left = '75%'
            bb[7].style.transform = 'scale(1)'
            bb[7].style.bottom = '-30%'
  
          }
          if(i==1){

            bb[1].style.transform = 'scale(0)'
            bb[2].style.transform = 'scale(0)'
            bb[3].style.transform = 'scale(0)'
            bb[6].style.transform = 'scale(0)'
            bb[7].style.transform = 'scale(0)'
            bb[4].style.bottom = '33%'
            bb[5].style.bottom = '33%'
            bb[4].style.left = '25%'
            bb[5].style.left = '50%'
            bb[4].style.transform = 'scale(1)'
            bb[5].style.transform = 'scale(1)'
            bb[0].style.transform = 'scale(1)'

          }
          if(i==2){
            bb[3].style.transform = 'scale(1)'
            bb[7].style.transform = 'scale(1)'
            bb[0].style.transform = 'scale(0)'
            bb[1].style.transform = 'scale(0)'
            bb[2].style.transform = 'scale(0)'
            bb[4].style.transform = 'scale(0)'
            bb[5].style.transform = 'scale(0)'
            bb[6].style.transform = 'scale(0)'
            bb[3].style.left = '0%'
            bb[7].style.left = '25%'
            bb[7].style.bottom = '33%'


          }
          if (i==3) {
            bb[1].style.transform = 'scale(1)'
            bb[2].style.transform = 'scale(1)'           
            bb[6].style.transform = 'scale(1)'
            bb[0].style.transform = 'scale(0)'
            bb[3].style.transform = 'scale(0)'
            bb[4].style.transform = 'scale(0)'
            bb[5].style.transform = 'scale(0)'
            bb[7].style.transform = 'scale(0)'
            bb[1].style.left = '0%'
            bb[2].style.left = '25%'  
            bb[6].style.left = '50%'
            bb[6].style.bottom = '33%'

          }
          this.setAttribute('class','tt glav')

        })
        
      }

    
  };
 

    return (
      <div>       
        <header>
            <div class="wraper">
                <div class="navbar">
                    <div className="logo">
                        <img src="img/logo.svg"/>
                    </div>
                    <div class="nav">
                        <ul className="ul">
                        <li className="active"><a className="hover">Home</a></li>
                            {
                              headermenu.map((value , index)=>  <li><a className="hover">{value}</a></li>)

                            }
                            
                        </ul>


                         
                        
                    </div>
                </div>
            </div>
        </header>
        <main>
          <div class="slide">
                  <div class="slide-1" id="slide1">
                      <div class="sle">
                          <div class="slide1_item" id="sll">
                              <p class="pp">Solving challenges matter a lot of in
                                  interior design business</p>
                              <p>TRADITIONAL KITCHEN TILES</p>
                              <button>GET QUOTE</button>
                          </div>
                      </div>
                  </div>
                  <div class="slide-2" id="slide2">
                      <div class="sle">
                          <div class="slide1_item" id="sllf">
                              <p class="pp">Solving challenges matter a lot of in
                                  interior design business</p>
                              <p>TRADITIONAL KITCHEN TILES</p>
                              <button>GET QUOTE</button>
                          </div>
                      </div>
                  </div>
                  <div class="number">
                      <p  onClick={verev} id="p1" class="activet">01</p>
                      <p onClick={nerqev} id="p2">02</p>

                  </div>
          </div>
          <div class="wraper">
                <div class="about" id="about">
                    <div class="turn">
                        <p class="turnp">WE TURN YOUR DREAM INTO YOUR DREAM HOME</p>
                        <div class="gic">
                          <div className='gic_item act' onClick={handleClick}>ABOUT US</div>
                          <div className='gic_item' onClick={handleClick}>WHY CHOOSE US</div>
                          <div className='gic_item' onClick={handleClick}>OUR MISSIONS</div>
                          <button style={{display:'none'}} onClick={handleClick} id='hand'></button>
                        </div>
                        <div class="items">
                            <div class="item_item aaa ">
                                <p class="j">Archtera offers the widest and best in class range in furniture, home furnishings & decor, modular kitchens, home improvement and more. We promise to facilitate our customers with a unique and personalized shopping experience.</p>
                                <div className="ffff">
                                    <button class="get">GET IN TOUCH</button>
                                    <button class="gget">READ MORE ABOUT US</button>
                                </div>
                            </div>
                            <div class="item_item">
                                <p class="j">As a team of architects and designers, we are uniquely qualified to translate your property vision into visuals that will transport homebuyers and investors alike.</p>
                                <div className="ffff">
                                   
                                    <button class="gget">READ MORE ABOUT US</button>
                                </div>
                            </div>
                            <div class="item_item">
                                <p class="j">To form a team dedicated to providing exceptional customer service. We will provide a professional approach to constructing exceptional quality projects which meet budget and schedule goals.</p>
                                <div className="ffff">
                                    
                                    <button class="gget">READ MORE ABOUT US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services">
                    <div class="turnp">SERVICES WE OFFER</div>
                    <div class="serv" id="serv">
                        <div class="serv_item">
                            <div>
                                <img src="img/sev1.png" alt=""/>
                            </div>
                            <h4>Architecture</h4>
                            <p>We help to bring a unique character and identity into your home, office or any functional interior spaces.</p>
                        </div>
                        <div class="serv_item">
                            <div>
                                <img src="img/sev2.png" alt=""/>
                            </div>
                            <h4>Architecture</h4>
                            <p>We help to bring a unique character and identity into your home, office or any functional interior spaces.</p>
                        </div>
                        <div class="serv_item">
                            <div>
                                <img src="img/sev3.png" alt=""/>
                            </div>
                            <h4>Architecture</h4>
                            <p>We help to bring a unique character and identity into your home, office or any functional interior spaces.</p>
                        </div>

                       
                        
                        
                       
                
                    </div>
                </div>
                <div class="turnp">OUR PROJECTS</div>
            </div>
            <div class="all">
                <div class="all_item">
                    <ul>
                        <li className="tt glav" onClick={handleClickk}>ALL</li>
                        <li className="tt" onClick={handleClickk}>ARCHITECTURE</li>
                        <li className="tt" onClick={handleClickk}>INTERIOR DESIGN</li>
                        <li className="tt" onClick={handleClickk}>HOUSE RENOVATION</li>
                    </ul>
                  
                </div>
                
            </div>
            <div class="vesher">
                <div class="sharq">
                    <div class="vesh" style={{left:'0%'}}>
                        <img src="img/vesh1.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'25%'}}>
                        <img src="img/vesh2.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'50%'}}>
                        <img src="img/vesh3.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'75%'}}>
                        <img src="img/vesh4.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>            
                    <div class="vesh" style={{left:'0%', bottom:'-30%'}}>
                        <img src="img/vesh5.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'25%', bottom:'-30%'}}>
                        <img src="img/vesh6.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'50%', bottom:'-30%'}}>
                        <img src="img/vesh7.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                    <div class="vesh" style={{left:'75%', bottom:'-30%'}}>
                        <img src="img/vesh8.jpg" alt=""/>
                        <div class="abs">
                            <p>THE NOOK HOUSE</p>
                            <span>ARCHITECTURE <i class="fa-solid fa-magnifying-glass-plus"></i></span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="sea">
                <div class="sea_item">
                    <img src="img/medal.svg" alt=""/>
                    <p class="seap">16</p>
                    <p>Years of Service</p>
                </div>
                <div class="sea_item">
                    <img src="img/flag.svg" alt=""/>
                    <p class="seap">183</p>
                    <p>Completed Projects</p>
                </div>                
                <div class="sea_item">
                    <img src="img/hands.svg" alt=""/>
                    <p class="seap">1247</p>
                    <p>Satisfied Clients</p>
                </div>
            </div>
            <div class="vv">
                <div class="wraper ">
                    <div class="asked">
                        <div class="turnp">FREQUENTLY ASKED QUESTIONS</div>
                        <div class="asked_fl">
                            <div class="fl_item fw">
                                <div class="texttt tx">
                                    <p class="ttp">What are the services we provide?</p>
                                        <div class="ttr" onClick={kb}><i style={{transform:' rotate(180deg)'}} class="fa-solid fa-chevron-down kb"></i></div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum eaque animi ipsa doloremque aliquam fugiat molestias, quia nostrum impedit fuga quos similique quis laborum dolore minima cum ea est alias voluptatum voluptates deserunt nisi sed soluta. Quasi quia esse eius assumenda numquam cumque, ipsam enim tempora illo minus inventore voluptatibus vel cupiditate nobis quo autem incidunt eveniet! Quae, dignissimos?</p>
                                    
                                    
                                </div>
                                <div class="texttt ">
                                    <p class="ttp">Why are we unique and special?</p>
                                        <div class="ttr" onClick={kb}><i class="fa-solid fa-chevron-down kb"></i></div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum eaque animi ipsa doloremque aliquam fugiat molestias, quia nostrum impedit fuga quos similique quis laborum dolore minima cum ea est alias voluptatum voluptates deserunt nisi sed soluta. Quasi quia esse eius assumenda numquam cumque, ipsam enim tempora illo minus inventore voluptatibus vel cupiditate nobis quo autem incidunt eveniet! Quae, dignissimos?</p>
                                    
                                    
                                </div>
                                <div class="texttt">
                                    <p class="ttp">What are the process of your project initiation?</p>
                                        <div class="ttr" onClick={kb}><i class="fa-solid fa-chevron-down kb"></i></div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur earum eaque animi ipsa doloremque aliquam fugiat molestias, quia nostrum impedit fuga quos similique quis laborum dolore minima cum ea est alias voluptatum voluptates deserunt nisi sed soluta. Quasi quia esse eius assumenda numquam cumque, ipsam enim tempora illo minus inventore voluptatibus vel cupiditate nobis quo autem incidunt eveniet! Quae, dignissimos?</p>
                                    
                                    
                                </div>
                            </div>
                            <div class="fl_item">
                                <p class="stil">Still have questions?</p>
                                <p>Please fill bellow form along with your query</p>
                                <div className='form'>
                                    <input type="text" name="name" required placeholder="Name"/>
                                    <input type="text" name="name" required placeholder="Phone No."/>
                                    <input type="email" name="name" required placeholder="Email"/>
                                    <textarea name="query" id=""  rows="7" required placeholder="Write Query" readOnly></textarea>
                                    <input type="submit" value="SUBMIT" class="submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vvv">
                <div class="wraper">
                    <p class="turnp">WHAT OUR CLIENTS SAY</p>
                    <div class="mardik">
                        <div class="kria" id="kria">
                            <div class="mard">
                                <figure>
                                    <img src="img/user-img-1.jpg" alt=""/>
                                </figure>
                                <p class="mardp">  We are extremely happy with work done by the team at Archtera. Highly professional, committed and very good after sales service. Highly recommended home interior designers.</p>
                                <p>Jonathan Mathew</p>
                                <p>Sydney</p>
                            </div>
                            <div class="mard">
                                <figure>
                                    <img src="img/user-img-2.jpg" alt=""/>
                                </figure>
                                <p class="mardp">  We are extremely happy with work done by the team at Archtera. Highly professional, committed and very good after sales service. Highly recommended home interior designers.</p>
                                <p>Jonathan Mathew</p>
                                <p>Sydney</p>
                            </div>
                            <div class="mard">
                                <figure>
                                    <img src="img/user-img-3.jpg" alt=""/>
                                </figure>
                                <p class="mardp">  We are extremely happy with work done by the team at Archtera. Highly professional, committed and very good after sales service. Highly recommended home interior designers.</p>
                                <p>Jonathan Mathew</p>
                                <p>Sydney</p>
                            </div>
                        </div>
                       
                    </div>
                    <div class="qarakusi">
                        <div class="qar ggg" onClick={qar}></div>
                        <div class="qar" onClick={qar}></div>
                        <div class="qar" onClick={qar}></div>
                    </div>
                </div>
            </div>
            <div class="seri">
                <div class="wraper">
                    <div class="touch">
                        
                        <div class="divyy">
                            <div class="div_80">
                                <div class="turnp">GET IN TOUCH</div>
                                <div method="post" class="form">
                                    <input type="text" name="name" required placeholder="Name"/>
                                    <input type="text" name="name" required placeholder="Phone No."/>
                                    <input type="email" name="name" required placeholder="Email"/>
                                    <input type="text" name="name" required placeholder="Subject"/>
                                    <textarea name="query" id=""  rows="7" required placeholder="Write Query" readOnly></textarea>
                                    <div class="subb">
                                        <input type="submit" value="SEND MESSAGE" class="submit submitt"/>
                                    </div>
                                </div>
                            </div>
                            <div class="div_20">
                                <ul>
                                    <li>
                                        <h3 class="phoneee">PHONE</h3>
                                        <p>518-420-4264</p>
                                        <p>518-420-4264</p>
                                        <i class="fa-solid fa-phone"></i>
                                    </li>
                                    <li>
                                        <h3 class="phoneee">E-MAIL</h3>
                                        <p>info@samplemail.com</p>
                                        <p>support@samplemail.com</p>
                                        <i class="fa-solid fa-envelope"></i>
                                    </li>
                                    <li>
                                        <h3 class="phoneee">ADDRESS</h3>
                                        <p>1268 Hardesty Street</p>
                                        <p>Colonie, New York.</p>
                                        <p>12205</p>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wraper">
                <div class="monster">
                    <div><img src="img/clients-temp.png" alt=""/></div>
                    <div><img src="img/clients-temp.png" alt=""/></div>
                    <div><img src="img/clients-temp.png" alt=""/></div>
                    <div><img src="img/clients-temp.png" alt=""/></div>
                    <div><img src="img/clients-temp.png" alt=""/></div>
                </div>
            </div>
        </main>
        <footer>
            <div class="wraper">
                <div class="footer">
                    <div class="footer_item">
                        <img src="img/logo-light.svg" alt=""/>
                        <p class="futp">Archtera offers the widest and best in class range in furniture, home furnishings & decor, modular kitchens, home improvement and more.</p>
                    </div>
                    <div class="footer_item">
                        <p class="ftp">QUICK LINK</p>
                        <ul>
                            <li class="verj">
                                <p>Home</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>About Us</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Services</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Contact Us</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Privace & Security</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Terms & Conditions</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <p class="ftp">Follow Us</p>
                        <ul>
                            <li class="verj">
                                <p>Facebook</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Twitter</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Google+</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Youtube</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Instagram</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                            <li class="verj">
                                <p>Linkedin</p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_item">
                        <p class="ftp">SUBCRIBE</p>
                        <p class="futp">Join our Newsletter for latest updates from us</p>
                        <input type="mail" class="as" placeholder="Enter your E-mail"/>
                        <button class="submit as"><i class="fa-solid fa-envelope"></i>SUBCRIBE</button>
                    </div>
                </div>
            </div>
        </footer>
        <div class="prc">
            <div class="wraper">
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
      </div>
    );
  }


  function nerqev(){
    slide1.style.top = '-100%'
    slide2.style.bottom = '0%'
    p1.setAttribute('class','')
    p2.setAttribute('class','activet')
    slide1.style.transform = 'translate3d(0px, 0px, -100px) rotateX(-50deg) rotateY(0deg)'
    slide2.style.transform = 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)'
    sll.style.bottom = '-100%'
    setTimeout(() => {
        sllf.style.bottom = '0%'
    }, 2000);
  }
  function verev(){
    slide1.style.top = '0%'
    slide2.style.bottom = '-100%'
    p1.setAttribute('class','activet')
    p2.setAttribute('class','')
    slide2.style.transform = 'translate3d(0px, 0px, -100px) rotateX(-50deg) rotateY(0deg)'
    slide1.style.transform = 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)'
    sllf.style.bottom = '-100%'
    setTimeout(() => {
        sll.style.bottom = '0%'
    }, 2000);
  }




root.render(

  <div>
    <App/>
  </div>

  
)
