import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
helloUser() {

}
highlightBGcolor() {
   console.log("hey i am being Highlighted")
}
sayHello() {
 console.error("Hello Sanket Mishra");
}
  title = 'FirstAngularProject';
  user =""
  success_msg = false;
  stylescss ='c3'
  styleMethod(){
    return 'c4';
  }
  userLogin=false;
  pageHeading ="Welcome Sanket";
  fullName ={'firstName':'Sanket','lastName':'Mishra'};
  imageUrl="test.png";
  imgALT="This is missing image text"
  fontColor="blue"
  username= "username from Angular forms ";
  Ename ="Enter names";
  lowerCaseExample = "SANKET MISHRA";
  upperCaseExample = "hello hi";
  currencyExample = 500
  dateExample = Date.now();
  percentageExample = 0.684500
  names =[
    {
      'Name1' : "prem",
      'Name2' : "uttam"
    }
  ]
  contacts = [
    {
      'firstName': 'ARC',
      'lastName' : 'tutorials',
      'contact' : 1234
    },
    {
      'firstName': 'Mark',
      'lastName' : 'tutorials',
      'contact' : 1234
    },
    {
      'firstName': 'rakesh',
      'lastName' : 'tutorials',
      'contact' : 22232
    }
  ];
}
