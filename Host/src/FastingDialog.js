import React, { useState } from "react";
import { Browser } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

function FastingDialog(props) {

    var diff=16;
    // var [difference, setDifference] = useState({
    //         diff: diff
    //     })

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
                radius: '0%'
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
    let dialogInstance;
    let dateStartInstance;
    let dateEndInstance;
    let isDevice = Browser.isDevice;
    let fastingDialogeader = 'Fasting';
    let animationSettings = { effect: 'Zoom' };
    let showCloseIcon = true;
    let target = 'body';
    let fastingDialogwidth = isDevice ? '100%' : '400px';
    let fastingDlgButtons = [{ click: props.fastingCancelBtnClick.bind(dialogInstance), buttonModel: { content: 'CANCEL', cssClass: 'e-fasting-cancel' } }, { click: props.fastingDlgBtnClick.bind(this), buttonModel: { content: 'START FASTING', cssClass: 'e-start-fast' } }];
    let dlgPosition = { X: 'center', Y: 'center' };

    // function onCreated() {
    //     if(dateStartInstance && dateEndInstance) {
    //         diff = Math.floor(((dateEndInstance.value) - (dateStartInstance.value)) / (1000 * 60 * 60));
    //     }
    //     setDifference({
    //         [diff] : diff
    //     })
    // }

    // function onFastStartDateChange() {
    //     diff = Math.floor(((dateEndInstance.value) - (dateStartInstance.value)) / (1000 * 60 * 60));
    //     setDifference(() => {
    //         return {
    //            diff : diff
    //         }
    //     })
    // }

    function fastingCancelBtnClick() {

    }

    function fastingDlgBtnClick() {

    }

    function dialogOpen() {

    }

    function fastingOverlayClick() {

    }
    return (
        <DialogComponent header={fastingDialogeader}
            visible={props.hidden}
            animationSettings={animationSettings}
            showCloseIcon={showCloseIcon}
            target={target}
            ref={dialog => dialogInstance = dialog}
            width={fastingDialogwidth}
            buttons={fastingDlgButtons}
            position={dlgPosition}
            isModal="true"
            open={dialogOpen}
            overlayClick={fastingOverlayClick}>
            <div className="e-fast-start-label">Start Time</div>
            <div className="e-fast-start-date">
                <DateTimePickerComponent value={props.countStartDate} min={props.minimumDate} max={props.maximumDate} change={props.onFastStartDateChange} ref={datetime => dateStartInstance = datetime}></DateTimePickerComponent>
            </div>
            <div className="e-fast-end-label">End Time</div>
            <div className="e-fast-end-date">
                <DateTimePickerComponent value={props.countDownDate} min={props.minimumDate} max={props.maximumDate} change={props.onFastEndDateChange} ref={ datetime => dateEndInstance = datetime}></DateTimePickerComponent>
            </div>
            <div className="e-fast-total-label">Total Hours</div>
            <div className="e-fast-total-value">{diff} h</div>
        </DialogComponent>
    )
}

export default FastingDialog;