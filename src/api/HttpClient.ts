import axios, { AxiosInstance } from 'axios';

/**
 * Test credentials
 * 
 * "email": "marcciosilva@email.com",
 * "password": "marccio1234"
 */
export class HttpClient {
  // private static readonly BASE_URL = 'http://localhost:4001/v2';
  private static readonly BASE_URL = 'http://api.lyricai.co/v2';
  private static readonly BASE_URL_1 = ''; // This is for a second api -- tbd
  
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: HttpClient.BASE_URL,
      });
    }

    return HttpClient.instance;
  }

  public static setToken(token: string): void {
    HttpClient.instance = axios.create({
      baseURL: HttpClient.BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public static clearToken(): void {
    HttpClient.instance = axios.create({
      baseURL: HttpClient.BASE_URL,
    });
  }
}
