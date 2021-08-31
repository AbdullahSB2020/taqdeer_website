// lang btn on click
window.onload = () => {

    let langBtn = document.getElementById('lang')
    langBtn.onclick = (e) => {
        translateAll()
    }
    copyContentIntoDom(content, '')
    translateAll()
}

localStorage.setItem('lang','en','365')

const translateAll = () => {
    let langBtn = document.getElementById('lang')

    let language = localStorage.getItem('lang')
    console.log('langeua is ', language)

    if(language == 'ar'){
        language = 'en'
        localStorage.setItem('lang',language,'365')
        document.getElementsByTagName('html')[0].setAttribute('lang',language) 
        document.getElementsByTagName('html')[0].setAttribute('dir','ltr')
        langBtn.innerHTML = '<a href="#"><img src="/assets/images/ar.png" alt="" width="13"> العربية</a>'
        translateHeader(language)
        translateFooter(language)
        translateBody(language)
        // show arabic letter with العربية as text
    } else if(language == 'en') {
        language = 'ar'
        
        localStorage.setItem('lang',language,'365')

        document.getElementsByTagName('html')[0].setAttribute('lang',language) 
        document.getElementsByTagName('html')[0].setAttribute('dir','rtl')
        langBtn.innerHTML =  '<a href="#"><img src="/assets/images/en.png" alt="" width="13"> English</a>'
        translateHeader(language)
        translateFooter(language)
        translateBody(language)
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
const translateBody = (language) => {
    $('.body-request').translate({lang: language, t: bodyTranslate})
    $('.body-landing').translate({lang: language, t: bodyTranslate})
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

const bodyTranslate = {
    "Request An Estimation Service":{
        ar: "طلب خدمة تقدير"
    },
    "Book An Appointment":{
        ar: "حجز موعد"
    },
    "Name":{
        ar: "الاسم"
    },
    "Phone":{
        ar: "الهاتف"
    },
    "Accident Number":{
        ar: "رقم الحادث"
    },
    "Plate Characters":{
        ar: "حروف اللوحة"
    },
    "Plate Number":{
        ar: "رقم اللوحة"
    },
    "Appointment Date":{
        ar: "تاريخ الموعد"
    },
    "Appointment Time":{
        ar: "وقت الموعد"
    },
    "Service Location":{
        ar: "موقع الخدمة"
    },
    "Indoor":{
        ar: "داخل المركز"
    },
    "In Client Location":{
        ar: "التقدير في موقع العميل"
    },
    "Send":{
        ar: "إرسال"
    },
    // ORDER STEPS
    "Before Appointment":{
        ar: "قبل الموعد"
    },
    "At least 15 minutes early":{
        ar: "الحضور مبكرا بربع ساعة على الأقل"
    },
    "Estimation Requirements":{
        ar: "متطلبات التقدير"
    },
    "Vehicle Form – Vehicle Estimation Request":{
        ar: "استمارة المركبة – طلب تقدير المركبة"
    },
    "Cost":{
        ar: "التكلفة"
    },
    "Cost Value 172,5 riyal Payment by":{
        ar: "قيمة التكلفة 172,5 ريال الدفع عن طريق"
    },
    // LANDING PAGE TRANSLATION
    "Because We":{
        ar: "لأننا"
    },
    "Master Estimation Services":{
        ar: "نتقن التقدير"
    },
    "We offer comprehensive vehicle services in an integrated manner that meets all needs and requirements Customers":{
        ar: "نقدم خدمات شاملة للمركبات بشكلٍ متكامل<br>يلبي كافة احتياجات ومتطلبات العملاء"
    },
    "Exanimate Traffic Accident":{
        ar: "تقدير حادث مروري"
    },
    "Exanimate Nejm Accident":{
        ar: "تقدير حادث نجم"
    },
    "Taqdeer":{
        ar: "تقدير"
    },
    "Easy":{
        ar: "ولا أسهل"
    },
    "Estimate":{
        ar: "تقدير"
    },
    "Because we care about you and guarantee fast service and high quality":{
        ar: "لأننا نهتم بك, ونضمن لك الخدمة السريعة والجودة العالية"
    },
    "The Cartech Center provides a vehicle accident damage assessment service at the hands of accredited evaluators, as it contributes to shortening and facilitating vehicle damage assessment procedures, raising the level of professionalism in assessment reports and controlling them in a manner that preserves the rights of all parties. Therefore, an assessment system worked on automating the procedures and converting them from 18 paper steps In several locations to 3 steps in one center, through which the beneficiary can finish all the assessment processes in his visit to the assessment center and send his reports to the insurance company.":{
        ar: "يقدم مركز كارتك خدمة تقدير أضرار حوادث المركبات على أيدي مقيّمين معتمدين من قبل الهيئة السعودية للمقيّمين المعتمدين, حيث يسهم في اختصار وتسهيل إجراءات تقدير أضرار المركبات, ورفع مستوى المهنيّة في تقارير التقدير وضبطها بما يحفظ حقوق جميع الأطراف, لذلك عملت (منظومة تقدير) على أتمتة الإجراءات وتحويلها من 18 خطوة ورقية في عدة مواقع إلى 3 خطوات في مركز واحد, يستطيع المستفيد من خلاله إنهاء جميع عمليات التقدير في زيارته لمركز التقدير وإرسال تقاريره لشركة التأمين ."
    },
    "Receive Beneficiaries":{
        ar: "استقبال المستفيدين"
    },
    "Check and Estimate Damages":{
        ar: "فحص و تقدير الأضرار"
    },
    "Report and Send to Insurance Company":{
        ar: "إصدار التقرير و إرساله لشركات التأمين"
    },
    "Recognition Services":{
        ar: "للتقدير"
    },
    "We offer comprehensive and guaranteed":{
        ar: `نقدم لك خدمات شاملة ومضمونة`
    },
    "We provide our customers with comprehensive and distinctive services that are professionally implemented to keep pace Saudi market aspirations and customer needs":{
        ar: "نوفّر لعملائنا خدمات شاملة ومميزة يتم تنفيذها باحترافية عالية لتواكب تطلعات السوق السعودي وتلبي احتياجات ومتطلبات العملاء"
    },
    "Moving Estimation":{
        ar: "التقدير المتنقل"
    },
    "Electronic Claim":{
        ar: "المطالبة الإلكترونية"
    },
    "Estimate Vehicle Damage":{
        ar: "تقدير أضرار المركبة"
    },
    "Vehicle Safety Check":{
        ar: "فحص سلامة المركبة"
    },
    "Request Estimation":{
        ar: "طلب خدمة تقدير"
    },
    "All Services":{
        ar: "جميع الخدمات"
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