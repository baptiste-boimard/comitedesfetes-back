const {google} = require('googleapis');
const Papa = require('papaparse');
const fs = require('fs')
const axios = require ('axios');


const CLIENT_ID = '510042688421-1u8m29imkhtflquik2v6g9lf576kfn61.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://www.googleapis.com/auth/drive';
const ACCESS_TOKEN = 'ya29.a0AWY7CknBnD7U45qgjiDAl4e0-RVbwNHnV5KYN0QY_VsflKIkBJaCnMYjfudIFLNjwxV-mrmNFAjNDwBbn60KERnIqRIhOalGIqHwoxPpHgtiLzQccTkzfy-5ggfAnpbgP_C1D_IDU9yVnIPPx20lEIFY8Ol_aCgYKAc0SARASFQG1tDrpA9DLT3S1jh5Co7bWdhLzhw0163';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oauth2Client.setCredentials({refresh_token: ACCESS_TOKEN});


const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});


const tinymceController = {

  // modif sur les limite des proprietes urlencoded et json du bodyparser faite
  // faut les recupérer


  async upload(req, res, next) {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: 'soccer2.csv',
          mimeType: 'text/csv',
        },
        media: {
          mimeType: 'text/csv',
          body: req.body.content,
        }
      });
      console.log('STATUS',response);
      const fileId = response.data.id;
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type:'anyone',
        }
      });
        const result = await drive.files.get({
        fileId: fileId,
        fields: 'webContentLink',
      });
      console.log('RESULT',result.data.webContentLink);

      await drive.files.update({
        fileId: fileId,
        requestBody: {
          name: fileId
        }
      });
  
    } catch (error) {
      console.log(error.message);
    }
  },

  async download(req, res, next) {
    


   
      // const result = await drive.files.get({
      //   fileId: fileId,
      //   fields: 'webViewLink, webContentLink, name, id',
      // });
      // console.log(result.data);



      //METHOD TO GET INFO FROM FILE
      // const result = await drive.files.get({
      //   fileId: '1DEL8L2E_QdVLppGW8Bu-nR7j-Xw1kZRg',
      //   fields: 'webViewLink, webContentLink, shared, permissions',
      // });
      // console.log(result.data);
      //METHOD TO GET INFO FROM FILE

      

     
        const url = 'https://drive.google.com/uc?id=1vMI-AfvYwIfolDQiyYqWYkyZqH9QxhBa&export=download';
        const response = await fetch(url);
        if(response) {
          const text = await response.text();
          res.json(text).status(200);
        } else {
          const err = new Error('dommage');
          next(err);
        }
  },


};

module.exports = tinymceController;


async function generatePublicUrl() {
  try {
    const fileId ='1T1EMHOa-koYRgcilLSGFY-7aIcSmQ5RI';
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type:'anyone',
      }
    });

    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    
    console.log(result.data);
  } catch (error) {
  }
  
};