export const areElementsDisplayed = async (elems) => {
    for (let e of elems){
        if (!(await e.isDisplayed())){         
            return false
        }
    }
    return true
  };
  