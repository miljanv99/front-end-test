import { Pipe, PipeTransform } from '@angular/core';
import {Planet} from '../models/planet-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(planetList: Planet[], filterString: string): Planet[] {
      if (!planetList || !filterString){
        return planetList;
      }
      return  planetList.filter(planet =>
          planet.planetName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1);
  }

}
