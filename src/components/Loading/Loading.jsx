import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <HashLoader className='text-orange-500' />
        </div>
    );
};

export default Loading;