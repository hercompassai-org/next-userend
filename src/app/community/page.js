import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import CommunityBanner from '../components/CommunityBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';

export default function Community() {


  
  return (
    <>
      <Navication/>
      <CommunityBanner/>
      <main className="float-start w-100 main-body position-relative">
         
          <section className="tabs-comuinity-sections d-inline-block w-100 py-4 py-lg-5">
           <div className="container">
                   
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="car-textr d-inline-block w-100">
                                
                                
                                <div className="row gx-lg-5">
                                    <div className="col-lg-8">
                                         <div className="d-lg-flex align-items-center justify-content-between w-100">
                                            <h2 className="cl-titels01"> Women’s Forum Feed </h2>
                                             <h6 className="showin-text01">Showing latest posts </h6>
                                         </div>
                                         <hr className="list-hr"/>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/istockphoto-1496615764-612x612.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/pexels-cottonbro-4046151.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         

                                         
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="rights-cards d-inline-block w-100">
                                             <h4> Upcoming AMA </h4>
                                             <div className="d-flex align-items-center mt-3">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/man-holding-cash_204719-55917.png" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  James K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span>
                                                    </Link>
                                                </h5>
                                             </div>
                                             <p className="mt-2"> Topic: Demystifying fertility lab results </p>

                                             <Link href="/community" className="btn btn-primary w-100 mt-3"> <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg> Add to calendar </Link>
                                        </div>

                                        <div className="rights-cards d-inline-block w-100 mt-4">
                                             <h4> Partner Sub-Forum </h4>
                                             
                                             <p className="mt-2"> A dedicated space for partners to share experiences and ask questions. </p>

                                             <Link href="/community" className="btn btn-warning w-100 mt-3"> 
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
                                                Join the Partner Hub </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="car-textr d-inline-block w-100">
                                
                                
                                <div className="row gx-lg-5">
                                    <div className="col-lg-8">
                                         <div className="d-lg-flex align-items-center justify-content-between w-100">
                                            <h2 className="cl-titels01"> Couple Groups Feed </h2>
                                             <h6 className="showin-text01">Showing latest posts </h6>
                                         </div>
                                         <hr className="list-hr"/>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/istockphoto-1496615764-612x612.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/pexels-cottonbro-4046151.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span>
                                                    </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/istockphoto-1496615019-612x612.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies  </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="rights-cards d-inline-block w-100">
                                             <h4> Upcoming AMA </h4>
                                             <div className="d-flex align-items-center mt-3">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/man-holding-cash_204719-55917.png" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  James K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <p className="mt-2"> Topic: Demystifying fertility lab results </p>

                                             <Link href="/community" className="btn btn-primary w-100 mt-3"> <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg> Add to calendar </Link>
                                        </div>

                                        <div className="rights-cards d-inline-block w-100 mt-4">
                                             <h4> Partner Sub-Forum </h4>
                                             
                                             <p className="mt-2"> A dedicated space for partners to share experiences and ask questions. </p>

                                             <Link href="/community" className="btn btn-warning w-100 mt-3"> 
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
                                                Join the Partner Hub </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="car-textr d-inline-block w-100">
                                
                                
                                <div className="row gx-lg-5">
                                    <div className="col-lg-8">
                                         <div className="d-lg-flex align-items-center justify-content-between w-100">
                                            <h2 className="cl-titels01"> Men’s Hub Feed </h2>
                                             <h6 className="showin-text01">Showing latest posts </h6>
                                         </div>
                                         <hr className="list-hr"/>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/istockphoto-1496615764-612x612.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies  </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/pexels-cottonbro-4046151.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <div className="card-sections-015 d-inline-block w-100 mb-4">
                                             <div className="d-flex align-items-center">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/istockphoto-1496615019-612x612.jpg" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  Aisha K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <div className="contents-div015 d-inline-block w-100 mt-3">
                                                 <h4> Navigating early IVF appointments </h4>
                                                 <p className="mt-2"> What questions helped you feel prepared for the first consult? I’m
                                                     compiling a list to bring next week and would love your tips... </p>
                                                 <ul className="d-flex flex-wrap align-items-center mt-3">
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> IVF </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> First Consult </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-tags"> Advice </button>
                                                    </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="rights-cards d-inline-block w-100">
                                             <h4> Upcoming AMA </h4>
                                             <div className="d-flex align-items-center mt-3">
                                                <Link href="/community" className="user-pic d-inline-block">
                                                     <Image width={50} height={50} loading="lazy" src="/man-holding-cash_204719-55917.png" alt="ucers"/>
                                                </Link>
                                                <h5> <Link href="/community">  James K. 
                                                    <span className="d-block"> 2h ago • 34 replies </span> </Link>
                                                </h5>
                                             </div>
                                             <p className="mt-2"> Topic: Demystifying fertility lab results </p>

                                             <Link href="/community" className="btn btn-primary w-100 mt-3"> <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg> Add to calendar </Link>
                                        </div>

                                        <div className="rights-cards d-inline-block w-100 mt-4">
                                             <h4> Partner Sub-Forum </h4>
                                             
                                             <p className="mt-2"> A dedicated space for partners to share experiences and ask questions. </p>

                                             <Link href="/community" className="btn btn-warning w-100 mt-3"> 
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
                                                Join the Partner Hub </Link>
                                        </div>

                                    </div>
                                </div>
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
