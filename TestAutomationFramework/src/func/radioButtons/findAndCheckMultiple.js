import { driver } from "../../util.js";
import { By } from "selenium-webdriver";

export const findAndCheckMultiple = async (elem) => {
    //function returns true only if every checkbox is selected
    const elements = await driver.findElements(By.css(elem));
    ret = true;
    for (let element of elements){
        if (element.isSelected() === false){
            ret = false;
        }  
    }
    return ret;
  };
  