const service = {
    Header: {
        Section_1: {
            Email: `<span><a href="#"><i class="far fa-envelope fw"></i> info@cartech.sa</a></span>`,
            WorkHours: `<i class="far fa-clock fw"></i> ساعات العمل من 8 صباحا - 8 مساء`,
            Message: `معتمد من الهيئة السعودية للمقيمين المعتمدين`,
        },
        Section_2: {
            Nav: {
                Hello: "welcome to the site"
            },
        },
        Section_3: {
            Maintainece: 'welcome to the site from abody'
        },
    },
    Body: {

    },
    Footer : {

    }
}
let bobo = {};
let count = 0 ;
function recursive(object,idBuilder){
    console.log('=========================')
    // count++ ;
    // when object has nothing in it 
    // console.log(object)
    // console.log(idBuilder)
    if(Object.keys(object).length == 0 || typeof(object) !== "object" ) {
        // console.log('should remove')
        // storage = storage.substring(0,storage.lastIndexOf('-'))
        // storage = ""
        return ;
    }
    // if(Object.keys(object).length == 0 ) return ;

    for(let child in object){
        let idPath = '';
        console.log(`%c${child}`,'font-size:15px')
        // now I want to build the id 
        // console.log(idBuilder);
        idPath += `${idBuilder}${child}`;
        // console.log(storage);
        // console.log('================');
        
        /**
         * when next element is not object he deletes the storage
         * when HeaderSection_1 , now we're on email 
         * I see its children are not object so 
         * 
         * problem when is not object he adds on it
         */

        if(typeof object[child] !== 'object' ) {
            console.log(`${idPath}: ${object[child]}`) // here I have one good id append element
            if(document.getElementById(idPath))
                document.getElementById(idPath).innerHTML = object[child];
                
            idPath = ''
        }
        recursive(object[child],idPath)
    }
}

window.onload = () => {
    recursive(service,'')
    // document.getElementById('HeaderSection_1Email').innerHTML = service.Header.Section_1.Email ;
    // I have this object 
    // the idea is
    // put id's on elements with same object keys, 
    // so when I iterate over the object I take its keys and form the key like this (header-section_1-email)
    // and paste
    // its content in the feild.

}