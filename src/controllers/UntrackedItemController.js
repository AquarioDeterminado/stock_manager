import Untracked_Item from '../models/UntrackedItem';
import {useEffect} from "react";

class UntrackedItemController {

   static async List()  {
       var list;
       const request =  new Request('http://localhost:3000/untracked-items/get/list/', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
       });
       await fetch(request).
       then(response => response.json()).
       then(data => list = data.untrackedItems);
       const untrackedItems = Untracked_Item.fromJSONArray(list);
       return untrackedItems;
   }
}

export default UntrackedItemController;