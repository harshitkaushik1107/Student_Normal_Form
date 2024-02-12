const userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return new Promise((resolve, reject) => {
        userModel.find({})
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(false);
            });
    });
};

 module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
        var userModelData = new userModel();

        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        userModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(false);
            });
    });
};


module.exports.updateUserDBService = (id, userDetails) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndUpdate(id, userDetails)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(false);
            });
    });
};

module.exports.removeUserDBService = (id) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(false);
            });
    });
};
