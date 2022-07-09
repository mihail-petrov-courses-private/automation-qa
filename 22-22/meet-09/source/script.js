// 0. Взимане на подходящи функции за работа 
// - с файлове + папки
const fs =  require('fs');

const ORIGIN_PATH        = 'E:\\@courses\\netit\\netit-automation-qa\\22-22\\meet-09\\source\\imgs\\';
const DESTINATION_PATH   = 'E:\\@courses\\netit\\netit-automation-qa\\22-22\\meet-09\\dest\\';

try {
    fs.mkdirSync(DESTINATION_PATH)
}
catch(error) {

}

// 1. Откриване на директорията
// - съдържаща картинките
const dirItemCollection =  fs.readdirSync(ORIGIN_PATH, {
    withFileTypes : true
});

// 2. Откриване на всички файлове

for(const fileId of dirItemCollection) {
    
    const fileName  = fileId.name;
    const fileExt   = (fileName.split('.'))[1];

    const srcFolderFile  = ORIGIN_PATH + fileName;
    const targetFolder   = DESTINATION_PATH + fileExt;
    const destFolderFile = targetFolder + '\\' + fileName;

    try {

        fs.mkdirSync(targetFolder);

        if(fileId.isFile()) {
            fs.copyFileSync(srcFolderFile, destFolderFile);
        }
    }
    catch(error) {

        console.log("In CATCH");

        if(fileId.isFile()) {
            fs.copyFileSync(srcFolderFile, destFolderFile);
        }
    }


    // if(fileId.isFile()) {

    //     fs.copyFileSync(srcFolderFile, destFolderFile);
    // }
}

// 3. Извършване на действия върху тях



// 
function isFolder(fileId) {

    const elementCollection = fileId.split('.');
    return elementCollection.length == 1;
}