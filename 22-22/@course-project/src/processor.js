const fs = require('fs');

class ConfigSpecification {

    constructor(filePath) {

        this.jsonConfig = require(filePath);
        this.filePath   = filePath;
    }

    addNewFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllFriends() {

        if(this.jsonConfig.numberOfFriends == 0) {
            return `You do not have any friends`;
        }

        if(this.jsonConfig.numberOfFriends == 1) {
            return `You have ${this.jsonConfig.numberOfFriends} friend`;
        }

        return `You have ${this.jsonConfig.numberOfFriends} friends`;
    }

    addNewPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllPhotos() {

        if(this.jsonConfig.numberOfPhotos == 0) {
            return `You have not uploaded any photos yet`;
        }

        if(this.jsonConfig.numberOfPhotos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfPhotos} photo`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfPhotos} photos`;
    }

    addNewVideo() {

        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  ++numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    removeExistingVideo() {
        
        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  --numericalRepresentation;
        fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
    }

    getAllVideos() {

        if(this.jsonConfig.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
        }

        if(this.jsonConfig.numberOfVideos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfVideos} video`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfVideos} videos`;
    }
}

const initConfig = (configFile) => {
    return new ConfigSpecification(configFile);
};

module.exports = {
    initConfig
};