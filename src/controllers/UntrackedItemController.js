
class UntrackedItemController {

   static async List()  {
       var list;
       const request =  new Request('http://localhost:3000/untracked-items/get/list/', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
       });
       await fetch(request).then(data => {
           data.json().then((response) => {
               console.log(response);
               if (response.message !== 'Untracked items found') {
                   return response.message;
               } else {
                   list = response.untrackedItems;
               }
           });
       });
       return list;
   }

    static async get(id) {
       const request =  new Request('http://localhost:3000/untracked-items/get/' + id, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
       });

       let item = null

        await fetch(request)
            .then(response => {
                const status = response.status;
                response.json().then(data => {
                    if (status !== 200) {
                        console.log(data.message);
                        return data.message;
                    } else {
                        console.log(data ,", status: ", status);
                        item = data.untrackedItem;
                    }
                })
            });
        return item
    }

    static async getTypes() {
         var types;
         const request =  new Request('http://localhost:3000/untracked-items/get/types/', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
         });
         await fetch(request).then(data => {
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
    static async update(untrackedItem) {
        let item= null;

        const request =  new Request('http://localhost:3000/untracked-items/update/' + untrackedItem.unt_id, {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({untrackedItem: untrackedItem, authKey: localStorage.getItem("authKey")})
        });

        await fetch(request)
            .then(response => {
                const status = response.status;
                response.json().then(data => {
                    if (status !== 200) {
                        console.log(data.message);
                        return data.message;
                    } else {
                        console.log(data ,", status: ", status);
                        item = data.untrackedItem;
                    }
                })
            });

        return item;
    }
}


export default UntrackedItemController;