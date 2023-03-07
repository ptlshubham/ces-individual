import { Component, OnInit } from '@angular/core';
import { DlDateTimePickerChange } from 'angular-bootstrap-datetimepicker';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';

const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { DatePipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-gate-pass',
  templateUrl: './gate-pass.component.html',
  styleUrls: ['./gate-pass.component.css'],
  providers: [DatePipe]
})
export class GatePassComponent implements OnInit {
  gatePassModel: any = {};
  instituteList: any = [];
  minuteStep = 5;
  selectedDate: Date | undefined;
  showCalendar = true;
  startView = 'day';

  minTime = { hour: 9, minute: 0 };
  maxTime = { hour: 17, minute: 0 };

  views = ['minute', 'hour', 'day', 'month', 'year'];

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    purpose: new FormControl(''),
    contact: new FormControl(''),
    selectMeet:new FormControl(''),
    
  });
  submitted = false;

  constructor(
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllInstituteDetails();
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        contact: ['', [Validators.required]],
        purpose: ['', Validators.required],
        selectMeet:['', Validators.required]
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  getAllInstituteDetails() {
    this.homeService.getAllInstituteData().subscribe((res: any) => {
      this.instituteList = res;
    })
  }
  onCustomDateChange(event: DlDateTimePickerChange<Date>) {
    console.log(event.value);
    this.gatePassModel.dateTime = event.value;

  }
  onSubmit(val: any) { 
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.gatePassModel.role = val;
      this.homeService.saveGatePassDetail(this.gatePassModel).subscribe((res: any) => {
        this.gatePassModel.id = res;
        this.generateInvoicePDF();
        this.toastrMessage.success('Appointement added Successfully.', 'Success', { timeOut: 3000, });

      })

  }
  generateInvoicePDF() {
    this.submitted = false;

    this.gatePassModel.dateTime = this.datePipe.transform(this.gatePassModel.dateTime, 'medium');
    console.log(this.gatePassModel)

    if (this.gatePassModel.role == 'Office') {
      let docDefinition = {
        pageSize: 'A5',

        footer: function (currentPage: any, pageCount: any) {
          return {
            text: "Page " + currentPage.toString() + ' of ' + pageCount,
            alignment: 'center',
            fontSize: 10,
            margin: [0, 20, 0, 0],

          }
        },
        info: {
          title: 'CES Society Gate Pass'
        },
        content: [
          {
            columns: [
              {
                image: 'webimg',
                link: 'https://www.cesociety.in',
                width: 320,
                height: 60,
                alignment: 'center',
                margin: [0, 0, 0, 10],
                color: 'black',
              },

            ],
          },
          {
            columns: [
              [
                {
                  alignment: 'left',
                  margin: [0, 0, 0, 10],
                  text: 'Address: D. N. High School Campus, Station Road, Anand - 388001, Gujarat, India',
                  bold: true,
                  style: 'companydetail'
                },

              ],
              [
                {
                  alignment: 'left',
                  text: 'Contact: (02692) - 243083',
                  bold: true,
                  style: 'companydetail'
                },
                {
                  alignment: 'left',
                  bold: true,
                  link: 'https://www.cesociety.in', style: 'link',
                  text: 'Email: cesociety@cesociety.in',

                },
              ]

            ]
          },
          {
            columns: [
              [,
                {
                  text: `Booking ID: 00` + this.gatePassModel.id,
                  alignment: 'right',
                  style: 'customerdetail'
                },
                {
                  text: `Booking Date Time:  ${new Date().toLocaleString()}`,
                  alignment: 'right',
                  bold: true,
                  style: 'customerdetail'
                },
              ]
            ]
          },
          {
            columns: [
              {
                image: 'booking',
                link: 'https://www.cesociety.in',
                width: 340,
                height: 120,
                alignment: 'center',
                margin: [0, 0, 0, 10],
                color: 'black',
              },

            ],
          },
          {
            text: 'Your Appointement has been successfully booked !', style: 'Title',
            alignment: 'center',
          },
          {
            text: ' ',
            margin: [10, 0, 0, 0]
          },
          {
            columns: [
              [
                {
                  text: 'Visitor Name: ' + this.gatePassModel.name,
                  bold: true,
                  style: 'userdetail'
                },
                {
                  text: 'Contact: ' + this.gatePassModel.contact,
                  style: 'userdetail'
                },
                {
                  text: 'Institute Name: ' + this.gatePassModel.institute,
                  style: 'userdetail'
                },
                {
                  text: 'Whom to Meet: ' + this.gatePassModel.meetingWith,
                  style: 'userdetail'
                },
                {
                  text: 'Time: ' + this.gatePassModel.dateTime,
                  style: 'userdetail1'
                },


              ],

            ]
          },

          {
            columns: [
              [
                {
                  text: 'Note:',
                  fontSize: 10,
                  margin: [0, 10, 0, 0]
                },
                {
                  text: 'When you arrive at the Institute area, present your gate pass to the security personnel at the gate. They will check your pass and may ask for identification to verify your identity.',
                  fontSize: 10,
                  color: 'red',
                },
              ]
            ]
          },
        ],

        images: {
          webimg: 'https://ci3.googleusercontent.com/proxy/WQs4-fw8izDd12HVWmJpfGFswM-dr_DH2aQ2N6UjBp0e4eqITRhlMWWaj6VuiPvU72NIXjEqY22KhfhT-Yx_nQujzw=s0-d-e1-ft#https://www.cesociety.in/email/images/logo-al.png',
          booking: 'https://ci4.googleusercontent.com/proxy/Kd8Ar_LbG-bNHEm2Igh6QLXXVrp-x3vNDjDTtYhwdQtqIJpNqHiISQgXQfq2tbbqP0EIlV9EBWTpj486LVoHhy0U=s0-d-e1-ft#https://www.cesociety.in/email/images/appo-6.png'
        },
        styles:
        {
          customerdetail: {
            margin: [0, 0, 0, 5],
            fontSize: 10,
            alignment: 'right',

          },
          userdetail: {
            margin: [0, 0, 0, 5],
            fontSize: 11,
            bold: true,
            alignment: 'left',

          },
          userdetail1: {
            margin: [0, 0, 0, 5],
            fontSize: 11,
            bold: true,
            alignment: 'left',
            color: 'green'
          },
          companydetail: {
            alignment: 'left',
            margin: [30, 0, 0, 5],
            fontSize: 10
          },
          link: {
            alignment: 'left',
            margin: [30, 0, 0, 5],
            fontSize: 10,
            color: 'blue',
            decoration: 'underline',
          },
          tablehead: {
            bold: true,
            fontSize: 10,
            alignment: 'center',
          },
          tablecell: {
            margin: [0, 0, 0, 5],
            fontSize: 10,
            alignment: 'center',
          },
          Title: {
            fontSize: 16,
            color: '#203154',
            bold: true,
          },
        }
      };
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('Gate' + ' ' + 'Pass' + '.pdf');
      this.gatePassModel = {};
    }
    else {
      let docDefinition = {
        pageSize: 'A5',

        footer: function (currentPage: any, pageCount: any) {
          return {
            text: "Page " + currentPage.toString() + ' of ' + pageCount,
            alignment: 'center',
            fontSize: 10,
            margin: [0, 20, 0, 0],

          }
        },
        info: {
          title: 'CES Society Gate Pass'
        },
        content: [
          {
            columns: [
              {
                image: 'webimg',
                link: 'https://www.cesociety.in',
                width: 320,
                height: 60,
                alignment: 'center',
                margin: [0, 0, 0, 10],
                color: 'black',
              },

            ],
          },
          {
            columns: [
              [
                {
                  alignment: 'left',
                  margin: [0, 0, 0, 10],
                  text: 'Address: D. N. High School Campus, Station Road, Anand - 388001, Gujarat, India',
                  bold: true,
                  style: 'companydetail'
                },

              ],
              [
                {
                  alignment: 'left',
                  text: 'Contact: (02692) - 243083',
                  bold: true,
                  style: 'companydetail'
                },
                {
                  alignment: 'left',
                  bold: true,
                  link: 'https://www.cesociety.in', style: 'link',
                  text: 'Email: cesociety@cesociety.in',

                },
              ]

            ]
          },
          {
            columns: [
              [,
                {
                  text: `Booking ID: 00` + this.gatePassModel.id,
                  alignment: 'right',
                  style: 'customerdetail'
                },
                {
                  text: `Booking Date Time:  ${new Date().toLocaleString()}`,
                  alignment: 'right',
                  bold: true,
                  style: 'customerdetail'
                },
              ]
            ]
          },
          {
            columns: [
              {
                image: 'booking',
                link: 'https://www.cesociety.in',
                width: 340,
                height: 120,
                alignment: 'center',
                margin: [0, 0, 0, 10],
                color: 'black',
              },

            ],
          },
          {
            text: 'Your Appointement has been successfully booked !', style: 'Title',
            alignment: 'center',
          },
          {
            text: ' ',
            margin: [10, 0, 0, 0]
          },
          {
            columns: [
              [
                {
                  text: 'Visitor Name: ' + this.gatePassModel.name,
                  bold: true,
                  style: 'userdetail'
                },
                {
                  text: 'Contact: ' + this.gatePassModel.contact,
                  style: 'userdetail'
                },
                {
                  text: 'Whom to Meet: ' + this.gatePassModel.meetingWith,
                  style: 'userdetail'
                },
                {
                  text: 'Time: ' + this.gatePassModel.dateTime,
                  style: 'userdetail1'
                },


              ],

            ]
          },

          {
            columns: [
              [
                {
                  text: 'Note:',
                  fontSize: 10,
                  margin: [0, 10, 0, 0]
                },
                {
                  text: 'When you arrive at the Institute area, present your gate pass to the security personnel at the gate. They will check your pass and may ask for identification to verify your identity.',
                  fontSize: 10,
                  color: 'red',
                },
              ]
            ]
          },
        ],

        images: {
          webimg: 'https://ci3.googleusercontent.com/proxy/WQs4-fw8izDd12HVWmJpfGFswM-dr_DH2aQ2N6UjBp0e4eqITRhlMWWaj6VuiPvU72NIXjEqY22KhfhT-Yx_nQujzw=s0-d-e1-ft#https://www.cesociety.in/email/images/logo-al.png',
          booking: 'https://ci4.googleusercontent.com/proxy/Kd8Ar_LbG-bNHEm2Igh6QLXXVrp-x3vNDjDTtYhwdQtqIJpNqHiISQgXQfq2tbbqP0EIlV9EBWTpj486LVoHhy0U=s0-d-e1-ft#https://www.cesociety.in/email/images/appo-6.png'
        },
        styles:
        {
          customerdetail: {
            margin: [0, 0, 0, 5],
            fontSize: 10,
            alignment: 'right',

          },
          userdetail: {
            margin: [0, 0, 0, 5],
            fontSize: 11,
            bold: true,
            alignment: 'left',

          },
          userdetail1: {
            margin: [0, 0, 0, 5],
            fontSize: 11,
            bold: true,
            alignment: 'left',
            color: 'green'
          },
          companydetail: {
            alignment: 'left',
            margin: [30, 0, 0, 5],
            fontSize: 10
          },
          link: {
            alignment: 'left',
            margin: [30, 0, 0, 5],
            fontSize: 10,
            color: 'blue',
            decoration: 'underline',
          },
          tablehead: {
            bold: true,
            fontSize: 10,
            alignment: 'center',
          },
          tablecell: {
            margin: [0, 0, 0, 5],
            fontSize: 10,
            alignment: 'center',
          },
          Title: {
            fontSize: 16,
            color: '#203154',
            bold: true,
          },
        }
      };
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('Gate' + ' ' + 'Pass' + '.pdf');
      this.gatePassModel = {};
    }
  }
}
