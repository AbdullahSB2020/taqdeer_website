const mobile = `0112414088`;
const whatsMobile = `0112414088`;
const email = `info@cartech.sa`;
const companyLogoSrc = '/assets/images/logo-1.png'

// ORDER IMAGES
const order1 = `/assets/images/order-1.png`
const order2 = `/assets/images/order-2.png`
const order3 = `/assets/images/order-3.png`
const order3Pay = `/assets/images/order-3-1.png`

// CENTER PHOTOS
const centerImage1 = `/assets/images/center-photos/1.jpg`
const centerImage2 = `/assets/images/center-photos/2.jpg`
const centerImage3 = `/assets/images/center-photos/3.jpg`
const centerImage4 = `/assets/images/center-photos/4.jpg`
const centerImage5 = `/assets/images/center-photos/5.jpg`
const centerImage6 = `/assets/images/center-photos/6.jpg`

const facebookLink = `#`
const twitterLink = `#`
const instagramLink = `#`
const youtubeLink = `#`

/// LANDING PAGE
const easyImage1 = '/assets/images/Mask-Group-1.png'
const easyImage2 = '/assets/images/Mask-Group-2.png'
const easyImage3 = '/assets/images/Mask-Group-3.png'

const requestPageLink = `/taqdeer-request.html`;

/**
 * object => SRC => {value}
 * object => HREF => {value}
 * always parent of (SRC or HREF) will be id of element
 *  
 */

