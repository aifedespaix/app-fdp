import {FdpFile} from './fdp-file';

export class FdpFileImage extends FdpFile {

  public saveFile() {
    if(!this.canBeSaved()) {
      throw Error('Fichier Invalide')
    }

    this.fdpFileService.sendImage(this).subscribe(res => {
      console.log('ok');
      console.log(res);

    }, err => {
      // this.loading = false;
      throw err;
    });
  }

  // public getImage() {
  //   const image = new Image();
  //   image.height = 100;
  //   image.title = this.name;
  //   image.src = this.value;
  // }
}
