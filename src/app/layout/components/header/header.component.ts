import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    ngOnInit() {}


    onAlert() {
        alert("alert tıkla");
    }


    focusFunction() {
        console.log("focuslandın");
    }

    focusOutFunction() {
        console.log("focusdan kaç");
    }

}
