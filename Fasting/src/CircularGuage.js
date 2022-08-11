import React , {useState} from "react";
import { Browser } from '@syncfusion/ej2-base';
import FastingDialog from "./FastingDialog"
import { CircularGaugeComponent, AxesDirective, Gradient, AxisDirective, Inject, Annotations } from '@syncfusion/ej2-react-circulargauge';

let getInitial = true;

function CircularGuage(props) {

    let countStartDate;
    let hidden = false;
    let countDownDate;
    let fastStartTime;
    let fastEndTime;
    let changeTimeBtnText = "CHANGE TIME";
    let sliderValue = "Completed";
    let circularGaugeInstance;
    let x;
    let minimumDate = new Date(new Date().setHours(0, 0, 0));
    let maximumDate = new Date(new Date(new Date().setDate(minimumDate.getDate() + 1)).setHours(24, 0, 0));
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

    let pointerRadialGradient = {
        startValue: '0%',
        endValue: '100%',
        colorStop: [
            { color: '#FB5F64', offset: '0%', opacity: 0.9 },
            { color: '#FC9662', offset: '70%', opacity: 0.9 }]
    };
    let circulargauge = [{
        ranges: [
            {
                start: 0,
                end: 100,
                radius: '100%',
                startWidth: 30,
                endWidth: 30,
                color: '#E1E9ED',
                roundedCornerRadius: 15,
            },
            {
                start: 0,
                end: 100,
                radius: '100%',
                startWidth: 30,
                endWidth: 30,
                color: '#CDD9E0',
                roundedCornerRadius: 15,
                linearGradient: {
                    startValue: '0%',
                    endValue: '100%',
                    colorStop: [
                        { color: '#FB5F64', offset: '0%', opacity: 0.9 },
                        { color: '#FC9662', offset: '70%', opacity: 0.9 }]
                }
            },
            {
                start: 2,
                end: 98,
                radius: '91%',
                startWidth: 5,
                endWidth: 5,
                roundedCornerRadius: 2,
                color: '#FFFFFF',
                opacity: 0.35
            },
        ],
        annotations: isDevice ? [{
            angle: 0,
            zIndex: '1',
            radius: '0%',
        },
        {
            zIndex: '1',
            radius: '91%',
            angle: 350,
            content: '<div class="e-gauge-percent-img icon-Calories"></div>'
        },
        {
            zIndex: '1',
            radius: '91%',
            angle: 60,
            content: '<div class="e-gauge-status-img icon-Diet"></div>'
        },
        {
            zIndex: '1',
            radius: '91%',
            angle: 280,
            content: '<div class="e-gauge-status-img icon-Thunder"></div>'
        }] : [{
            angle: 0,
            zIndex: '1',
            radius: '0%'
        },
        {
            zIndex: '1',
            radius: '90%',
            angle: 350,
            content: '<div class="e-gauge-percent-img icon-Calories"></div>'
        },
        {
            zIndex: '1',
            radius: '89%',
            angle: 60,
            content: '<div class="e-gauge-status-img icon-Diet"></div>'
        },
        {
            zIndex: '1',
            radius: '89%',
            angle: 280,
            content: '<div class="e-gauge-status-img icon-Thunder"></div>'
        }]
    }];

    let ranges = [
        {
            start: 0,
            end: 100,
            radius: '100%',
            startWidth: 30,
            endWidth: 30,
            color: '#E1E9ED',
            roundedCornerRadius: 15,
        },
        {
            start: 0,
            end: 100,
            radius: '100%',
            startWidth: 30,
            endWidth: 30,
            color: '#CDD9E0',
            roundedCornerRadius: 15,
            linearGradient: pointerRadialGradient,
        },
        {
            start: 2,
            end: 98,
            radius: '91%',
            startWidth: 5,
            endWidth: 5,
            roundedCornerRadius: 2,
            color: '#FFFFFF',
            opacity: 0.35
        },
    ];

    var [circular, setCircular] = useState({
        fastStartTime: fastStartTime,
        fastEndTime: fastEndTime,
        countStartDate: countStartDate,
        countDownDate: countDownDate,
        changeTimeBtnText : changeTimeBtnText,
        circulargauge: circulargauge
    });

    if (getInitial) {
        getInitial = false;
        countStartDate = new Date().getHours() >= 17 ? new Date(new Date().setHours(18, 0, 0, 0)) : new Date(new Date(new Date().setDate(new Date().getDate() - 1)).setHours(18, 0, 0, 0));
        countDownDate = new Date().getHours() >= 17 ? new Date(new Date().setHours(countStartDate.getHours() + 16, 0, 0, 0)) : new Date(new Date(new Date().setDate(countStartDate.getDate())).setHours(countStartDate.getHours() + 16, 0, 0, 0));
        x = setInterval(intervalFn(), 1000);
        console.log("Before circular guage")
        console.log(circulargauge);
        setCircular((prevState) => {
            return {
                ...prevState,
                fastStartTime: fastStartTime,
                fastEndTime: fastEndTime,
                countStartDate: countStartDate,
                countDownDate: countDownDate,
                circulargauge: circulargauge
            }
        })
        console.log("After circular guage")
        console.log(circulargauge);
    }

    function intervalFn() {
        let now = new Date();
        let isToday = countStartDate.toDateString() == now.toDateString();
        fastStartTime = (isToday ? 'Today ' : 'Yesterday ') + countStartDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        isToday = countDownDate.toDateString() == now.toDateString();
        fastEndTime = (isToday ? 'Today ' : 'Tomorrow ') + countDownDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        let percent = Math.round(((now - countStartDate) / (countDownDate - countStartDate)) * 100);
        percent = percent > 100 ? 100 : percent;
        let left = countDownDate.getTime() - now.getTime();
        let leftHours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        leftHours = leftHours < 0 ? 0 : leftHours;
        let leftMinutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
        leftMinutes = leftMinutes < 0 ? 0 : leftMinutes;
        let distance = now.getTime() - countStartDate.getTime();
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        sliderValue = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        if (distance > (countDownDate.getTime() - countStartDate.getTime()) || distance < 0) {
            endFasting();
        } else if (circulargauge) {
            circulargauge[0].ranges[1].end = percent;
            circulargauge[0].annotations[1].angle = Math.round((percent / 100) * 340) + 10;
            if (percent > 80) {
                circulargauge[0].annotations[1].content = '<div class="e-gauge-percent-img icon-Calories"></div>';
            } else {
                circulargauge[0].annotations[1].content = '';
            }
            circulargauge[0].annotations[0].content = '<div class="e-fast-ellapsed">Elapsed Time (' + percent + '%)</div><div class="e-fast-completed">' + sliderValue.toString() + '</div><div class="e-fast-left">Left ' + leftHours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + 'h ' + leftMinutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + 'm</div>';
        }
    }

    function endFasting() {
        clearInterval(x);
        sliderValue = "Completed";
        annotations[0].content  = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' +
        sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';
        if (circulargauge) {
            let percent = 100;
            circulargauge[0].ranges[1].end = percent;
            circulargauge[0].annotations[1].angle = Math.round((percent / 100) * 340) + 10;
            circulargauge[0].annotations[1].content = '<div class="e-gauge-percent-img icon-Calories"></div>';
            circulargauge[0].annotations[0].content = '<div class="e-fast-ellapsed">Elapsed Time (100%)</div><div class="e-fast-completed">' + sliderValue.toString() + '</div><div class="e-fast-left">Left 00h 00m</div>';;
        }
    }

    function modifyFasting() {
        document.getElementsByClassName('e-dialog')[0].ej2_instances[0].show();
    }

    function clearFasting() {
        clearInterval(x);
        sliderValue = "Completed";
        endFasting();
        changeTimeBtnText = "START FASTING";
        if (document.querySelector('.e-fast-time-btn') && !document.querySelector('.e-fast-time-btn').classList.contains('e-fast-reset')) {
            document.querySelector('.e-fast-time-btn').classList.add('e-fast-reset');
        }
        if (document.querySelector('.e-fast-end-btn') && !document.querySelector('.e-fast-end-btn').classList.contains('e-fast-reset')) {
            document.querySelector('.e-fast-end-btn').classList.add('e-fast-reset');
        }
        setCircular(prevState => {
            return {
                ...prevState,
                changeTimeBtnText: changeTimeBtnText,
                circulargauge : circulargauge
            }
        })

    }
    function fastingCancelBtnClick(args) {
        document.getElementsByClassName('e-dialog')[0].ej2_instances[0].hide();
    }
    let fasStartValue;
    let fasEndValue;
    function fastingDlgBtnClick() {
        countStartDate = fasStartValue ? fasStartValue : circular.countStartDate;
        countDownDate = fasEndValue ? fasEndValue : circular.countDownDate;
        clearInterval(x);
        x = setInterval(intervalFn(), 1000);
        document.getElementsByClassName('e-dialog')[0].ej2_instances[0].hide();
        changeTimeBtnText = "CHANGE TIME";
        if (document.querySelector('.e-fast-time-btn') && document.querySelector('.e-fast-time-btn').classList.contains('e-fast-reset')) {
            document.querySelector('.e-fast-time-btn').classList.remove('e-fast-reset');
        }
        if (document.querySelector('.e-fast-end-btn') && document.querySelector('.e-fast-end-btn').classList.contains('e-fast-reset')) {
            document.querySelector('.e-fast-end-btn').classList.remove('e-fast-reset');
        }
        setCircular(prevState => {
            return {
                ...prevState,
                fastStartTime : fastStartTime,
                fastEndTime : fastEndTime,
                countStartDate: countStartDate,
                countDownDate: countDownDate,
                changeTimeBtnText : changeTimeBtnText,
                circulargauge : circulargauge
            }
        })
    }

    function onFastStartDateChange() {
        fasStartValue = this.value;
    }
    function onFastEndDateChange() {
        fasEndValue = this.value;
    }

    return (
        <div>
            <CircularGaugeComponent
                id="range-container"
                theme={theme}
                style={{ display: 'block' }}
                ref={circularGauge => circularGaugeInstance = circularGauge}
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
                        ranges={circular.circulargauge[0].ranges}
                        annotations={circular.circulargauge[0].annotations}></AxisDirective>
                </AxesDirective>
            </CircularGaugeComponent>
            <div className="e-fasting-label-container">
                <div>Started Fasting</div>
                <div>End Fasting</div>
            </div>
            <div className="e-fasting-value-container">
                <div> {circular.fastStartTime} </div>
                <div> {circular.fastEndTime} </div>
            </div>
            <div className="e-fasting-button-container">
                <button className="e-fast-time-btn" onClick={modifyFasting} width="100%">{circular.changeTimeBtnText}</button>
                <button className="e-fast-end-btn" width="100%" onClick={clearFasting}>END FASTING</button>
            </div>
            <FastingDialog hidden={hidden}
                    countStartDate={circular.countStartDate}
                    countDownDate={circular.countDownDate}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    fastingDlgBtnClick={fastingDlgBtnClick}
                    fastingCancelBtnClick={fastingCancelBtnClick}
                    onFastStartDateChange={onFastStartDateChange}
                    onFastEndDateChange={onFastEndDateChange}
                >
            </FastingDialog>
        </div>
    )
}

export default CircularGuage;