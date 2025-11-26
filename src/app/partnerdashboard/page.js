"use client"
import { useState } from "react";
import Image from 'next/image';
import PartnerBanner from "../components/PartnerBanner";
import Navication from "../components/Navication";
import Footer from '../components/Footer';
import FeatureBanner from '../components/FeatureBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function PartnerDashboard() {
    const [isOn, setIsOn] = useState(false);
   return (
      <>
         <Navication />
         <PartnerBanner/>
         <main className="float-start w-100 main-body dashborad-pages01 position-relative pt-4">

            <section className="float-start w-100">
               <div className="container">
                  <div className="card w-100 mt-4">
                     <div className="card-body texr-card01 d-flex align-items-center justify-content-between py-0">
                        <div className="ledts-parts">
                            <p><strong className="d-block"> Data shared with your partner: </strong> When sharing is on, your partner can see symptom summaries, mood trends, and weekly digest insights. Personal notes always stay private. </p>
                        </div>
                        <div className="rights-swite">

                             <button
                              onClick={() => setIsOn(!isOn)}
                              style={{
                              width: "60px",
                              height: "30px",
                              borderRadius: "30px",
                              background: isOn ? "#9b8bf0" : "#ccc",
                              padding: "3px",
                              border: "none",
                              cursor: "pointer",
                              position: "relative",
                              }}
                           >
                           <div
                           style={{
                              width: "24px",
                              height: "24px",
                              background: "#fff",
                              borderRadius: "50%",
                              position: "absolute",
                              left: isOn ? "32px" : "4px",
                              top: "3px",
                              transition: "0.2s",
                           }}
                           />
                        </button>
                               
                              
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="card crd-prtants01 w-100">
                           <div className="card-body py-0">
                              <div className="rec-divbody w-100">
                                 <h4 className="card-title"> This Week’s Digest </h4>
                                 <p className="mt-2"> Here’s a quick view of what your partner has shared over the last 7 days. </p>
                                 <ul>
                                    <li>
                                       3 new symptoms shared
                                    </li>
                                    <li>
                                    Mood trending slightly upward
                                    </li>
                                    <li>
                                       3 new symptoms shared
                                    </li>
                                    <li>
                                       2 good sleep nights in a row
                                    </li>
                                    <li>
                                       Energy levels steady on most days
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>


                     </div>
                     <div className="col-lg-3">

                        <div className="card crd-prtants01 w-100">
                           <div className="card-body py-0">
                              <div className="rec-divbody w-100">
                                 <h4 className="card-title"> Partner Tip of the Week </h4>
                                 <p className="mt-2"> Ask your partner one specific question about how they’re feeling today, then simply listen without jumping to solutions.
                                    Reflect back what you heard before you respond. </p>
                                 <ul>
                                    <li>
                                       Try this today: “On a scale of 1–10, how supported do you feel right now?”
                                    </li>
                                    <li>
                                       Try this today: “On a scale of 1–10, how supported do you feel right now?”
                                    </li>
                                    <li>
                                       Try this today: “On a scale of 1–10, how supported do you feel right now?”
                                    </li>
                                 
                                 </ul>
                              </div>
                           </div>
                        </div>


                     </div>
                     <div className="col-lg-3">

                        <div className="card  crd-prtants01 w-100">
                           <div className="card-body py-0">
                              <h4 className="card-title"> Partners’ Corner </h4>
                              <div className="rec-divbody w-100">
                                 <p className="mt-2"> Watch what others are learning, then bring your questions to the discussion space. </p>
                                 <div className="questions01 d-inline-block w-100">
                                    <h5> Anyone tried the “Listening without fixing” video? </h5>
                                    <p> Last activity · 18 min ago </p>
                                 </div>
                                 <div className="questions01 d-inline-block w-100">
                                    <h5> Anyone tried the “Listening without fixing” video? </h5>
                                    <p> Last activity · 18 min ago </p>
                                 </div>
                                 <div className="questions01 d-inline-block w-100">
                                    <h5> Anyone tried the “Listening without fixing” video? </h5>
                                    <p> Last activity · 18 min ago </p>
                                 </div>
                              </div>
                              
                           </div>
                           <Link href="/" className="btn btn-success mt-2 ms-3"> Go to forum</Link>
                        </div>


                     </div>
                     <div className="col-lg-3">

                        <div className="card crd-prtants01 w-100 recondsa">
                           <div className="card-body py-0">
                                 
                                    <h4 className="card-title"> Recommended for You </h4>
                                 
                                    <ul class="nav nav-tabs m-0 p-0" id="myTab" role="tablist">
                                       <li class="nav-item" role="presentation">
                                          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                           type="button" role="tab" aria-controls="home" aria-selected="true">Articles</button>
                                       </li>
                                       <li class="nav-item" role="presentation">
                                          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" 
                                          type="button" role="tab" aria-controls="profile" aria-selected="false">Videos</button>
                                       </li>
                                       
                                    </ul>
                                    <div class="tab-content mt-3" id="myTabContent">
                                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                         <div className="rec-divbody w-100">
                                             <div className="tables-contents01 d-block w-100">
                                                   <h4> How to talk about symptoms without overwhelm </h4>
                                                   <p> A short guide to having calm, focused check-ins that feel supportive. </p>
                                                   <h6> Article · 6 min read </h6>
                                             </div>
                                             <div className="tables-contents01 d-block w-100">
                                                   <h4> How to talk about symptoms without overwhelm </h4>
                                                   <p> A short guide to having calm, focused check-ins that feel supportive. </p>
                                                   <h6> Article · 6 min read </h6>
                                             </div>
                                             <div className="tables-contents01 d-block w-100">
                                                   <h4> How to talk about symptoms without overwhelm </h4>
                                                   <p> A short guide to having calm, focused check-ins that feel supportive. </p>
                                                   <h6> Article · 6 min read </h6>
                                             </div>
                                          </div>
                                      </div>
                                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                         <div className="tables-contents01 d-block w-100">
                                           <div className="rec-divbody w-100">
                                               <video id='video' controls="controls" preload='none' poster="https://assets.codepen.io/32795/poster.png">
                                                  <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
                                               </video>
                                             <h6> Video · 7 min · Beginner </h6>
                                           </div>
                                         </div>
                                        
                                      </div>
                                    </div>
                                 
                              
                           </div>
                        </div>


                     </div>
                  </div>
                  
               </div>
            </section>


         </main>

         <Footer />
         <MobileMenus />
         <SignupModal />
         <LoginModal />

      </>
   )
}
