import React from 'react';

function Categories({ items }) {
    const [active, setActive] = React.useState(null);

    return (
        <div className="categories">
            <ul>
                <li 
                    onClick={() => setActive(null)}
                    className={active === null ? "active" : ""}
                >
                    Все
                </li>
                {items && items.map((item, index) => {
                    return (
                        <li 
                            key={index}
                            onClick={() => setActive(index)}
                            className={active === index ? "active" : ""}
                        >{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;