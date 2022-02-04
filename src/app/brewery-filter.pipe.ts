import { Pipe, PipeTransform } from '@angular/core';

import { Brewery } from './brewery';

@Pipe({
  name: 'searchFilter'
})
export class searchFilterPipe implements PipeTransform {
  transform(breweries: Brewery[], { searchInput, isFavourite }: { searchInput: string, isFavourite: boolean }) {
    if (!searchInput && !isFavourite) return breweries;
    return breweries.filter((brewery: Brewery) => {
      const nameMatches = !searchInput || brewery.name.toLocaleLowerCase().includes(searchInput.toLowerCase());
      const favouriteMatches = !isFavourite || brewery.favourite;
      return nameMatches && favouriteMatches;
    });
  }
}
