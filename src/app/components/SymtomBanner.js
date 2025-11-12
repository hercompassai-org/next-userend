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
                     <h2 className="main-heading"> Learn, Support & Earn  </h2>
                     <p className="col-lg-9"> Track your growth, celebrate milestones, and see how you compare—solo and together. </p>
                     
                  </div>
               </div>
               <div className="col-lg-5">
                 <div className="d-flex align-items-center justify-content-end">
                      <button type="button" className="btn btn-last01-caler01"> <i className="ri-chat-smile-2-line"></i> Support </button>
                      <button type="button" className="btn btn-last01 ms-3"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="4" x="3" y="8" rx="1"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg> Claim Rewards </button>
                 </div>
               </div>
               
            </div>
         </div>


   </section>
     </>
     )
};
export default SymtomBanner;
   