let content = {
    Header: {
        Section_1: {
            Message: `Certified by the Saudi Authority for Accredited Residents`,
            WorkHours: `Working Hours from 8 AM - 8 PM`,
            EmailHref : {
                HREF: `mailto:${email}`
            },
            Email: `${email}`,
            Phones_1: `${mobile}`,
            Phones_1Href: {
                HREF:`tel:${mobile}`
            },
            Phones_2: `${whatsMobile}`,
            Phones_2Href: {
                HREF:`#`,
            },
            Facebook : `<i class="fab fa-facebook fs"></i>`,
            FacebookHref: {
                HREF: `${facebookLink}`
            },
            Twitter: `<i class="fab fa-twitter fs"></i>`,
            TwitterHref: {
                HREF: `${twitterLink}`
            },
            Instagram: `<i class="fab fa-instagram fs"></i>`,
            InstagramHref: {
                HREF: `${instagramLink}`
            },
            Youtube:`<i class="fab fa-youtube fs"></i>`,
            YoutubeHref: {
                HREF: `${youtubeLink}`
            },
        },
        Section_2: {
            CompanyLogo: `<img src="${companyLogoSrc}" alt="" width="130">`,
            CompanyDesc: `Cartech Company for Vehicle Services`,
            Link1: `Home`,
            Link1Href: {
                HREF: `#`
            },
            Link2: `About Us`,
            Link2Href: {
                HREF: `#`
            },
            Link3: `Our Services`,
            Link3Href: {
                HREF: `#`
            },
            Link4: `Branches`,
            Link4Href: {
                HREF: `#`
            },
            Link5: `Employment`,
            Link5Href: {
                HREF: `#`
            },
        },
        Section_3: {
            NewsSection: `<span class='trn'>Latest News:</span>`,
            // between each 2 news should be a divider
            News1: `تأكد من التزام الموظفين التابعين لك ومشاركين في عملية تقدير تمسكهم بالميثاق`,
            News1Href: {
                HREF: `https://www.google.com`
            },
            News2: `<span class='divider'>...</span>`,
            News3: `راعي أحوال الموظفين وحاول أن تجعلهم في أحسن بيئة ممكنة`,
            News3Href: {
                HREF: `#`
            },
            News4: `<span class='divider'>...</span>`,
            News5: `البيئة المفضلة للعمل هي البيئة التي تنتج أفكار أفضل`,
            News5Href: {
                HREF: `#`
            },
            News6: ``,
            News7: ``,
            News7Href: {
                HREF: `#`
            },
            News8: ``,
            News9: ``,
            News9Href: {
                HREF: `#`
            },
        },
    },
    Body: {
        SubjectContainer:{
            Title: `Request An Estimation Service`,
            Book:`Book An Appointment`,
        },
        Content: {
            Request: {
                Name:`Name`,
                Phone:`Phone`,
                AccNumber:`Accident Number`,
                PlateChar:`Plate Characters`,
                PlateNum:`Plate Number`,
                AppointDate:`Appointment Date`,
                AppointTime:`Appointment Time`,
                ServLoc: `Service Location`,
                ServLoc1: `Indoor`,
                ServLoc2: `In Client Location`,
                Send: `Send`,
            },
            Steps: {
                Step1:{
                    Img:`<img src="${order1}" width="100">`,
                    Title:`Before Appointment`,
                    Desc:`At least 15 minutes early`,
                },
                Step2:{
                    Img:`<img src="${order2}" width="100">`,
                    Title:`Estimation Requirements`,
                    Desc:`Vehicle Form – Vehicle Estimation Request`,
                },
                Step3:{
                    Img:`<img src="${order3}" width="100">`,
                    Title:`Cost`,
                    Desc:`Cost Value 172,5 riyal Payment by`,
                    Pay:`<img src="${order3Pay}" alt="" width="200">`,
                },
            }
        },
        // LANDING PAGE CONTENT
        TaqdeerContainer: {
            Header1: `Taqdeer`,
            Header21:`Because We`,
            Header22:`Master Estimation Services`,
            Desc: `We offer comprehensive vehicle services in an integrated manner that meets all needs and requirements Customers`,
            Najm: `Exanimate Nejm Accident`,
            NajmHref: {
                HREF:`${requestPageLink}`,
            },
            Traffic:`Exanimate Traffic Accident`,
            TrafficHref: {
                HREF:`${requestPageLink}`,
            }
        },
        EasyTaqdeer: {
            Header11:`Estimate`,
            Header12:`Easy`,
            SmallP:`Because we care about you and guarantee fast service and high quality`,
            Desc1:`The Cartech Center provides a vehicle accident damage assessment service at the hands of accredited evaluators, `,
            Desc2:`as it contributes to shortening and facilitating vehicle damage assessment procedures, `,
            Desc3:`raising the level of professionalism in assessment reports and controlling them in a manner that preserves the rights of all parties. `,
            Desc4:`Therefore, an assessment system worked on automating the procedures and converting them from 18 paper steps In several locations to 3 steps in one center,`,
            Desc5:`through which the beneficiary can finish all the assessment processes in his visit to the assessment center and send his reports to the insurance company.`,
            Clients: `Receive Beneficiaries`,
            ClientsImg: `<img src="${easyImage1}" width="40">`,
            Damage:`Check and Estimate Damages`,
            DamageImg:`<img src="${easyImage2}" width="40">`,
            Report: `Report and Send to Insurance Company`,
            ReportImg: `<img src="${easyImage3}" width="40">`,
        },
        TaqdeerServices: {
            Header11:`We offer comprehensive and guaranteed`,
            Header12:`Recognition Services`,
            Desc: `We provide our customers with comprehensive and distinctive services that are professionally implemented to keep pace Saudi market aspirations and customer needs`,
            Estimate: `<img src="/assets/images/Mask-Group-28.png" width="80">`,
            EstimateImg: `Moving Estimation`,
            Damage:`<img src="/assets/images/Mask-Group-29.png" width="80">`,
            DamageImg:`Estimate Vehicle Damage`,
            Safety:`<img src="/assets/images/Mask-Group-30.png" width="80">`,
            SafetyImg:`Vehicle Safety Check`,
            Claim:`<img src="/assets/images/Mask-Group-31.png" width="80">`,
            ClaimImg:`Electronic Claim`,
            // CAR IMAGE
            CarImage:`<img src="/assets/images/Component.png" alt="">`,
            // BUTTONS
            Request: `Request Estimation`,
            RequestHref : {
                HREF:`${requestPageLink}`,
            },
            AllService: `All Services`,
            AllServiceHref: {
                HREF:`#`,
            },
        },

    }, 
    // FooterReserveAreaLetter
    Footer : {
        ReserveArea: {
            Letter: `We provide our customers with comprehensive and professional services`,
            Appointment: `Book Examination Service Appointment`,
            AppointmentHref: {
                HREF:  `${requestPageLink}`,
            },
        },
        Info: {
            CenterContact: {
                Title: `<img src="${companyLogoSrc}" width="160" alt="">`,
                L1:`Cartech Center for Vehicle Damage Estimation`,
                L2:`Mohamed Ben Alalaa St., Al Riyadh, Al Manar District`,
                L3:`${mobile}`,
                L3Href: {
                    HREF:`tel:${mobile}`
                },
                L4:`${whatsMobile}`,
                L4Href: {
                    HREF:`#`
                },
                L5:`${email}`,
                L5Href: {
                    HREF:`mailto:${email}`
                },
                L6:``,
                L7:``,
            },
            CenterInfo : {
                Title: `Contact Us`,
                L1: `Our Branches`,
                L1Href: {
                    HREF:`#`
                },
                L2: `Media Center`,
                L2Href: {
                    HREF:`#`
                },
                L3: `Media Articles`,
                L3Href: {
                    HREF:`#`
                },
                L4: `Frequently Asked Question`,
                L4Href: {
                    HREF:`#`
                },
                L5: `Complaints and Suggestions`,
                L5Href: {
                    HREF:`#`
                },
                L6: `Contact`,
                L6Href: {
                    HREF:`#`
                },
            },
            CenterService: {
                Title: `Cartech Services`,
                L1: `Estimate Vehicle Damage`,
                L1Href: {
                    HREF:`#`
                },
                L2: `Electronic Claim`,
                L2Href: {
                    HREF:`#`
                },
                L3: `Moving Estimation`,
                L3Href: {
                    HREF:`#`
                },
                L4: `Vehicle Safety Check`,
                L4Href: {
                    HREF:`#`
                },
                L5: `All Services`,
                L5Href: {
                    HREF:`#`
                },
                L6: ``,
                L6Href: {
                    HREF:`#`
                },
                L7: ``,
                L7Href: {
                    HREF:`#`
                },
            },
            CenterPhoto: {
                Title: `CARTECH GALLERY`,
                Img1:`<img src="${centerImage1}" width="100" alt="">`,
                Img2:`<img src="${centerImage2}" width="100" alt="">`,
                Img3:`<img src="${centerImage3}" width="100" alt="">`,
                Img4:`<img src="${centerImage4}" width="100" alt="">`,
                Img5:`<img src="${centerImage5}" width="100" alt="">`,
                Img6:`<img src="${centerImage6}" width="100" alt="">`,
            }
        },
        Copyright: {
            CopyrightText: `All Rights Reserved to CarTech Company Branch for Vehicle Services 2021`,

            Facebook : `<i class="fab fa-facebook fs"></i>`,
            FacebookHref: {
                HREF: `${facebookLink}`
            },
            Twitter: `<i class="fab fa-twitter fs"></i>`,
            TwitterHref: {
                HREF: `${twitterLink}`
            },
            Instagram: `<i class="fab fa-instagram fs"></i>`,
            InstagramHref: {
                HREF: `${instagramLink}`
            },
            Youtube:`<i class="fab fa-youtube fs"></i>`,
            YoutubeHref: {
                HREF: `${youtubeLink}`
            },
        }
    }
}

