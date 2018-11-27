import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesData = [{
    "id": "817-52-0050",
    "first_name": "Ginelle",
    "last_name": "Nesby",
    "email": "gnesby0@hexun.com",
    "gender": "Female",
    "salary": "$107378.00",
    "position": "Associate Professor"
  }, {
    "id": "680-83-6134",
    "first_name": "Eadmund",
    "last_name": "Murrey",
    "email": "emurrey1@theguardian.com",
    "gender": "Male",
    "salary": "$118194.72",
    "position": "Junior Executive"
  }, {
    "id": "464-84-9940",
    "first_name": "Tedmund",
    "last_name": "Owenson",
    "email": "towenson2@auda.org.au",
    "gender": "Male",
    "salary": "$86520.66",
    "position": "GIS Technical Architect"
  }, {
    "id": "189-81-0010",
    "first_name": "Missie",
    "last_name": "Thatcham",
    "email": "mthatcham3@chronoengine.com",
    "gender": "Female",
    "salary": "$108568.72",
    "position": "Project Manager"
  }, {
    "id": "154-14-6426",
    "first_name": "Ruggiero",
    "last_name": "Tchir",
    "email": "rtchir4@walmart.com",
    "gender": "Male",
    "salary": "$84110.58",
    "position": "Desktop Support Technician"
  }, {
    "id": "669-71-1663",
    "first_name": "Maison",
    "last_name": "Scamerdine",
    "email": "mscamerdine5@whitehouse.gov",
    "gender": "Male",
    "salary": "$105305.35",
    "position": "Occupational Therapist"
  }, {
    "id": "594-62-9323",
    "first_name": "Ransell",
    "last_name": "Messum",
    "email": "rmessum6@ehow.com",
    "gender": "Male",
    "salary": "$131677.71",
    "position": "Operator"
  }, {
    "id": "139-94-5669",
    "first_name": "Toiboid",
    "last_name": "Queyos",
    "email": "tqueyos7@live.com",
    "gender": "Male",
    "salary": "$102310.64",
    "position": "Tax Accountant"
  }, {
    "id": "820-63-0741",
    "first_name": "Boy",
    "last_name": "Loudon",
    "email": "bloudon8@about.com",
    "gender": "Male",
    "salary": "$99391.75",
    "position": "Payment Adjustment Coordinator"
  }, {
    "id": "731-19-8299",
    "first_name": "Nomi",
    "last_name": "Lindop",
    "email": "nlindop9@discovery.com",
    "gender": "Female",
    "salary": "$81148.44",
    "position": "Registered Nurse"
  }]

  constructor() { }

  getEmployeesData(){
    return this.employeesData;
  }
}
