import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  
    isDisable = true; 
    n = 0; 
    addnumber() {​​​ 
      this.n++; 
      if (this.n > 0) 
      {​​​ this.isDisable = false; 
      }
    ​​ }​
    ​​ subnumber() {​​​
       this.n--; 
       if (this.n <= 0) {​​
        ​ this.isDisable = true; 
      }
      ​​​ }​​​
}
