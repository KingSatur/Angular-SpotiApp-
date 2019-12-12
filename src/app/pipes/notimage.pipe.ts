import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notimage'
})
export class NotimagePipe implements PipeTransform {

  transform(images: any[]) {

    if( !images ){
      return 'assets/img/benner-ico.png'
    }
    else if( images.length > 0){
      return images[0].url
    }
    else{
      return 'assets/img/benner-ico.png'
    }
  }

}
