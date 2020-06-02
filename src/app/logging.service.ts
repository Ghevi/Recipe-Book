import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoggingService {
  lastLog: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.lastLog);
    this.lastLog = message;
  }
}

// This module was to demonstrate how services instances are loaded and shared
// in the app. Use Injectable providedin root or declared them in providers in
// app module (better the first one), unless you have a strong reason to need
// different istances of these services in a specific component tree
