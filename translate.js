// lang btn on click
window.onload = () => {

    let langBtn = document.getElementById('lang'); 
    langBtn.onclick = (e) => {
        translateAll();
    }
    recursive(service, '')
    // translateAll();
}

localStorage.setItem('lang','ar','365')

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
        // show arabic letter with العربية as text
    } else if(language == 'en') {
        language = 'ar'; 
        
        localStorage.setItem('lang',language,'365')

        document.getElementsByTagName('html')[0].setAttribute('lang',language) 
        document.getElementsByTagName('html')[0].setAttribute('dir','rtl')
        langBtn.innerHTML =  '<a href="#"><img src="/assets/images/en.png" alt="" width="13"> English</a>'
        translateHeader(language);

    }
}

const translateHeader = (language) => {
    console.log(language)
   $('.h-sec-1').translate({lang: language, t: headerTranslate}) 
   $('.h-sec-2').translate({lang: language, t: headerTranslate})
   $('.h-sec-3').translate({lang: language, t: headerTranslate})
}

const footerTranslate = (language) => {
    
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
    "":{
        ar: ""
    },
    "":{
        ar: ""
    },
    "":{
        ar: ""
    },
    
}

