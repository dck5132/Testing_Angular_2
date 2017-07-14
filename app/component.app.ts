import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html',
    styleUrls: ["./css/app.css"]
})

export class AppComponent{
    name: string;
    artists: any;
    
    addArtist(value){
        if(value != ''){
            this.artists.push({
                name: value,
                school: "Hard Knocks"
            });
        }
    }
    
    onClick(myItem, myElement) {
        this.name = myItem.name;
        myElement.style.backgroundColor="#FECE4E";
    }
    
    constructor(){
        this.name = "Xhou Ta";
        this.artists = [
            {
                name: "Barot Bellingham",
                school: "Penn State"
            },
            {
                name: "Hillary Post",
                school: "University of Illinois"
            },
            {
                name: "Jonathan Ferrar",
                school: "University of Florida"
            }
        ]
    }
}