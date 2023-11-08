import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './foorter.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareFacebook, faSquareTwitter, faSquareYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
<Container fluid>

<footer class="footer-section">
   <div class="container">
       <div class="footer-cta pt-5 pb-5">
           <div class="row">
               <div class="col-xl-4 col-md-4 mb-30">
                   <div class="single-cta">
                       <i class="fas fa-map-marker-alt"></i>
                       <div class="cta-text">
                           <h4>Find us</h4>
                           <span><FontAwesomeIcon icon={faLocationDot} />location</span>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-4 mb-30">
                   <div class="single-cta">
                       <i class="fas fa-phone"></i>
                       <div class="cta-text">
                           <h4>Call us</h4>
                           <span>123456****</span>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-md-4 mb-30">
                   <div class="single-cta">
                       <i class="far fa-envelope-open"></i>
                       <div class="cta-text">
                           <h4>Mail us</h4>
                           <span>mail@info.com</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="footer-content pt-5 pb-5">
           <div class="row">
               <div class="col-xl-4 col-lg-4 mb-50">
                   <div class="footer-widget">
                       <div class="footer-logo">
                           <a href="/" className='footerataglogo'>Zonel<span>.</span><sup>v2.0</sup></a>
                       </div>
                       <div class="footer-text">
                           <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                           elit,Lorem ipsum dolor sit amet.</p>
                       </div>
                       <div class="footer-social-icon">
                           <span>Follow us</span>
                           <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                           <a href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a>
                           <a href="#"><FontAwesomeIcon icon={faSquareYoutube} /></a>
                       </div>
                   </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                   <div class="footer-widget">
                       <div class="footer-widget-heading">
                           <h3>Useful Links</h3>
                       </div>
                       <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">about</a></li>
                           <li><a href="#">services</a></li>
                           <li><a href="#">portfolio</a></li>
                           <li><a href="#">Contact</a></li>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Our Services</a></li>
                           <li><a href="#">Expert Team</a></li>
                           <li><a href="#">Contact us</a></li>
                           <li><a href="#">Latest News</a></li>
                       </ul>
                   </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                   <div class="footer-widget">
                       <div class="footer-widget-heading">
                           <h3>Subscribe</h3>
                       </div>
                       <div class="footer-text mb-25">
                           <p>Subscribe to our new feeds!</p>
                       </div>
                       <div class="subscribe-form">
                           <form action="#">
                               <input type="text" placeholder="Email Address"/>
                               <button><FontAwesomeIcon icon={faTelegram} /></button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="copyright-area">
       <div class="container">
           <div class="row">
               <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                   <div class="copyright-text">
                       <p>Copyright &copy; All Right Reserved</p>
                   </div>
               </div>
               <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                   <div class="footer-menu">
                       <ul>
                           <li><a href="#">Home</a></li>
                           <li><a href="#">Terms</a></li>
                           <li><a href="#">Privacy</a></li>
                           <li><a href="#">Policy</a></li>
                           <li><a href="#">Contact</a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
</footer>
</Container>
    </>
  )
}

export default Footer















