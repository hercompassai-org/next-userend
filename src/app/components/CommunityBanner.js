import Link from "next/link";
import Image from "next/image";
 
function CommunityBanner() {
    const menulist = [{ id: 1, title: 'Features' , link: '/features'}, { id: 2, title: 'Community' , link: '/community'},{ id: 3, title: 'How it work' , link: '/howitwork'}, {id:4, title: 'Pricing' , link: '/pricing '} ]; 
    return(
     <>
     <section className="banner-div float-start sub-page-banners w-100 position-relative">
         <div className="container position-relative">
            <div className="row align-items-start">
               <div className="col-lg-7">
                  <div className="items-text01">
                     <h2 className="main-heading"> Connect with Others  </h2>
                     <p className="col-lg-9"> A relationship-centered menopause wellness platform that combines clinician-backed guidance. </p>                     
                  </div>
               </div>
            </div>

            <ul className="nav nav-tabs banners-tabs01" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                        data-bs-target="#home" type="button" role="tab">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                        </span>
                        Women’s Forum</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" 
                    role="tab">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                        </span>
                    Couple Groups</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                        role="tab">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                        </span>
                        Men’s Hub</button>
                </li>
            </ul>
         </div>
      </section>
     </>
     )
};
export default CommunityBanner;
   