const mobile = '0504546787'
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
    Footer : {

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