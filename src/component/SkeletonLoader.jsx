import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonLoader = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-center mt-5 transition-shadow">
            {[...Array(8)].map((_, index) => (
                <div key={index}>
                    <Skeleton variant="rectangular" width={250} height={200} animation="wave" style={{ marginBottom: '10px' }} />
                    <Skeleton variant="text" width={200} height={20} animation="wave" />
                    <Skeleton variant="text" width={150} height={20} animation="wave" />
                    <Skeleton variant="text" width={100} height={20} animation="wave" />
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
