import styles from "../../Styles/styles"
import { logo } from "../../assets"
import { footerLinks, socialMedia } from "../index"
import { useLocation } from "react-router-dom";

const Footer = () => {

  // Checking if the page is the login page
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/login") return null;


  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className='bg-primary w-full overflow-hidden p-12 flex flex-col'>
        <div className={`bg-primary ${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className={`${styles.boxWidth}`}>
            <section className={` sm:py-16 flex-col py-1 mb-0`}>
              <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                
                <div className="flex-1 flex flex-col justify-start mr-10 ml-4">
                  <img src={logo} alt="EcoAquarium" className="w-[50px] h-[50px]" />
                    <a className="cursor-pointer md:text-[30px] text-gradient font-semibold mr-10 ml-3 text-[9px] sm:block text-gradient">
                      EcoAquarium</a>
                  <p className={`${styles.paragraph} mt-1 text-[15px]`}> Experience the magic of marine life</p>
                  {/* <p className={`${styles.paragraph} mt-1 text-[20px] font-bold text-secondary`}> Tel: +94 37 225 1377</p> */}
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                  {footerLinks.map((footerLink) => (
                    <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] mr-10">
                      <h4 className="font-medium text-[15px] leading-[27px]  text-black"> {footerLink.title} </h4>
                      <ul className="list-none mt-3">
                        {footerLink.links.map((Link, index) => (
                          <li key={Link.name} className={`font-normal text-[14px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer 
                          ${index !== footerLink.links.length - 1 ? 'mb-4':'mb-0'}`} >
                            {Link.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#000000] mb-0">
                
                {/* <div className="flex flex-row md:mt-0 mt-6">
                  {socialMedia.map((social, index) => (
                    // <div key={social.id}>Test</div>
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-containt cursor-pointer
                    ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-4'}`} />
                  ))}
                </div>     */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer