import UntrackedItem from '../models/UntrackedItem';

class UntrackedItemController {

   static async List()  {
       var list;
       const request =  new Request('http://localhost:3000/untracked-items/get/list/', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
       });
       await fetch(request).
       then(data => {
           data.json().then((response) => {
               console.log(response);
               if (response.message !== 'Untracked items found') {
                   return response.message;
               } else {
                   list = response.untrackedItems;
                   return UntrackedItem.fromJSONArray(list);
               }
           });
       });
       return list;
   }

    static async getTypes() {
         var types;
         const request =  new Request('http://localhost:3000/untracked-items/get/types/', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
         });
         await fetch(request).
         then(data => {
              data.json().then((response) => {
                console.log(response);
                if (response.message !== 'Untracked item types found') {
                     return response.message;
                } else {
                     types = response.types;
                     return types;
                }
              });
         });
         return types;
    }
}

export default UntrackedItemController;