import { PopUpComponent } from "./pop-up/pop-up.component";
import { MatDialog } from '@angular/material/dialog';

export class Product{
    constructor(
        public id:number,
        public name:string,
        public desc:string,
        public imgUrl:string,
        public price:number,

        private dialogRef?:MatDialog
    ){}

    isThisValidForMe(a?:number):boolean{
        if (a === undefined) {
            return false; 
        }

        return true;
    }



    
}