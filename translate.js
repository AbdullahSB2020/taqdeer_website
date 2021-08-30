// lang btn on click
window.onload = () => {

    let langBtn = document.getElementById('lang'); 
    langBtn.onclick = (e) => {
        translateAll();
    }
    copyContentIntoDom(content, '')
    translateAll();
}

localStorage.setItem('lang','en','365')

const translateAll = () => {
    let langBtn = document.getElementById('lang'); 

    let language = localStorage.getItem('lang');
    console.log('langeua is ', language);

    if(language == 'ar'){
        language = 'en'; 
        localStorage.setItem('lang',language,'365')
        document.getElementsByTagName('html')[0].setAttribute('lang',language) 
        document.getElementsByTagName('html')[0].setAttribute('dir','ltr')
        langBtn.innerHTML = '<a href="#"><img src="/assets/images/ar.png" alt="" width="13"> العربية</a>'
        translateHeader(language);
        translateFooter(language);
        // show arabic letter with العربية as text
    } else if(language == 'en') {
        language = 'ar'; 
        
        localStorage.setItem('lang',language,'365')

        document.getElementsByTagName('html')[0].setAttribute('lang',language) 
        document.getElementsByTagName('html')[0].setAttribute('dir','rtl')
        langBtn.innerHTML =  '<a href="#"><img src="/assets/images/en.png" alt="" width="13"> English</a>'
        translateHeader(language);
        translateFooter(language);
    }
}

const translateHeader = (language) => {
    console.log(language)
   $('.h-sec-1').translate({lang: language, t: headerTranslate}) 
   $('.h-sec-2').translate({lang: language, t: headerTranslate})
   $('.h-sec-3').translate({lang: language, t: headerTranslate})
}

const translateFooter = (language) => {
    $('.reserve-area').translate({lang: language, t: footerTranslate})
    $('.info').translate({lang: language, t: footerTranslate})
    $('.copy-right').translate({lang: language, t: footerTranslate})
}
const headerTranslate = {
    "Working Hours from 8 AM - 8 PM":{
        ar: "ساعات العمل من 8 صباحا - 8 مساء",
    },
    "Certified by the Saudi Authority for Accredited Residents":{
        ar: "معتمد من الهيئة السعودية للمقيمين المعتمدين",
        // en: "Hello"
    },
    "Home":{
        ar: "الرئيسية",
    },
    "About Us":{
        ar: "من نحن"
    },
    "Our Services":{
        ar: "خدماتنا"
    },
    "Branches":{
        ar: "فروعنا"
    },
    "Employment":{
        ar: "التوظيف"
    },
    "Latest News:":{
        ar: "أحدث الأخبار :"
    },
    "Cartech Company for Vehicle Services":{
        ar: "شركة تقنية السيارة لخدمات السيارات"
    },
    "":{
        ar: ""
    },
    "":{
        ar: ""
    },
    
}

const footerTranslate = {
    "We provide our customers with comprehensive and professional services":{
        ar: "نوفر لعملائنا خدمات شاملة و مميزة يتم تنفيذها باحترافية عالية"
    },
    "Book Examination Service Appointment":{
        ar: "قم بحجز موعد لخدمة التقدير"
    },
    "Cartech Center for Vehicle Damage Estimation":{
        ar: "مركز كارتك لتقدير أضرار المركبات"
    },
    "Mohamed Ben Alalaa St., Al Riyadh, Al Manar District":{
        ar: "شارع محمد بن العلاء – الرياض – حي السعادة"
    },
    "Phone: ":{
        ar: "هاتف: "
    },
    "Email Address: ":{
        ar: "البريد الإلكتروني : "
    },
    "Contact Us":{
        ar: "تواصل معنا"
    },
    "Our Branches":{
        ar: "فروعنا"
    },
    "Media Center":{
        ar: "المركز الإعلامي"
    },
    "Media Articles":{
        ar: "المنشورات الإعلانية"
    },
    "Frequently Asked Question":{
        ar: "الأسئلة الشائعة"
    },
    "Complaints and Suggestions":{
        ar: "الشكاوى و الاقتراحات"
    },
    "Contact":{
        ar: "تواصل معنا"
    },
    "Cartech Services":{
        ar: "خدمات المركز"
    },
    "Estimate Vehicle Damage":{
        ar: "تقدير أضرار المركبات"
    },
    "Electronic Claim":{
        ar: "المطالبة الإلكترونية"
    },
    "Moving Estimation":{
        ar: "التقدير المتنقل"
    },
    "Vehicle Safety Check":{
        ar: "فحص سلامة المركبة"
    },
    "All Services":{
        ar: "جميع الخدمات"
    },
    "CARTECH GALLERY":{
        ar: "صور المركز"
    },
    "All Rights Reserved to CarTech Company Branch for Vehicle Services 2021": {
        ar: "جميع الحقوق محفوظة لفرع شركة تقنيه السيارة لخدمات السيارات 2021"
    },
}