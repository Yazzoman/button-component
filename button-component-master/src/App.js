import React, { useState } from 'react'
import './css/App.css'
import JazzoButton from './components/jazzo-button'

function App() {

    const [ variant, setVariant ] = useState('')
    const [ disabled, setDisabled ] = useState(false)
    const [ color, setColor ] = useState('')
    const [ size, setSize ] = useState('')
    const [ icon, setIcon ] = useState('')

    const iconList = ['face', 'anchor', 'code', 'build', 'check_circle', 'favorite', 'eco', 'pan_tool', 'room', 'keyboard_arrow_left', 'keyboard_arrow_right', 'watch', 'bedtime', 'audiotrack', 'brush' ]

    const IconSelection = iconList.map(iconName => <i className="material-icons" key={iconName} onClick={changeIcon}>{iconName}</i>)

    let currentCode = `<JazzoButton
                            ${variant !== '' ? `variant="${variant}"` : ''}
                            ${color !== '' ? `variant="${color}"` : ''}
                            ${size ? `size="${size}"` : ''}
                            ${disabled ? `disabled` : ''}>Default</JazzoButton>`

    function handleChange(e) {
        switch(e.target.name){
            case 'Variants':
                setVariant(e.target.value)
            break;
            case 'Disabled':
                setDisabled(!disabled)
            break;
            case 'Color':
                setColor(e.target.value)
            break;
            case 'Size':
                setSize(e.target.value)
            break;
        }

        
    }

    function changeIcon(){

    }

    return (
        <div className="App">
            <div className="button-window">
                <h1>Example Button</h1>
                <h2>Select different options to the right</h2>
                <JazzoButton 
                    variant={variant}
                    color={color}
                    size={size}
                    disabled={disabled}>
                    Default
                </JazzoButton>
                <div className="code-output">{ currentCode }</div>
            </div>
            <div className="controls">
                <label htmlFor="Variants">Variants</label>
                <select name="Variants" onChange={handleChange} value={variant}>
                    <option value="">Normal</option>
                    <option value="outline">Outline</option>
                    <option value="text">Text</option>
                </select>
                <label htmlFor="Disabled">Disabled?</label>
                <input name="Disabled" type="checkbox" onChange={handleChange} value={disabled}/>
                <label htmlFor="Color">Color</label>
                <select name="Color" onChange={handleChange} value={color}>
                    <option value="">Default</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="danger">Danger</option>
                </select>
                <label htmlFor="Size">Button Size</label>
                <select name="Size" onChange={handleChange} value={size}>
                    <option value="">Default</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
                <label htmlFor="IconSelectionArea">Pick an icon:</label>
                <div className="icon-selection-area">
                    { IconSelection }
                </div>
                

            </div>
        </div>
    )
}

export default App;
