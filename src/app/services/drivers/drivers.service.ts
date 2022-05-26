import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class DriversService {
    constructor(private http: HttpClient) {}

    async findDriverByAdminId(id): Promise<any> {
        const url = `https://taxi-africa-backend.herokuapp.com/drivers/${id}`;
        return this.http.get<any>(url).toPromise();
    }

    async createDriver(driver: any): Promise<any> {
        const driverRequest = {
            ...driver,
            userId: "29f45935-9bec-455d-9382-7f3b5a047c67",
        };
        const createDriverUrl =
            "https://taxi-africa-backend.herokuapp.com/drivers";
        return this.http.post<any>(createDriverUrl, driverRequest).toPromise();
    }
}
