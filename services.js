const mobile = `0112414088`;
const whatsMobile = `0112414088`;
const email = ``;

let service = {
    Header: {
        Section_1: {
            Email: `<span><a href="#"><i class="far fa-envelope fw"></i> info@cartech.sa</a></span>`,
            WorkHours: `<span><i class="far fa-clock fw"></i><span class='trn'>Working Hours from 8 AM - 8 PM</span></span>`,
            Message: `<span class="trn">Certified by the Saudi Authority for Accredited Residents</span>`,
        },
        Section_2: {
            Link1: `<a href="#" class="trn">Home</a>`,
            Link2: `<a href="#" class="trn">About Us</a>`,
            Link3: `<a href="#" class="trn">Our Services</a>`,
            Link4: `<a href="#" class="trn">Branches</a>`,
            Link5: `<a href="#" class="trn">Employment</a>`,
        },
        Section_3: {
            NewsSection: `<span class='trn'>Latest News:</span>`, 
            News1: `<a href="#">تأكد من التزام الموظفين التابعين لك ومشاركين في عملية تقدير تمسكهم بالميثاق</a>`,
            News2: `<span class='divider'>...</span>`,
            News3: `<a href="#">راعي أحوال الموظفين وحاول أن تجعلهم في أحسن بيئة ممكنة</a>`,
            News4: `<span class='divider'>...</span>`,
            News5: `<a href="#">البيئة المفضلة للعمل هي البيئة التي تنتج أفكار أفضل</a>`,
            News6: ``,
            News7: ``,
            News8: ``,
            News9: ``,
            News10: ``,
            
        },
    },
    Body: {

    }, 
    // FooterReserveAreaLetter
    Footer : {
        ReserveArea: {
            Letter: `<span class="trn">We provide our customers with comprehensive and professional services</span>`,
            Appointment: `<button><span class="trn">Book Examination Service Appointment</span></button>`,
        },
        Info: {
            CenterContact: {
                Title: `<img src="/assets/images/logo-1.png" width="160" alt="">`,
                L1:`<span class="trn">Cartech Center for Vehicle Damage Estimation</span>`,
                L2:`<span class="trn">Mohamed Ben Alalaa St., Al Riyadh, Al Manar District</span>`,
                L3:`<span><span class="trn">Phone: </span><a href="tel:#">0112414088</a></span>`,
                L4:`<span><i class="fab fa-whatsapp fw"></i><a href="#">0112414088</a></span>`,
                L5:`<span><span class="trn">Email Address: </span><a href="mailto:#">info@cartech.sa</a></span>`,
                L6:``,
                L7:``,
            },
            CenterInfo : {
                Title: `<span class="trn">Contact Us</span>`,
                L1: `<a href="#"><span class="trn">Our Branches</span></a>`,
                L2: `<a href="#"><span class="trn">Media Center</span></a>`,
                L3: `<a href="#"><span class="trn">Media Articles</span></a>`,
                L4: `<a href="#"><span class="trn">Frequently Asked Question</span></a>`,
                L5: `<a href="#"><span class="trn">Complaints and Suggestions</span></a>`,
                L6: `<a href="#"><span class="trn">Contact</span></a>`,
            },
            CenterService: {
                Title: `<span class="trn">Cartech Services</span>`,
                L1: `<a href="#"><span class="trn">Estimate Vehicle Damage</span></a>`,
                L2: `<a href="#"><span class="trn">Electronic Claim</span></a>`,
                L3: `<a href="#"><span class="trn">Moving Estimation</span></a>`,
                L4: `<a href="#"><span class="trn">Vehicle Safety Check</span></a>`,
                L5: `<a href="#"><span class="trn">All Services</span></a>`,
                L6: ``,
                L7: ``,
            },
            CenterPhoto: {
                Title: `<span class="trn">CARTECH GALLERY</span>`,
            }
        }
    }
}

function recursive(object,idBuilder){
    if(Object.keys(object).length == 0 || typeof(object) !== "object" ) return ;
    for(let child in object){
        let idPath = '';
        idPath += `${idBuilder}${child}`;
        if(typeof object[child] !== 'object' ) {
            if(document.getElementById(idPath))
                document.getElementById(idPath).innerHTML = object[child];

            idPath = ''
        }
        recursive(object[child],idPath)
    }
}