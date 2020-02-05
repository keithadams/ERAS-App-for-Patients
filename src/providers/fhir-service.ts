import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FhirService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FhirService {

  private data;
  public baseUrl;

  constructor(public http: Http) {
    this.baseUrl = 'http://polaris.i3l.gatech.edu:8080/fhir-omopv5/base';

  }

  getPatientId(firstName:string,lastName:string,baseUrl = this.baseUrl) {
    //http://52.72.172.54:8080/fhir/baseDstu2/Patient?given=Marla&family=Dixon&_format=json
    return new Promise(resolve => {
      let url = baseUrl + '/Patient?given=' + firstName + '&family=' + lastName + '&_format=json';
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          let result = data.entry;
          if (result) {
            let id = result[0].resource.id;
            console.log('Found Patient ID = ', id);
            resolve(id);
          }
          else {
            console.log('Patient Not Found');
            resolve(false);
          }
        });
    });

  }

  getPatientConditions(firstName:string,lastName:string,baseUrl = this.baseUrl) {
    return new Promise(resolve => {
      let url = baseUrl + '/Condition?patient.given=' + firstName + '&patient.family=' + lastName + '&_format=json';
      // console.log(url);

      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.entry;
          resolve(this.data);
        });
    });

  } 

  hasDiabetes(firstName:string,lastName:string,baseUrl = this.baseUrl) {
    let searchTerm = "diabetes";
    return new Promise(resolve => {
      let url = baseUrl + '/Condition?patient.given=' + firstName + '&patient.family=' + lastName + '&_format=json';
      // console.log(url);

      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.entry;
          // console.log('this.data', this.data);
          let result = false;
          if (this.data) {
            for (var o of this.data) {
              let condition = o.resource.code.coding[0].display;
              if (condition.includes(searchTerm)) {
                result = true;
              }
            }
          }
          resolve(result);
        });
    });

  }

  createPatient(firstName:string,lastName:string,active=true,baseUrl = this.baseUrl){

    var body = {
      "resourceType": "Patient",
      "name": [{"family": [lastName],"given": [firstName]}],
      "active": active
    }

    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/json+fhir' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option

      this.http.post(baseUrl + '/Patient?_format=json&_pretty=true',body,options)
        .subscribe(respond => {
          //  console.log(respond);       
          //  console.log(respond.headers._headersMap);
          // let location = respond.headers._headersMap.get("location")[0];
          let location = respond.headers.get("location");
          let id = location.substr(location.indexOf("/Patient/")+1).split('/')[1]
          // console.log(id);
          console.log('New Patient ID = ', id);
          resolve(id);
         });   
    });
  }

  deletePatient(id:string,baseUrl = this.baseUrl) {
    return new Promise(resolve => {
      this.http.delete(baseUrl + '/Patient/' + id)
        .subscribe(respond => {
          // console.log(respond);
          resolve(respond);
        });
    });
  }

  getQuestionnaireId(title:string,baseUrl = this.baseUrl) {
    //http://52.72.172.54:8080/fhir/baseDstu2/Patient?given=Marla&family=Dixon&_format=json
    // http://52.72.172.54:8080/fhir/baseDstu2/Questionnaire?title=ERAS&_format=json
    return new Promise(resolve => {
      let url = baseUrl + '/Questionnaire?title=' + title + '&_format=json';
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          let q = data.entry;
          if (q) {
            let id = q[0].resource.id;
            console.log('Found Questionnaire ID = ', id);
            resolve(id);
          }
          else {
            console.log('Questionnaire Not Found');
            resolve(false);
          }
        });
    });

  }

  createQuestionnaire(title,questions,responses,date,baseUrl = this.baseUrl) {
    var body = {
      "resourceType" : "Questionnaire",
      "status" : "published",
      "subjectType": ["Patient"],
      "date" : date,
      "publisher" : "GT CS 6440",
      "group" : {
        "linkId" : "root",
        "title" : title,
        "question" : questions
      }
    }

    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/json+fhir' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option

      this.http.post(baseUrl + '/Questionnaire?_format=json&_pretty=true',body,options)
        .subscribe(respond => {
          //  console.log(respond);       
          //  console.log(respond.headers._headersMap);
          // let location = respond.headers._headersMap.get("location")[0];
          let location = respond.headers.get("location");
          let id = location.substr(location.indexOf("/Questionnaire/")+1).split('/')[1]
          // console.log(id);
          console.log('New Questionnaire ID = ', id);
          resolve(id);
         });   
    });

  }

  createQuestionnaireResponse(questionnaire_id,patient_id,responses,date,baseUrl = this.baseUrl){
    let body = {
      "resourceType" : "QuestionnaireResponse",
      "questionnaire":{
        "reference":"Questionnaire/" + questionnaire_id
      },
      "status":"completed",
      "subject":{
        "reference":"Patient/" + patient_id
      },
      "authored": date,
      "group":{
        "linkId":"root",
        "question": responses
      }
    }

    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/json+fhir' }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option

      this.http.post(baseUrl + '/QuestionnaireResponse?_format=json&_pretty=true',body,options)
        .subscribe(respond => {
          //  console.log(respond);       
          //  console.log(respond.headers._headersMap);
          // let location = respond.headers._headersMap.get("location")[0];
          let location = respond.headers.get("location");
          let id = location.substr(location.indexOf("/QuestionnaireResponse/")+1).split('/')[1]
          // console.log(id);
          console.log('New QuestionnaireResponse ID = ', id);
          resolve(id);
         });   
    });
  }

  publishQuestionnaireWithResponse(patient_id,title,questions,responses,date,baseUrl = this.baseUrl){
    return new Promise(resolve => {
      this.getQuestionnaireId(title,baseUrl)
      .then(q_id => {
        if(q_id) {
          this.createQuestionnaireResponse(q_id,patient_id,responses,date,baseUrl)
          .then( qr_id => {
            resolve(qr_id);
          });
        }
        else{
          this.createQuestionnaire(title,questions,responses,date,baseUrl)
          .then( q_id => {
            this.createQuestionnaireResponse(q_id,patient_id,responses,date,baseUrl)
            .then( qr_id => {
              resolve(qr_id);
            });
          });
        }
      });
    });
  }    

}
