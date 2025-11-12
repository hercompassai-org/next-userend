import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import HowitBanner from '../components/HowitBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';

export default function Howitwork() {


  
  return (
    <>
      <Navication/>
      <HowitBanner/>
      <main className="float-start w-100 main-body position-relative">

        <section className="how-its-works-sections new-howits-div float-start w-100">
            <div className="container">
                 
                 <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 mt-4 gy-4">
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6m3-3h-6"></path></g></svg>
                            </figure>
                            <h5> Step 1 </h5>
                            <h3> Sign Up & Invite </h3>
                            <p> Create an account and invite your partner with a consented link. </p>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                            </figure>
                            <h5> Step 2 </h5>
                            <h3> Track Daily </h3>
                            <p> Log moods, symptoms, sleep and meals in under 60 seconds. </p>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"></path></svg>
                            </figure>
                            <h5> Step 3 </h5>
                            <h3> Get Insights </h3>
                            <p> Receive Al forecasts, personalized tips, and shared challenges to build momentum together. </p>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m11 17l2 2a1 1 0 1 0 3-3"></path><path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path></g></svg>
                            </figure>
                            <h5> Step 4 </h5>
                            <h3> Partner Support </h3>
                            <p> Receive Al forecasts, personalized tips, and shared challenges to build momentum together. </p>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                            </figure>
                            <h5> Step 5 </h5>
                            <h3> Community </h3>
                            <p> Receive Al forecasts, personalized tips, and shared challenges to build momentum together. </p>
                       </div>
                    </div>
                    <div className="col">
                       <div className="comonns-works01 d-inline-block text-center">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                            </figure>
                            <h5> Step 6 </h5>
                            <h3> Grow </h3>
                            <p> Receive Al forecasts, personalized tips, and shared challenges to build momentum together. </p>
                       </div>
                    </div>
                 </div>

                 <a href="#" className="btn btn-start-bn mx-auto d-table">
                    <span className='me-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    </span>
                    Start Your Journey </a>
            </div>
        </section>
        
      </main>

      <Footer/>
      <MobileMenus/>
   
    </>
  )
}