/**
 * object => SRC => {value}
 * object => HREF => {value}
 * always parent of (src or href) will be id of element
 */
function copyContentIntoDom(object,idBuilder){
    if(Object.keys(object).length == 0 || typeof(object) !== "object" ) return ;
    for(let child in object){
        let idPath = '';
        idPath += `${idBuilder}${child}`;
        if(typeof object[child] !== 'object') {
            // here I can modify the object to be src to add images to image
            // in case something is nested will add two ids one for src another one for href

            if(document.getElementById(idPath)){
                document.getElementById(idPath).innerHTML = object[child];
            }
            else if(Object.keys(object)[0] === 'SRC'){
                // get id and make object[child] its src
                let elementId = idPath.replace('SRC','') // to get id

                if( document.getElementById(elementId))
                    document.getElementById(elementId).src = object[child];
                else console.log(`%celement doesn't exist`,'font-size:20px')

            } else if (Object.keys(object)[0] === 'HREF'){
                // get id and make object[child] its href
                let elementId = idPath.replace('HREF','') // to get id

                if(document.getElementById(elementId))
                    document.getElementById(elementId).href = object[child];
                else console.log(`%celement doesn't exist`,'font-size:20px;color:#c87654')
            }
            idPath = ''
        }
        copyContentIntoDom(object[child],idPath)
    }
}

function redirectToEstimate(){
    window.location.replace("/taqdeer-request.html");
    // window.location.replace("http://www.w3schools.com");
}