import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import FeatureBanner from '../components/FeatureBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';

export default function Features() {


  
  return (
    <>
      <Navication/>
      <FeatureBanner/>
      <main className="float-start w-100 main-body position-relative">
       <section className="float-start w-100 about-vissions-sections position-relative">
          <div className="container">
               <h2 className="text-center mt-2 main-heading col-lg-7 mx-auto body-main-heading"> Everything you need to feel supported </h2>
               <p className="text-center text-sub-paara col-lg-8 mx-auto mt-2"> Mood tracking, smart recipes, men’s support guides, and gentle habit gamification. </p>
               <div className="row col-lg-11 mx-auto row-cols-1 row-cols-lg-2 gx-lg-5 mt-0 gy-4 gy-lg-5">
                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Mood Tracking <div className="insitegts ms-4"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> Insights </div> </h5>
                        </div>
                        <p> Log hot flashes, sleep, energy, and mood. Spot trends and share reports with your clinician. </p>
                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v4m8-4v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></g></svg> </span>  Daily/Weekly </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12"></path></svg> </span>  
                           <h5 className="d-flex align-items-center"> Smart Recipes  </h5>
                        </div>
                        <p> Log hot flashes, sleep, energy, and mood. Spot trends and share reports with your clinician. </p>
                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"></path></svg> </span>   Personalized </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Evidence-based </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m11 17l2 2a1 1 0 1 0 3-3"></path><path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Men’s Support  </h5>
                        </div>
                        <p> Guides and groups for partners to understand, empathize, and show up with care. </p>

                        <ul className="d-flex  m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> </span>   Expert‑reviewed </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

                 <div className="col">
                    <div className="comons-modas d-inline-block coui-text015 w-100">
                        <div className="d-flex align-items-center">
                          <span className="ms-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path><path d="m9 12l2 2l4-4"></path></g></svg> </span>  
                           <h5 className="d-flex align-items-center"> Gamification  </h5>
                        </div>
                        <p> Earn streaks and gentle badges for healthy habits—sleep, walks, hydration, and reflection. </p>

                        <ul className="d-flex m-0 p-0 align-items-center list015-div mt-3">
                           <li> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> </span>   Evidence-based </li>
                           <li className="ms-3"> <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9l-5 5l-4-4l-3 3"></path></g></svg> </span>   Trends </li>
                        </ul>
                        <Link href="/features" className="btn btn-loiks01 mt-3">  Learn more <i className="ri-arrow-right-line"></i> </Link>
                         
                    </div>
                 </div>

              </div>
          </div>
       </section>


        <section className="pricing-table w-100 d-inline-block mt-0">
           <div className="container">
               <h2 className="main-heading text-center mb-4">Compare Plans</h2>
               <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                     <thead>
                     <tr>
                        <th className="bg-light">Feature</th>
                        <th>
                           <div className="plan-header">
                           <h4>Free (Freemium)</h4>
                           <div className="price">$0 / month</div>
                           <small>Basic features</small>
                           </div>
                        </th>
                        <th>
                           <div className="plan-header mid">
                           <h4>Mid (Wellness Plus)</h4>
                           <div className="price">$7.99 / month</div>
                           <small>Advanced wellness tools</small>
                           </div>
                        </th>
                        <th>
                           <div className="plan-header premium">
                           <h4>Premium (Total Balance)</h4>
                           <div className="price">$14.99 / month</div>
                           <small>Full access + AI personalization</small>
                           </div>
                        </th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr><td className="feature-title">Mood & Symptom Tracker</td>
                        <td>✅ Basic tracking</td><td>✅ Advanced tracking + history</td><td>✅ Advanced + AI insights & triggers</td></tr>

                     <tr><td className="feature-title">AI Meal Plans</td>
                        <td className="cross">❌</td><td>✅ Weekly plans</td><td>✅ Weekly + Monthly + custom macros</td></tr>

                     <tr><td className="feature-title">Smart Recipe Suggestions</td>
                        <td>✅ Basic filters</td><td>✅ Phase & mood-based</td><td>✅ AI + nutrient correlation</td></tr>

                     <tr><td className="feature-title">Grocery List Generator</td>
                        <td className="cross">❌</td><td>✅ Linked to recipes</td><td>✅ Linked + export/download</td></tr>

                     <tr><td className="feature-title">Exercise Library</td>
                        <td>✅ 5 sample workouts</td><td>✅ 15 workouts + programs</td><td>✅ Full library + personalized plans</td></tr>

                     <tr><td className="feature-title">Meditation Library</td>
                        <td>✅ 3 sample meditations</td><td>✅ 10 meditations</td><td>✅ Full library + AI playlist</td></tr>

                     <tr><td className="feature-title">Community Forum</td>
                        <td>✅ Post & reply</td><td>✅ Private groups</td><td>✅ Premium-only groups</td></tr>

                     <tr><td className="feature-title">Toxic Comment Detection</td>
                        <td>✅ Automated moderation</td><td>✅ + Manual review</td><td>✅ + Premium mod priority</td></tr>

                     <tr><td className="feature-title">Monthly Expert Webinars</td>
                        <td className="cross">❌</td><td>✅ 1 per month (recorded)</td><td>✅ Live + Q&A + replay</td></tr>

                     <tr><td className="feature-title">Hormone & Lifestyle Assessments</td>
                        <td className="cross">❌</td><td>✅ Basic quizzes</td><td>✅ AI-based recommendations</td></tr>

                     <tr><td className="feature-title">AI Chatbot (Personalized Q&A)</td>
                        <td className="cross">❌</td><td className="cross">❌</td><td>✅ Full personalization</td></tr>

                     <tr><td className="feature-title">Analytics & Progress Insights</td>
                        <td className="cross">❌</td><td>✅ Basic charts</td><td>✅ AI-driven trends</td></tr>

                     <tr><td className="feature-title">Offline Access</td>
                        <td className="cross">❌</td><td>✅ Recipes & workouts</td><td>✅ All content</td></tr>

                     <tr><td className="feature-title">Priority Support</td>
                        <td className="cross">❌</td><td className="cross">❌</td><td>✅ 24hr Email/Chat</td></tr>

                     <tr><td className="feature-title">Seasonal Challenges</td>
                        <td>✅ Basic challenges</td><td>✅ Premium challenges</td><td>✅ Exclusive rewards</td></tr>

                     <tr><td className="feature-title">Exclusive Discounts</td>
                        <td className="cross">❌</td><td>✅ Some offers</td><td>✅ Premium-only deals</td></tr>

                     <tr><td className="feature-title"></td>
                        <td className="cross"><a href="#" className="btn btn-gets-strtad">Get Started</a></td><td><a href="#" className="btn btn-gets-strtad">Get Started</a></td><td><a href="#" className="btn btn-gets-strtad">Get Started</a></td></tr>

                     </tbody>
                  </table>
               </div>
           </div>
         </section>

    

        
      </main>

      <Footer/>
      <MobileMenus/>
   
    </>
  )
}
