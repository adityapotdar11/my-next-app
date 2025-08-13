import React from 'react';
import * as aboutData from '../../../data/about.json';

const about = () => {
    return (
        <>
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
            <ul className="mt-4 list-disc pl-5">
                {aboutData.items.map((smData, index) => (
                    <li key={index} className="mb-4">
                        {' '}
                        {/* Always provide a unique 'key' prop */}
                        <p>{smData.title}</p>
                        <p>{smData.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default about;
