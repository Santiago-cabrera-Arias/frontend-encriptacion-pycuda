import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AesService {

  private apiUrl = 'http://127.0.0.1:8000';
  private apiUrlDecifrar = 'http://127.0.0.1:8000/decrypt';


  constructor(private http: HttpClient) {}

  encryptText(plainText: string, key: string): Observable<any> {
    // Construye los parámetros
    const params = new HttpParams()
      .set('plain_text', plainText)
      .set('key_str', key);

    // Realiza la solicitud POST con parámetros en la URL
    return this.http.post<any>(`${this.apiUrl}/encrypt`, null, { params });
  }


  decryptData(keyStr: string, encryptedData: any): Observable<any> {
    const url = `${this.apiUrl}/decrypt?key_str=${keyStr}`;
    return this.http.post(url, { encrypted_text: encryptedData });
  }

}



