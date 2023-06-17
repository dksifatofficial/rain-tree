'use client'

import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'

function Rating({className, ...rest}) {
    const [star, setStar] = useState(5);
    const onChange=(nextValue)=>{
        setStar(nextValue)
    }
    return <ReactStars onChange={onChange} edit {...rest} />
}

export default Rating;