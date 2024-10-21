import React from 'react'

const ExpenseForm = () => {
  return (
<form>
    <div>
        <label> 지출항목 </label>
            <input 
                type='text'
                id='charge' 
                name='charge' 
                placeholder='예) 렌트비'
            />
    </div>
        
    </form>

)
}

export default ExpenseForm
