import React, { Component } from 'react'  
import { CalendarComponent, RenderDayCellEventArgs } from '@syncfusion/ej2-react-calendars';

import './calender.css';
 

 export default class Calendar extends Component {
    
    
    constructor(props){
        super(props)
        this.state={
            dateValue : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            minDate : new Date(),
            maxDate : new Date(new Date().getFullYear(), new Date().getMonth()+1, 0) ,
            selectedDate : new Date()
        }
       
        this.disabledDate = this.disabledDate.bind(this);
        this.getJson = this.getJson.bind(this);
        this.setSelectedDate = this.setSelectedDate.bind(this);
    }

    setSelectedDate(e){
        this.setState({
            selectedDate:e.target.value
        })
    }

    disabledDate( RenderDayCellEventArgs ){
        if ((RenderDayCellEventArgs.date).getDay() === 0 || (RenderDayCellEventArgs.date).getDay() === 6) {
            // set 'true' to disable the weekends
            RenderDayCellEventArgs.isDisabled = true;
        }
        
        let dateArr = this.getJson();
        for (let i = 0; i < dateArr.length; i++) {
            const element = dateArr[i];
            if( element.isBusy) {
                if( (RenderDayCellEventArgs.date).getDate() === (element.date).getDate()-1
                    && (RenderDayCellEventArgs.date).getMonth() === (element.date).getMonth()-1) {
                    RenderDayCellEventArgs.isDisabled = true;
                }
            }
            
        }
    }

    onCreated() {
        const clearBtn = document.createElement('button');
        clearBtn.setAttribute('class', 'e-btn e-flat e-primary e-css');
        clearBtn.setAttribute('id', 'confirm-date');
        clearBtn.innerHTML = 'Confirm';
        const footerElement = document.querySelector('.e-footer-container');
        footerElement.removeChild(footerElement.childNodes[0])
        footerElement.insertBefore(clearBtn, null);
    }

    getJson() {
        const json = 
            [
                {
                    "date": new Date(2022, 2, 1),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 2),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 3),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 4),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 5),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 6),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 7),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 8),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 9),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 10),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 11),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 12),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 13),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 14),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 15),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 16),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 17),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 18),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 19),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 20),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 21),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 22),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 23),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 24),
                    "isBusy": true
                },
                {
                    "date": new Date(2022, 2, 25),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 26),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 27),
                    "isBusy": false
                },
                {
                    "date": new Date(2022, 2, 28),
                    "isBusy": false
                }
            ]
    
        return json;
    }    

    componentDidUpdate() {
        document.getElementById("confirm-date").addEventListener("click",(e) => {
            alert(this.state.selectedDate)
        });
    }

    render() {
        return(
        <CalendarComponent value={this.state.selectedDate} min={this.state.minDate} max={this.state.maxDate} 
        isMultiSelection={false} renderDayCell={this.disabledDate} created={this.onCreated} onChange={this.setSelectedDate}  /> 
        )
    }
}

