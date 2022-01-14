import React, { useState } from 'react'
function MyForm() {
    const [state, setState] = useState({
        description: 'The content of a textarea goes in the value attribute'
    })
    return (
        <form>
            <textarea value={state.description} onChange={(e) => { setState({ description: e.target.value }) }} />
        </form>
    )
}
export default MyForm;