import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUploadService {
  location = 'uploads/';

  constructor(private angularFireStorage: AngularFireStorage) {}

  fileName() {
    const newTime = Math.floor(Date.now() / 1000);
    return Math.floor(Math.random() * 20) + newTime;
  }

  async storeFile(fileData: any) {
    try {
      const fileName = this.fileName();
      return new Promise((resolve, reject) => {
        const fileRef = this.angularFireStorage.ref(this.location + fileName);

        fileRef
          .put(fileData)
          .then(function () {
            fileRef.getDownloadURL().subscribe((url: any) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (e) {}
  }
}
