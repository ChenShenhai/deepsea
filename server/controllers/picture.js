const inspect = require('util').inspect;
const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');
const { uploadPicture } = require('./../utils/upload');

const pictureController = { 

  async upload( ctx ) {
    let result = await uploadPicture( ctx, { pictureType: 'album' } );
    ctx.body = result;
  },


};

module.exports = pictureController;