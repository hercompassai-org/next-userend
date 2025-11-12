import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import GameBanner from '../components/GameBanner';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import BarChart from '../components/BarChart';

export default function Gamification() { 
  return (
    <>
      <Navication/>
      <GameBanner/>
      <main className="float-start w-100 main-body position-relative spacilas-card-bg">

         <section className="float-start w-100 mains-bodys01">
              <div className="container">
                 <div className="row">
                     <div className="col-lg-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Xp Label </h4>
                                    </div>
                                    <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span> Lv 12 </li>
                                    </ul>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    <div className="cart-div015 h-auto pt-0 mt-0">
                                         <BarChart/>
                                    </div>
                                    <p className="mt-3 small-parast"> Earn XP by logging health entries, completing lessons, and supporting your partner. </p>
                                </div>
                             </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="card cm-chart min-heights w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Badges Unlocked </h4>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                   <div className="row row-cols-1 row-cols-lg-4">
                                      <div className="col">
                                         <div className="cart-card018 text-center">
                                            <span className="rounsd01">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
                                            </span>
                                             <h4 className="mt-3"> Consistency </h4>
                                             <p className="mt-2"> 7-day streak </p>
                                         </div>
                                      </div>
                                      <div className="col">
                                         <div className="cart-card018 text-center">
                                            <span className="rounsd01">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                                            </span>
                                             <h4 className="mt-3"> Supportive </h4>
                                             <p className="mt-2"> 5 notes </p>
                                         </div>
                                      </div>
                                      <div className="col">
                                         <div className="cart-card018 text-center">
                                            <span className="rounsd01">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
                                            </span>
                                             <h4 className="mt-3"> Hydrated </h4>
                                             <p className="mt-2"> 5x day </p>
                                         </div>
                                      </div>
                                      <div className="col">
                                         <div className="cart-card018 text-center">
                                            <span className="rounsd01">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"></path></svg>
                                            </span>
                                             <h4 className="mt-3"> Sleep Pro </h4>
                                             <p className="mt-2"> 8h avg </p>
                                         </div>
                                      </div>
                                   </div>
                                    <p className="mt-3 small-parast"> Collect more by completing weekly challenges. </p>
                                </div>
                             </div>
                        </div>
                     </div>
                     <div className="col-lg-2">
                         <div className="card min-heights cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Streak Counter </h4>
                                    </div>
                                </div>
                                <div className="bg-light col-lg-11 mx-auto mt-3 p-4">
                                     <div className="row text-center mx-0">
                                        <div className="col-12">
                                            <div className=" dayest align-items-center">
                                            <h2> 9 days 
                                                <span className="d-block p-0 ms-0"> Current streak </span>
                                            </h2>
                                            </div>
                                           
                                        </div>
                                        <div className="col-12">
                                             <button type="button" className="btn mt-3 btn-primary"> Boost </button>
                                        </div>
                                     </div>
                                </div>
                                <p className="mt-3 small-parast ms-3 mb-4"> Log today to keep it alive. </p>
                             </div>
                         </div>
                     </div>

                     <div className="col-lg-7 mt-4">
                        <div className="card min-he01 cm-chart w-100">
                            <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Couple Rewards </h4>
                                        
                                    </div>
                                </div>
                                 <div className="card-bodys-tabs w-100 d-block">
                                    <div className="row align-items-stretch">
                                      <div className="col-lg-4">
                                         <div className="cm-heads text-center">
                                             <h2> 50% </h2>
                                             <p> Joint Goal </p>
                                         </div>
                                      </div>
                                      <div className="col-lg-8">
                                        <div className="d-flex align-items-center mt-0">
                                            <figure className="user-listy">
                                                <Image width={50} height={50} loading="lazy" src="/t-02-1-300x300.jpg" alt="sm"/>
                                            </figure>
                                            <figure className="user-listy ms-2">
                                                <Image width={50} height={50} loading="lazy" src="/Team-1.jpg" alt="sm"/>
                                            </figure>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="cart-para bg-light p-3">
                                                    <p>You: 28 / 50 pts </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="cart-para bg-light p-3">
                                                    <p>Partner: 22 / 50 pts </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-4">
                                                 <button type="button" className="btn send-btn btn-primary"> Send Encouragement </button>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                     </div>

                     <div className="col-lg-5 mt-4">
                        <div className="card cm-chart min-he01 w-100">
                            <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Reward Milestones </h4>
                                    </div>
                                </div>
                                 <div className="card-bodys-tabs w-100 d-block">
                                     <ul className="ms-0 ps-0 milest-nes">
                                         <li className="">
                                          <Link href="/gamification" className="btn btncomi btn-outline-secondary">  50% — Coffee treat Unlocked </Link>
                                          <Link href="/gamification" className="btn btncomi btn-outline-secondary">  80% — Movie night Unlocked </Link>
                                          <Link href="/gamification" className="btn btncomi btn-outline-secondary">  100% — Weekend hike Unlocked </Link>
                                         </li>
                                     </ul>
                                 </div>
                            </div>
                        </div>
                     </div>

                     <div className="col-lg-12 mt-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Community Leaderboard (Optional) </h4>
                                    </div>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    
                                    <div className="bg-light next-text px-4 py-2 d-flex align-items-center justify-content-between w-100">
                                        <p> Opt-in to share your XP and appear on the community leaderboard. </p>
                                        <button className="btn btn-catrs btn-primary"> Opt In </button>
                                    </div>
                                    
                                    <ul className="rankins0-list ms-0 ps-0 mt-4">
                                        <li className="d-flex align-items-center justify-content-between w-100">
                                          <p className="mb-0"> 1 Alex Morgan </p>
                                          <p className="mb-0"> 12,450 XP </p>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between w-100">
                                          <p className="mb-0"> 2 Priya Patel </p>
                                          <p className="mb-0"> 11,980 XP </p>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between w-100">
                                          <p className="mb-0"> 3 You </p>
                                          <p className="mb-0"> 10,360 XP </p>
                                        </li>
                                    </ul>
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
