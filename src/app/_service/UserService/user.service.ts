import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getCountries(): any {
        var d =  this.http.get("./assets/clientData.json").map((response: Response) => <any>response.json());
        console.log(d);
        return d;
    }



    getProducts(): Observable<any> {
        var d = this.http.get('./assets/clientData.json').map((response: Response) => <any>response.json());
        console.log(d);
        return d;
    }

    create(user: any) {
        this.jsonData.push(user);
        console.log(this.jsonData);
        return true;
    }

    //    update(user: User) {
    //        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    //    }
    //getById(id: number) {
    //        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    //    }
    //    delete(id: number) {
    //        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    //    }

    jsonData: any = [{
        "CompanyName": "Midas Blue",
        "OwnerName": "John Blue",
        "ContactPersonName": "Michael Jordan",
        "AreaOfBusiness": "Salon & Beauty",
        "Speciality": "Hair Specialist, Beauty & SPA",
        "Experience": "10",
        "MainCategory": "Salon",
        "Categories": "Salon & Beauty",
        "SubCategories": [
            "Hair Stylist",
            "Spa",
            "Makeup",
            "Unisex Salon"
        ],
        "registerDate": "21 Jan 2000",
        "State": "Maharashtra",
        "City": "Pune",
        "Area": "Baner",
        "SubArea": [
            "Aundh"
        ],
        "PrimaryServices": [
            "Hair Cut",
            "Spa",
            "Makeup artist"
        ],
        "ValueAddedServices": [
            "Wedding Makeup",
            "Online Booking"
        ],
        "FreeServices": [
            "Makeup Tips",
            "Hair Grow Tips"
        ],
        "WorkingTime": "Mon - Sat 10am to 9pm",
        "HolidayDays": "Sun",
        "ContactNumber1": "444464464",
        "ContactNumber2": "44138484",
        "ContactNumber3": "2143213213",
        "RegistrationNo": "1323",
        "Order": "10",
        "Tags": "Hair Specialist, Beauty & SPA in Baner",
        "Address1": "Q1 Street Baner",
        "Address2": "Pune",
        "UserId": "5",
        "Ratings": {
            "star1": 2,
            "star2": 3,
            "star3": 5,
            "star4": 2,
            "star5": 7
        },
        "ProfilePic": "http://www.kenrockwell.com/nikon/images1/18-300mm/D7K_0761-macro.jpg",
        "Socical": {
            "facebook": "",
            "twitter": "",
            "google": "",
            "Youtube": "",
            "instagram": ""
        }
    }]
}