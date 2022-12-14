import React from "react";
import { Browser } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';

function DietDialog(props) {
    let animationSettings = { effect: 'Zoom' }
    let currentMenu = props.currentMenu;
    let today = new Date();
    let dateEnable = false;
    let menuDialogInstance;
    let isDevice = Browser.isDevice;
    let dateWidth = isDevice && props.innerWidth < 450 ? '100%' : '80%';
    let timeWidth = isDevice && props.innerWidth < 450 ? '100%' : '160px';
    let showCloseIcon = true;
    let target = 'body';
    let Dialogwidth = isDevice ? '100%' : '700px';
    let dlgPosition = { X: 'center', Y: 'center' };
    function getSelectCurrentMenu(currentmenu, index) {
        return (
            <div key={index} className="e-card e-menu-card e-card-select">
                <div className="e-card-content">
                    <div className="e-menu-div">{currentmenu.item}</div>
                </div>
            </div>
        )
    }

    function getCurrentMenu(currentmenu, index) {
        return (
            <div key={index} className="e-card e-menu-card">
                <div className="e-card-content">
                    <div className="e-menu-div">{currentmenu.item}</div>
                </div>
            </div>
        )
    }

    let currenSelectedText = [];

    return (
        <DialogComponent className="e-add-menu-dialog"
            visible={props.hidden}
            header={props.currentMenuHeader}
            animationSettings={animationSettings}
            showCloseIcon={showCloseIcon}
            target={target}
            width={Dialogwidth}
            ref={menudialog => menuDialogInstance = menudialog}
            buttons={props.dlgButtons}
            open={props.dialogOpen}
            close={props.dialogClose}
            overlayClick={props.dietOverLayCLick}
            position={dlgPosition}
            isModal="true">
            <div className="e-select-menu-label">Select Menu</div>
            <div className="e-current-menu-container">
                {currentMenu && currentMenu.map(function (element, index) {
                    if (element.isAdded) {
                        currenSelectedText.push(getSelectCurrentMenu(element, index))
                    }
                    else if (!element.isAdded) {
                        currenSelectedText.push(getCurrentMenu(element, index))
                    }
                })}
                {currenSelectedText}
            </div>
            <div className="e-quantity-label-container">
                <div className="e-quantity-label">Quantity</div>
                <div className="e-total-label">Total kcal</div>
                <div className="e-recommended-label">Recommended kcal</div>
            </div>
            <div className="e-quantity-value-container">
                <div className="e-quantity-container">
                    <div className="e-quantity-value">
                        <div className="e-quantity-minus icon-minus"></div>
                        <div className="e-quantity-count">{props.currentQuantity}</div>
                        <div className="e-quantity-plus icon-plus"></div>
                    </div>
                </div>
                <div className="e-quantity-total-container">
                    <div className="e-quantity-total">{props.currentTotalCal}  kcal</div>
                </div>
                <div className="e-quantity-recom-container">
                    <div className="e-quantity-recom">{props.currentRecom}  kcal</div>
                </div>
            </div>
            <div className="e-quantity-date-label-container">
                <div className="e-quantity-date-label">Date</div>
                <div className="e-quantity-time-label">Time</div>
            </div>
            <div className="e-quantity-date-value-container">
                <div className="e-quantity-date-value">
                    <DatePickerComponent id='quantity-datepicker' width={dateWidth} value={today} enabled={dateEnable}></DatePickerComponent>
                </div>
                <div className="e-quantity-time-value">
                    <TimePickerComponent id='quantity-timepicker' width={timeWidth} value={today}></TimePickerComponent>
                </div>
            </div>
        </DialogComponent>
    )
}
export default DietDialog;