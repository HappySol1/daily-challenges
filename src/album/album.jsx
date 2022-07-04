import React, { useEffect, useRef, useState } from 'react'
import './stylesalbum.css'
import d5imag from "./images/podcast-cover.png";

export default function Day5() {
    let [items, setItems] = useState([
        { label: 'Californication', id: 'californication' },
        { label: 'Scar Tissue', id: 'scartissue' },
        { label: 'The Zephyr Song', id: 'thezephyrsong' },
        { label: 'Give It Away', id: 'giveitaway' },
        { label: 'Snow (Hey Oh)', id: 'snow' },
        { label: 'Otherside', id: 'otherside' },
        { label: 'Under the Bridge', id: 'underthebridge' },
        { label: 'By the Way', id: 'bytheway' },
        { label: 'Parallel Universe', id: 'paralleluniverse' },
        { label: 'Soul to Squeeze', id: 'soultosqueeze' }
    ])
    let [selectedItems, setSelectedItems] = useState([])
    let [isShiftDown, setShiftDown] = useState(false)
    let [lastSelectedItem, setLastSelectedItem] = useState(null)

    function handleKeyUp(e) {
        if (e.key === "Shift") {
            setShiftDown(false)
        }
    }
    function handleKeyDown(e) {
        if (e.key === "Shift" && !isShiftDown) {
            setShiftDown(true)
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    }, [])

    function handleSelectItem(e) {
        document.getSelection().removeAllRanges();
        let clickedItemId = items.indexOf(items.find((item) => item.id == e.target.id))
        let currid = selectedItems.indexOf(e.target.id)

        if (!isShiftDown || lastSelectedItem == null) {


            if (currid < 0) {
                setLastSelectedItem(clickedItemId)
                setSelectedItems([...selectedItems, e.target.id])
            }
            else {
                let temparr = [...selectedItems]
                temparr.splice(currid, 1)
                setSelectedItems(temparr);
            }

        } else {
            e.preventDefault();
            let minId = Math.min(lastSelectedItem, clickedItemId)
            let maxId = Math.max(lastSelectedItem, clickedItemId)
            // console.log('min:' + minId + '  ' + 'max' + maxId);
            let temparr = []
            for (let i = minId; i <= maxId; i++) {
                if (selectedItems.indexOf(items[i].id) == -1) {

                    temparr.push(items[i].id)
                }
            }
            setSelectedItems([...selectedItems, ...temparr])
            setShiftDown(false)
        }
    }

    let list = items.map((item, index) => {
        return <li key={item.id} >
            <label htmlFor={item.id}>
                <input type="checkbox" name={item.label} id={item.id} checked={selectedItems.includes(item.id)} onChange={handleSelectItem} />
                <span>{index + 1} || {item.label}</span>
            </label>
        </li>
    })

    return <div className="albumW">
        <div className="wrapper">
            <div className="cover">
                <img src={d5imag} alt="Compressed.fm" />
            </div>
            <div className="content"  >
                <h1>Shift + click чтоб выбрать сразу несколько</h1>
                <ul className="episodes">

                    {list}
                </ul>
            </div>
        </div>
    </div>
}