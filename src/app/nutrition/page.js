import Image from 'next/image';
import Navication from '../components/Navication';
import Footer from '../components/Footer';
import Link from 'next/link';
import MobileMenus from '../components/MobileMenus';
import NutriBanner from '../components/NutriBanner';
import BarChart from '../components/BarChart';

export default function Nutrition() { 
  return (
    <>
      <Navication/>
      <NutriBanner/>
      <main className="float-start w-100 main-body position-relative spacilas-card-bg">
            <section className="float-start w-100 mains-bodys01">
              <div className="container">
                 <div className="row">
                     <div className="col-lg-6">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Nutrition Radar Chart </h4>
                                        
                                    </div>
                                    <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(155,139,240,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span>  Intake </li>
                                           <li className="d-flex align-items-center ms-3"> <span className="cr-modas mb-0 me-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(240,187,64,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg> </span>   Target </li>
                                    </ul>
                                </div>
                                <div className="card-bodys-tabs w-100 d-block">
                                    

                                    <div className="cart-div015 h-auto pt-0 mt-0">
                                        
                                           <BarChart/>
                                         
                                        
                                    </div>
                                    
                                    <p className="mt-3 small-parast"> Your intake vs targets </p>
                                </div>

                             </div>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="card cm-chart min-heights w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Today's Summary </h4>
                                        
                                    </div>
                                    <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                           <li className="d-flex align-items-center"> Updated just now </li>
                                         
                                    </ul>
                                </div>
                                <div className="card-bodys-tabs pb-0 w-100 d-block">
                                    
                                   <div className="diates-div01">
                                      <ul className="m-0">
                                        <li className="d-flex align-items-center justify-content-between w-100"> Calories <strong> 1,420 / 2,100 kcal </strong> </li>
                                        <li className="d-flex align-items-center justify-content-between w-100"> Protein <strong> 82g / 120g </strong> </li>
                                        <li className="d-flex align-items-center justify-content-between w-100"> Carbs <strong> 130g / 250g </strong> </li>
                                        <li className="d-flex align-items-center justify-content-between w-100"> Fats <strong> 1,420 / 2,100 kcal </strong> </li>
                                        <li className="d-flex align-items-center justify-content-between w-100"> Fiber <strong> 1,420 / 2,100 kcal </strong> </li>
                                      </ul>
                                   </div>
                                   
                                    
                                    
                                </div>

                             </div>
                        </div>
                     </div>

                     <div className="col-lg-12 mt-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> Mood-Based Recipes </h4>
                                        
                                    </div>
                                    <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                        <li className="d-flex align-items-center"> Swipe to explore </li>
                                    </ul>
                                </div>

                                <div className="card-bodys-tabs pb-0 w-100 d-block pb-4">
                                     <div className="row row-cols-1 row-cols-lg-5">
                                         <div className="col">
                                             <a href="#" className="comons-menus d-inline-block w-100">
                                                 <figure>
                                                     <Image width={226} height={180} loading="lazy" src="/photo-1734313276347-abd532a3ed13.jfif" alt="sm"/>
                                                 </figure>
                                                 <div className="tes-details">
                                                     <h6>  Energetic </h6>
                                                     <h4 className="mt-2">  Citrus Miso Salmon Bowl  </h4>
                                                     <ul className="d-flex align-items-center ms-0 ps-0 mt-3">
                                                        <li> Citrus Miso Salmon Bowl </li>
                                                        <li className="ms-3"> Omega-3 </li>
                                                     </ul>
                                                 </div>
                                             </a>
                                         </div>
                                         <div className="col">
                                             <a href="#" className="comons-menus d-inline-block w-100">
                                                 <figure>
                                                     <Image width={226} height={180} loading="lazy" src="/photo-1734772682896-2db9bf254596.jfif" alt="sm"/>
                                                 </figure>
                                                 <div className="tes-details">
                                                     <h6>  Energetic </h6>
                                                     <h4 className="mt-2">  Citrus Miso Salmon Bowl  </h4>
                                                     <ul className="d-flex align-items-center ms-0 ps-0 mt-3">
                                                        <li> Citrus Miso Salmon Bowl </li>
                                                        <li className="ms-3"> Omega-3 </li>
                                                     </ul>
                                                 </div>
                                             </a>
                                         </div>
                                         <div className="col">
                                             <a href="#" className="comons-menus d-inline-block w-100">
                                                 <figure>
                                                     <Image width={226} height={180} loading="lazy" src="/photo-1590743833348-7d1f6eb1e7f6.jfif" alt="sm"/>
                                                 </figure>
                                                 <div className="tes-details">
                                                     <h6>  Energetic </h6>
                                                     <h4 className="mt-2">  Citrus Miso Salmon Bowl  </h4>
                                                     <ul className="d-flex align-items-center ms-0 ps-0 mt-3">
                                                        <li> Citrus Miso Salmon Bowl </li>
                                                        <li className="ms-3"> Omega-3 </li>
                                                     </ul>
                                                 </div>
                                             </a>
                                         </div>
                                         <div className="col">
                                             <a href="#" className="comons-menus d-inline-block w-100">
                                                 <figure>
                                                     <Image width={226} height={180} loading="lazy" src="/photo-1734313276347-abd532a3ed13.jfif" alt="sm"/>
                                                 </figure>
                                                 <div className="tes-details">
                                                     <h6>  Energetic </h6>
                                                     <h4 className="mt-2">  Citrus Miso Salmon Bowl  </h4>
                                                     <ul className="d-flex align-items-center ms-0 ps-0 mt-3">
                                                        <li> Citrus Miso Salmon Bowl </li>
                                                        <li className="ms-3"> Omega-3 </li>
                                                     </ul>
                                                 </div>
                                             </a>
                                         </div>
                                         <div className="col">
                                             <a href="#" className="comons-menus d-inline-block w-100">
                                                 <figure>
                                                     <Image width={226} height={180} loading="lazy" src="/photo-1686998423980-ab223d183055.jfif" alt="sm"/>
                                                 </figure>
                                                 <div className="tes-details">
                                                     <h6>  Energetic </h6>
                                                     <h4 className="mt-2">  Citrus Miso Salmon Bowl  </h4>
                                                     <ul className="d-flex align-items-center ms-0 ps-0 mt-3">
                                                        <li> Citrus Miso Salmon Bowl </li>
                                                        <li className="ms-3"> Omega-3 </li>
                                                     </ul>
                                                 </div>
                                             </a>
                                         </div>
                                     </div>
                                </div>
                             </div>

                        </div>
                     </div>

                     <div className="col-lg-12 mt-4">
                        <div className="card cm-chart w-100">
                             <div className="card-body p-0">
                                <div className="d-flex top-botteoms justify-content-between align-items-center">
                                    <div className="lefts-head01">
                                        <h4 className="card-title"> AI Suggested Meals This Week </h4>
                                        
                                    </div>
                                    <ul className="ms-0 ps-0 mt-0 d-flex align-items-center">
                                        <li className="d-flex align-items-center"> Tailored to your goals </li>
                                    </ul>
                                </div>

                                <div className="card-bodys-tabs pb-0 w-100 d-block pb-4">
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Mon </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
                                             </div>
                                        </div>
                                     </div>
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Tue </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
                                             </div>
                                        </div>
                                     </div>
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Wed </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
                                             </div>
                                        </div>
                                     </div>
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Thu </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
                                             </div>
                                        </div>
                                     </div>
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Fri </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
                                             </div>
                                        </div>
                                     </div>
                                     <div className="food-lis01 d-inline-block w-100">
                                        <div className="row align-items-center">
                                             <div className="col-lg-9">
                                                <div className="d-flex align-items-center">
                                                     <h6 className="bg-light p-3"> Sun </h6>
                                                     <h5 className="ms-3"> Grilled Chicken Quinoa 
                                                        <span className="d-block"> High protein, balanced carbs </span>
                                                     </h5>
                                                </div>
                                             </div>
                                             <div className="col-lg-3 d-grid justify-content-end">
                                                 <button type="button" className="btn btn-primary">  Add to list </button>
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

      <Footer/>
      <MobileMenus/>
   
    </>
  )
}
