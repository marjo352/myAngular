import { Component, Output, EventEmitter} from '@angular/core';
import { Device } from './models';
import { DeviceDetailsComponent } from './device-details/device-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First angular Project';

  showUpdate: boolean = false;
  devices: Device[] = [
    {
      id:1,
      name:  "Device01",
      brand: "Lenovo",
      model: "ITZ400",
      year: 2001,
      serial: 'wewfr'
    },
    {
      id:2,
      name:  "Device02",
      brand: "Dell",
      model: "Latitude",
      year: 2001,
      serial: 'wewfr'
    }
    
  ]


newDevice:Device; 

  addedDevice(device: Device){
    this.devices.push(device);
  }
  updateDevice(id:any){
    this.showUpdate = true;
    this.newDevice = this.devices.find(device => device.id == id)
    console.log(id);
  }

  updateDisplay(updatedNewDevice:Device){
    this.showUpdate = false;
    //console.log(updatedDevice);
    let indexDevice = this.devices.findIndex(device=> device.id == updatedNewDevice.id)
    console.log(indexDevice);
    this.devices[indexDevice] = updatedNewDevice;
    
    
  }
  // appMessage = "";

  // appEvent(event) {
  //   this.appMessage = event;
  // }

  // @Output() appEvents = new EventEmitter();


  // count = 0;
  // addCount(){
  //   this.appEvents.emit(this.count++);
  // }
 
  // subCount(){
  //   this.appEvents.emit(this.count--);
  // }
  //@Output() appEvents = new EventEmitter();

 

  // devices: Device[] = []

  // addedDevice(device: Device){
    //this.devices.push(device);
  // }
 
}
