import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import PricingBanner from '../components/PricingBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';

export default function Pricing() {


  
  return (
    <>
      <Navication/>
      <PricingBanner/>
      <main className="float-start w-100 main-body position-relative">
        
        <section className="float-start w-100 choose-prats015 position-relative">
           <div className="container">
                  <h2 className="main-heading body-main-heading text-center"> HerCompassAI Pricing Plan Comparison 1 Free (Freemium) – “Start Your Journey” </h2>
                 
                  <div className="row row-cols-1 row-cols-lg-3 pricings-tabs01 gy-4 gx-lg-5 mt-5">
                      <div className="col">
                         <div className="choose-div-pricings d-inline-block w-100">
                            <h3> Basic Plan </h3>
                            
                            <p className="mt-2"> New users exploring symptom tracking and wellness basics. </p>
                            <hr/>
                            <h4 className="mt-3 pricing-texr">$0 <sub>/ month</sub> </h4>
                            <h5 className="mt-3"> Key Features: </h5>
                            <ul className="my-3 list-key">
                               <li> <i className="ri-checkbox-circle-fill"></i> Mood & Symptom Tracker (basic logs) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> 1 Recipe Suggestion per Day </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Access to General Community Forum </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> 1 Guided Meditation / Week </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Phase Education Basics (Menopause 101) </li>
                               <li> <i className="ri-close-circle-fill"></i> No advanced analytics </li>
                               <li> <i className="ri-close-circle-fill"></i> No partner support </li>
                               <li> <i className="ri-close-circle-fill"></i> No expert Q&A </li>
                            </ul>
                            <button className="btn btn-wffull w-100"> Get Started <i className="ri-arrow-right-line"></i> </button>

                            <p> </p>
                         </div>
                      </div>

                      <div className="col">
                         <div className="choose-div-pricings d-inline-block w-100">
                            <h3> Premium Plan </h3>
                            
                            <p className="mt-2"> Users wanting personalized support, recipes, and fitness integration. </p>
                            <hr/>
                            
                           
                              <div className="tab-content" id="myTabContent">
                                 <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h4 className="mt-3 pricing-texr">$7.99 <sub>/ Month</sub> </h4>
                                 </div>
                                 <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 className="mt-3 pricing-texr">$79.99 <sub>/ year</sub> </h4>
                                 </div>
                              </div>
                               
                           
                           <div className="d-flex align-items-center mt-3">
                            <ul className="nav nav-tabs  mb-0 tabs-btn01" id="myTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" 
                                 aria-controls="home" aria-selected="true">Month</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" 
                                 aria-controls="profile" aria-selected="false">Year</button>
                              </li>
                              
                            </ul>
                            <h5 className="text-offers mb-0 ms-3"> Save 15% </h5>
                           </div>

                            <h5 className="mt-3"> Key Features: </h5>
                            <ul className="my-3 list-key">
                               <li> <i className="ri-checkbox-circle-fill"></i> All Free Features </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Unlimited Recipes (mood + symptom-based) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Smart Grocery List Generator </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Exercise & Meditation Libraries (20+ sessions) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Weekly Personalized Insights & Reports </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Gamified Challenges & Badges </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Community Groups by Symptom/Interest </li>
                            </ul>
                            <button className="btn btn-wffull w-100"> Get Started <i className="ri-arrow-right-line"></i> </button>

                            <p> </p>
                         </div>
                      </div>


                      <div className="col">
                         <div className="choose-div-pricings d-inline-block w-100">
                            <h3> Clinician </h3>
                            
                            <p className="mt-2"> Users seeking full AI personalization, advanced analytics, and expert/partner support. </p>
                            <hr/>

                           
                              <div className="tab-content" id="myTabContent">
                                 <div className="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home-tab">
                                    <h4 className="mt-3 pricing-texr">$14.99 <sub>/ Month</sub> </h4>
                                 </div>
                                 <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 className="mt-3 pricing-texr">$129.99 <sub>/ year</sub> </h4>
                                 </div>
                              </div>
                              
                           
                           <div className="d-flex align-items-center mt-3">
                              <ul className="nav nav-tabs  mb-0 tabs-btn01" id="myTab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home2" type="button" role="tab" 
                                    aria-controls="home" aria-selected="true">Month</button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile2" type="button" role="tab" 
                                    aria-controls="profile" aria-selected="false">Year</button>
                                 </li>
                                 
                              </ul>
                              <h5 className="text-offers mb-0 ms-3"> Save 30% </h5>
                            </div>

                            <h5 className="mt-3"> Key Features: </h5>
                            <ul className="my-3 list-key">
                               <li> <i className="ri-checkbox-circle-fill"></i> All Plus Features </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Advanced Analytics Dashboard (symptom triggers, mood trends, food correlations) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Custom AI Meal & Fitness Plans (weekly/monthly) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Monthly Expert Webinars & Q&A (dietitians, menopause specialists) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Partner Support Module (shared dashboard & consent-based data access) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Downloadable Doctor-Friendly Reports (PDF/CSV) </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Offline Access to Recipes & Workouts </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Priority Support + AI Chatbot Concierge </li>
                               <li> <i className="ri-checkbox-circle-fill"></i> Exclusive Affiliate Discounts (wellness brands, supplements) </li>
                            </ul>
                            <button className="btn btn-wffull w-100"> Get Started <i className="ri-arrow-right-line"></i> </button>

                            <p> </p>
                         </div>
                      </div>


                  </div>
           </div>
        </section>
        
      </main>

      <Footer/>
      <MobileMenus/>
   
    </>
  )
}
