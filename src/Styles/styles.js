const styles = {

    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    

    mainHeader: "fixed z-50 w-screen bg-slate-300 p-6 px-16 sticky top-0",

    deskTop: "hidden md:flex w-full h-full items-center justify-between",
    mobile: "flex md:hidden w-full h-full",

    navUL: "flex items-center gap-8 ",
    navLI: "text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer",
    navCart: "relative flex items-center justify-center",
    navIcon: "text-textColor text-2x1 duration-100 transition-all ease-in-out cursor-pointer h-6 w-6",
    navCartList: "absolute -right-2 -top-2 h-4 w-4 rounded-full flex items-center justify-center bg-cartNumBg",
    navCartNum: "text-white text-xs font-semibold text-[10px]",
    
    logoIMG: "flex items-center gap-2",
    logoName: "text-headingColor text-xl font-bold",
    avatar: "w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer",

    formLable: "block text-sm font-medium text-gray-700",

// Address Update, Add Form
    ADtxt: "mt-1 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md h-8 box-border hover:box-content hover:bg-slate-100 duration-500 ",
    
// Address List
    ALtable: "w-full text-sm text-center text-gray-500 dark:text-gray-400 table-fixed mt-4 mb-4",
    ALthread: "text-xs",
    ALth: " relative",
    ALtd: "py-2 px-6 h-15 text-sm text-justify-relative text-white ",
    ALbtn: "bg-blue-gradient text-black py-2 px-4 rounded shadow mb-2 hover:bg-blue-200 hover:text-blue-800 duration-500",

//Stock List
    SLtable:"w-full text-left text-white SL-table",
    SLbtn: "bg-btn-gradient text-headingColor duration-500 text-black py-2 px-2 rounded shadow SL-tbl-btn",
    SLthead: "SL-thead-gradient",
    SLtd:"px-7 w-relative",
    ADbtn:"S-btn bg-btn-gradient hover:bg-btn-gradient duration-500 text-black py-2 px-2 rounded shadow SL-table"

};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles