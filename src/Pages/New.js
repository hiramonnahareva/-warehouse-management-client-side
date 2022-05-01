import React, { useEffect, useState } from 'react';

const New = () => {
    const [items , setItems] = useState([]);
    useEffect(()=> {
        fetch('')
        .then (res => res.json())
        .then (data => setItems (data))
    }, []);
    return (
        <div>
          {items.map(item => <div>
              <img src={item.img}/>
              <li>{item.name}</li>
              </div> )}
        </div>
    );
};

export default New;