import React, { useState } from "react";
import { Browser } from '@syncfusion/ej2-base';
import { CircularGaugeComponent, AxesDirective, Gradient, AxisDirective, Inject, Annotations } from '@syncfusion/ej2-react-circulargauge';

function CircularGuage(props) {

    //////////Added
    // var diff = 16;
    // let countStartDate;
    // let countDownDate;
    // let fastStartTime;
    // let fastEndTime;
    // let x;
    // let sliderValue = "Completed";
    // let circulargauge = [{
    //     ranges: [
    //         {
    //             start: 0,
    //             end: 100,
    //             radius: '100%',
    //             startWidth: 30,
    //             endWidth: 30,
    //             color: '#E1E9ED',
    //             roundedCornerRadius: 15,
    //         },
    //         {
    //             start: 0,
    //             end: 100,
    //             radius: '100%',
    //             startWidth: 30,
    //             endWidth: 30,
    //             color: '#CDD9E0',
    //             roundedCornerRadius: 15,
    //             linearGradient: {
    //                 startValue: '0%',
    //                 endValue: '100%',
    //                 colorStop: [
    //                     { color: '#FB5F64', offset: '0%', opacity: 0.9 },
    //                     { color: '#FC9662', offset: '70%', opacity: 0.9 }]
    //             }
    //         },
    //         {
    //             start: 2,
    //             end: 98,
    //             radius: '91%',
    //             startWidth: 5,
    //             endWidth: 5,
    //             roundedCornerRadius: 2,
    //             color: '#FFFFFF',
    //             opacity: 0.35
    //         },
    //     ],
    //     annotations: isDevice ? [{
    //         angle: 0,
    //         zIndex: '1',
    //         radius: '0%'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '91%',
    //         angle: 350,
    //         content: '<div class="e-gauge-percent-img icon-Calories"></div>'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '91%',
    //         angle: 60,
    //         content: '<div class="e-gauge-status-img icon-Diet"></div>'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '91%',
    //         angle: 280,
    //         content: '<div class="e-gauge-status-img icon-Thunder"></div>'
    //     }] : [{
    //         angle: 0,
    //         zIndex: '1',
    //         radius: '0%'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '90%',
    //         angle: 350,
    //         content: '<div class="e-gauge-percent-img icon-Calories"></div>'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '89%',
    //         angle: 60,
    //         content: '<div class="e-gauge-status-img icon-Diet"></div>'
    //     },
    //     {
    //         zIndex: '1',
    //         radius: '89%',
    //         angle: 280,
    //         content: '<div class="e-gauge-status-img icon-Thunder"></div>'
    //     }]
    // }];
    
    // if (getInitial) {
    //     getInitial = false;
    //     countStartDate = new Date().getHours() >= 17 ? new Date(new Date().setHours(18, 0, 0, 0)) : new Date(new Date(new Date().setDate(new Date().getDate() - 1)).setHours(18, 0, 0, 0));
    //     countDownDate = new Date().getHours() >= 17 ? new Date(new Date().setHours(countStartDate.getHours() + 16, 0, 0, 0)) : new Date(new Date(new Date().setDate(countStartDate.getDate())).setHours(countStartDate.getHours() + 16, 0, 0, 0));
    //     x = setInterval(intervalFn(), 1000);
    // }

    // var [circular, setCircular] = useState({
    //     diff: diff,
    //     countStartDate : countStartDate,
    //     countDownDate : countDownDate,
    //     circulargauge : circulargauge
    // })
    // // let dialogInstance;
    // // let dateStartInstance;
    // // let dateEndInstance;
    // // let isDevice = Browser.isDevice;
    // // let fastingDialogeader = 'Fasting';
    // // let animationSettings = { effect: 'Zoom' };
    // // let showCloseIcon = true;
    // // let target = 'body';
    // // let fastingDialogwidth = isDevice ? '100%' : '400px';
    // // let fastingDlgButtons = [{ click: fastingCancelBtnClick.bind(), buttonModel: { content: 'CANCEL', cssClass: 'e-fasting-cancel' } }, { click: fastingDlgBtnClick.bind(this), buttonModel: { content: 'START FASTING', cssClass: 'e-start-fast' } }];
    // // let dlgPosition = { X: 'center', Y: 'center' };

    // // function onCreated() {
    // //     if(dateStartInstance && dateEndInstance) {
    // //         diff = Math.floor(((dateEndInstance.value) - (dateStartInstance.value)) / (1000 * 60 * 60));
    // //     }
    // //     setCircular({
    // //         [diff] : diff
    // //     })
    // // }
    // function intervalFn() {
    //     let now = new Date();
    //     let isToday = countStartDate.toDateString() == now.toDateString();
    //     fastStartTime = (isToday ? 'Today ' : 'Yesterday ') + countStartDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    //     isToday = countDownDate.toDateString() == now.toDateString();
    //     fastEndTime = (isToday ? 'Today ' : 'Tomorrow ') + countDownDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    //     let percent = Math.round(((now - countStartDate) / (countDownDate - countStartDate)) * 100);
    //     percent = percent > 100 ? 100 : percent;
    //     let left = countDownDate.getTime() - now.getTime();
    //     let leftHours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     leftHours = leftHours < 0 ? 0 : leftHours;
    //     let leftMinutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    //     leftMinutes = leftMinutes < 0 ? 0 : leftMinutes;
    //     let distance = now.getTime() - countStartDate.getTime();
    //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //     sliderValue = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    //     if (distance > (countDownDate.getTime() - countStartDate.getTime()) || distance < 0) {
    //         endFasting();
    //     } else if (circulargauge) {
    //         circulargauge[0].ranges[1].end = percent;
    //         circulargauge[0].annotations[1].angle = Math.round((percent / 100) * 340) + 10;
    //         if (percent > 80) {
    //             circulargauge[0].annotations[1].content = '<div class="e-gauge-percent-img icon-Calories"></div>';
    //         } else {
    //             circulargauge[0].annotations[1].content = '';
    //         }
    //         circulargauge[0].annotations[0].content = '<div class="e-fast-ellapsed">Elapsed Time (' + percent + '%)</div><div class="e-fast-completed">' +
    //         sliderValue.toString() + '</div><div class="e-fast-left">Left ' + leftHours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + 'h ' + leftMinutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + 'm</div>';
    //     }
    // }
    // function onFastStartDateChange() {
    //     diff = Math.floor(((dateEndInstance.value) - (dateStartInstance.value)) / (1000 * 60 * 60));
    //     setCircular((prevState) => {
    //         return {
    //             ...prevState,
    //             diff: diff
    //         }
    //     })
    // }

    // function fastingDlgBtnClick() {
    //     countStartDate = dateStartInstance;
    //     countDownDate = dateStartInstance;
    //     clearInterval(x);
    //     x = setInterval(intervalFn(), 1000);
    //     document.getElementsByClassName('e-dialog')[0].ej2_instances[0].hide();
    //     if (document.querySelector('.e-fast-time-btn') && document.querySelector('.e-fast-time-btn').classList.contains('e-fast-reset')) {
    //         document.querySelector('.e-fast-time-btn').classList.remove('e-fast-reset');
    //     }
    //     if (document.querySelector('.e-fast-end-btn') && document.querySelector('.e-fast-end-btn').classList.contains('e-fast-reset')) {
    //         document.querySelector('.e-fast-end-btn').classList.remove('e-fast-reset');
    //     }
    //     setCircular(prevState => {
    //         return {
    //             ...prevState,
    //             countStartDate: countStartDate,
    //             countDownDate: countDownDate,
    //             circulargauge: circulargauge
    //         }
    //     })
    //     // this.countDownDate = this.fastingEndDateInstance.value;
    //     // this.diff = Math.floor((this.countDownDate - this.countStartDate) / (1000 * 60 * 60));
    //     // clearInterval(this.x);
    //     // this.x = setInterval(this.intervalFn.bind(this), 1000);
    //     // this.fastingDialog.hide();
    //     // this.changeTimeBtnText = "CHANGE TIME";
    //     // if (document.querySelector('.e-fast-time-btn') && document.querySelector('.e-fast-time-btn').classList.contains('e-fast-reset')) {
    //     //   document.querySelector('.e-fast-time-btn').classList.remove('e-fast-reset');
    //     // }
    //     // if (document.querySelector('.e-fast-end-btn') && document.querySelector('.e-fast-end-btn').classList.contains('e-fast-reset')) {
    //     //   document.querySelector('.e-fast-end-btn').classList.remove('e-fast-reset');
    //     // }
    // }


    // // function fastingCancelBtnClick() {

    // // }

    // function modifyFasting() {
    //     document.getElementsByClassName('e-dialog')[0].ej2_instances[0].show();
    // }


    // function fastingCancelBtnClick(args) {
    //     document.getElementsByClassName('e-dialog')[0].ej2_instances[0].hide();
    // }

    // function fastingDlgBtnClick() {

    // }

    // function dialogOpen() {

    // }

    // function fastingOverlayClick() {

    // }

    // function clearFasting() {
    //     clearInterval(x);
    //     sliderValue = "Completed";
    //     // this.annotaions[0].content = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' +
    //     //   this.sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';
    //     // if (circulargauge) {
    //     //     circulargauge[0].ranges[1].end = 0;
    //     //     circulargauge[0].annotations[1].angle = 0;
    //     //     circulargauge[0].annotations[1].content = '';
    //     //     circulargauge[0].annotations[0].content = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' + sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';;
    //     // }
    //     endFasting();

    //     if (document.querySelector('.e-fast-time-btn') && !document.querySelector('.e-fast-time-btn').classList.contains('e-fast-reset')) {
    //         document.querySelector('.e-fast-time-btn').classList.add('e-fast-reset');
    //     }
    //     if (document.querySelector('.e-fast-end-btn') && !document.querySelector('.e-fast-end-btn').classList.contains('e-fast-reset')) {
    //         document.querySelector('.e-fast-end-btn').classList.add('e-fast-reset');
    //     }
    //     setCircular(prevState => {
    //         return {
    //             ...prevState,
    //             circulargauge: circulargauge
    //         }
    //     })

    // }
    // function endFasting() {
    //     clearInterval(x);
    //     sliderValue = "Completed";
    //     // annotaions[0].content  = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' +
    //     // sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';
    //     if (circulargauge) {
    //         let percent = 100;
    //         circulargauge[0].ranges[1].end = percent;
    //         circulargauge[0].annotations[1].angle = Math.round((percent / 100) * 340) + 10;
    //         circulargauge[0].annotations[1].content = '<div class="e-gauge-percent-img icon-Calories"></div>';
    //         circulargauge[0].annotations[0].content = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' + sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';;
    //     }
    // }
    
    let isDevice = Browser.isDevice;
    let theme = 'Tailwind';
    let style = {
        display: 'block',
    }
    let circularGaugeRadius = isDevice ? '100%' : '100%';
    let majorTicks = {
        height: 0,
    };
    let minorTicks = {
        height: 0,
    };
    let gaugeLabelStyle = {
        position: 'Inside', useRangeColor: true,
        font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
    };
    let lineStyle = {
        width: 0
    };

    // let pointerRadialGradient = {
    //     startValue: '0%',
    //     endValue: '100%',
    //     colorStop: [
    //         { color: '#FB5F64', offset: '0%', opacity: 0.9 },
    //         { color: '#FC9662', offset: '70%', opacity: 0.9 }]
    // };

    // let ranges = [
    //     {
    //         start: 0,
    //         end: 100,
    //         radius: '100%',
    //         startWidth: 30,
    //         endWidth: 30,
    //         color: '#E1E9ED',
    //         roundedCornerRadius: 15,
    //     },
    //     {
    //         start: 0,
    //         end: 100,
    //         radius: '100%',
    //         startWidth: 30,
    //         endWidth: 30,
    //         color: '#CDD9E0',
    //         roundedCornerRadius: 15,
    //         linearGradient: pointerRadialGradient,
    //     },
    //     {
    //         start: 2,
    //         end: 98,
    //         radius: '91%',
    //         startWidth: 5,
    //         endWidth: 5,
    //         roundedCornerRadius: 2,
    //         color: '#FFFFFF',
    //         opacity: 0.35
    //     },
    // ];
    // let pointers = [
    //     {
    //         value: 80,
    //         height: 12,
    //         width: 12,
    //         placement: 'Near',
    //         offset: -20,
    //         markerType: 'Triangle',
    //         color: '#FFFFFF',
    //     },
    // ];

    // let annotaions = isDevice ? [{
    //     angle: 0,
    //     zIndex: '1',
    //     radius: '0%'
    // },
    // {
    //     zIndex: '1',
    //     radius: '91%',
    //     angle: 350,
    //     content: '<div class="e-gauge-percent-img icon-Calories"></div>'
    // },
    // {
    //     zIndex: '1',
    //     radius: '91%',
    //     angle: 60,
    //     content: '<div class="e-gauge-status-img icon-Diet"></div>'
    // },
    // {
    //     zIndex: '1',
    //     radius: '91%',
    //     angle: 280,
    //     content: '<div class="e-gauge-status-img icon-Thunder"></div>'
    // }] : [{
    //     angle: 0,
    //     zIndex: '1',
    //     radius: '0%'
    // },
    // {
    //     zIndex: '1',
    //     radius: '90%',
    //     angle: 350,
    //     content: '<div class="e-gauge-percent-img icon-Calories"></div>'
    // },
    // {
    //     zIndex: '1',
    //     radius: '89%',
    //     angle: 60,
    //     content: '<div class="e-gauge-status-img icon-Diet"></div>'
    // },
    // {
    //     zIndex: '1',
    //     radius: '89%',
    //     angle: 280,
    //     content: '<div class="e-gauge-status-img icon-Thunder"></div>'
    // }];
    return (
        <div>
        <CircularGaugeComponent
            id="range-container"
            theme={theme}
            style={{ display: 'block' }}
            width='100%'
            height='300px'
            centerX='50%'
            centerY='50%'
        >
            <Inject services={[Annotations, Gradient]} />
            <AxesDirective>
                <AxisDirective
                    minimum='0'
                    radius={circularGaugeRadius}
                    maximum='100'
                    startAngle='5'
                    endAngle='355'
                    majorTicks={majorTicks}
                    labelStyle={gaugeLabelStyle}
                    lineStyle={lineStyle}
                    minorTicks={minorTicks}
                    pointers={[]}
                    ranges={props.circularGuage[0].ranges}
                    annotations={props.circularGuage[0].annotations}></AxisDirective>
            </AxesDirective>
        </CircularGaugeComponent>
        {/* <FastingDialog hidden={hidden}
                    countStartDate={circular.countStartDate}
                    countDownDate={circular.countDownDate}
                    // diff={circular.diff}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    fastingDlgBtnClick={fastingDlgBtnClick}
                    fastingCancelBtnClick={fastingCancelBtnClick}
                    onFastStartDateChange={onFastStartDateChange}
                    onFastEndDateChange={onFastEndDateChange}></FastingDialog> */}
        </div>
    )
}

export default CircularGuage;