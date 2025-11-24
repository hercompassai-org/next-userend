import Link from "next/link";
import Image from "next/image";
 
function SymtomBanner() {
   
    return(
     <>
    <section className="banner-div float-start sub-page-banners pb-0 symtomes-banners015-div w-100 position-relative">

         <div className="container position-relative">
            <div className="row align-items-center">
               <div className="col-lg-7 align-items-center">
                  <div className="items-text01">
                     <h2 className="main-heading">Track & Understand Your Health</h2>
                     <p className="col-lg-9"> A relationship-centered menopause wellness platform that combines clinician-backed guidance. </p>
                     
                  </div>
               </div>
               <div className="col-lg-5">
                 <div className="d-flex align-items-center justify-content-end">
                      <button type="button" className="btn btn-last01-caler01"> <i class="ri-calendar-2-line"></i> Last 30 days </button>
                      <button type="button" className="btn btn-last01 ms-3"> <i class="ri-add-large-line"></i> Add Entry</button>
                 </div>
               </div>
               
            </div>
         </div>


   </section>
     </>
     )
};
export default SymtomBanner;
   