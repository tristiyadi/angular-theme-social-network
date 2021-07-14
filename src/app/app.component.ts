import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-theme-social';
  contents: any[] = [];
  activity: any[] = [];
  menus: any[] = [];
  submenus: any[] = [];
  constructor(){}
  ngOnInit(){
    this.menus = ["Videos","People", "Documents", "Events", "Communities", "Favourites", "Channel"];
    this.submenus = ["About", "For Bussiness", "Privacy Policy","Community Guidelines","Cookies Policy","Career", "Forum", "Copyright Policy"];
    this.contents = [{
        name: "Videos",
        icon: "fa fa-upload",
        title: "Upload Your Own VIdeos"
      },{
        name: "People",
        icon: "fa fa-tasks",
        title: "Show Your Work"
      },{
        name: "Documents",
        icon: "fa fa-file-pdf-o",
        title: "Share Your Documents"
      }
    ];
    this.activity = [{
        name: "Fulan",
        job: "Graphic Designer",
        is_pin: false,
        updated_at: "2 minutes ago",
      },
      {
        name: "Fulanah",
        job: "Golang Developer",
        is_pin: false,
        updated_at: "5 minutes ago",
      },
      {
        name: "Zayd",
        job: "C++ Developer",
        is_pin: true,
        updated_at: "1 hour ago",
      },
      {
        name: "Hindun",
        job: "NodeJs Developer",
        is_pin: false,
        updated_at: "6 hours ago",
      },
      {
        name: "Memet",
        job: "Frontend Developer",
        is_pin: false,
        updated_at: "6 hours ago",
      }
    ]
  }
}
