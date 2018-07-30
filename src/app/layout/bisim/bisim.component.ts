import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

import {BicycleService} from './bicycle.service';
import {Bicycle} from './Bicycle';


@Component({
    selector: 'app-bisim-page',
    templateUrl: './bisim.component.html',
    styleUrls: ['./bisim.component.scss']
})

export class BisimComponent implements OnInit {
    bicycles: Bicycle[];

    public lists;

    constructor(private bicycleService: BicycleService) {
    }

    ngOnInit() {

        this
            .bicycleService
            .getBicycles()
            .subscribe((data: Bicycle[]) => {
                this.bicycles = data;
                this.lists = this.bicycles;
               // this.lists = this.bicycles.network.stations;
            });


        let Flipper = (function () {
            let card = $('.card');
            let flipper = card.find('.card__flipper');
            let win = $(window);

            let flip = function () {
                let thisCard = $(this);
                let thisFlipper = thisCard.find('.card__flipper');
                let offset = thisCard.offset();
                let xc = win.width() / 2;
                let yc = win.height() / 2;
                let docScroll = $(document).scrollTop();
                let cardW = thisCard.outerWidth() / 2;
                let cardH = thisCard.height() / 2;

                let transX = xc - offset.left - cardW;
                let transY = docScroll + yc - offset.top - cardH;
//     if (offset.top > card.height()) transY = docScroll - offset.top + cardH;
                if (win.width() <= 700) transY = 0;

                if (card.hasClass('active')) {
                    unflip();
                }

                thisCard.css({'z-index': '3'}).addClass('active');

                thisFlipper.css({
                    'transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
                    '-webkit-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
                    '-ms-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)'
                }).addClass('active');

                return false;
            };

            let unflip = function () {
                card.css({'z-index': '1'}).removeClass('active');
                flipper.css({
                    'transform': 'none',
                    '-webkit-transform': 'none',
                    '-ms-transform': 'none'
                }).removeClass('active');
            };

            let bindActions = function () {
                card.on('click', flip);
                win.on('click', unflip);
            }

            let init = function () {
                bindActions();
            };

            return {
                init: init
            };

        }());

        Flipper.init();
    }


}
