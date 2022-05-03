import { useEffect, useState } from 'react';

const useItemWithId = _id => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/items/${_id}`
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [_id])
    return [item];
};
export default useItemWithId;