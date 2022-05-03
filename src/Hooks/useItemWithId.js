import { useEffect, useState } from 'react';

const useItemWithId = itemId => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.logsetItem(data))
    }, [itemId])
    return [item];
};
export default useItemWithId;