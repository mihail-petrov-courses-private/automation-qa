const fs            = require('fs');
const TEST_DIR_SRC          = `${__dirname}\\scenario-1`;
const EXPECTED_FILE_LENGTH  = 5;
let isTestPass              = true;

// 1. Влизаме в папка scenario-1
// 2. Откриваме всички файлове, които са поместени в нея
// __dirname - дава ми пътя до текущия файл - но само файла който изпълнявам в момента

const scenior1FileList = fs.readdirSync(TEST_DIR_SRC);

// 3. Верифицираме наличието им и техните имена

// цикъл с условие - пред условие
//  ползваме когато, условието ни е генерално дефинирано
// ** 
// let index = 0;
// while(index < scenior1FileList.length) {
//     console.log(scenior1FileList[index]);
//     index = index + 1;
// }

// FOR - цикъл - модифицирана версия на WHILE за масиви
// for(let index = 0; index < scenior1FileList.length; index = index + 1 ) {
//     console.log(scenior1FileList[index]);
// }

if(scenior1FileList.length != EXPECTED_FILE_LENGTH) {
    isTestPass = false;
}


for(const fileName of scenior1FileList) {
        
    if(!isFileNameInTheList(fileName)) {
        isTestPass = false;
    }
}

assertIsTrue(true, isTestPass, 'Assert all files exists');


function isFileNameInTheList(fileName) {

    // const referenceFileName = ['main', 'capacity', 'traffic', 'click', 'volume'];
    // return referenceFileName.includes(fileName);

    // return ['main', 'capacity', 'traffic', 'click', 'volume'].includes(fileName);

    if(fileName == 'main'       ) return true;
    if(fileName == 'capacity'   ) return true;
    if(fileName == 'traffic'    ) return true;
    if(fileName == 'click'      ) return true;
    if(fileName == 'volume'     ) return true;

    return false;
}


function assertIsTrue(expect, result, message) {
    
    if(expect == result) {
        console.log(`Pass - ${message}`);
    }
    else {
        console.error(`Fail - Expected result ${expect}, resulted - ${result}`);
    }
}