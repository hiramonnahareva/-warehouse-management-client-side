import { useEffect, useState } from 'react';

const useItemWithId = _id => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `https://frozen-garden-74574.herokuapp.com/item/${_id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [_id])
    return [item];
};
export default useItemWithId;