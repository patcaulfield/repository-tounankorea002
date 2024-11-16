import Blog6 from '@/app/Components/Blog/Blog6';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta1 from '@/app/Components/Cta/Cta1';
import MarqueeText from '@/app/Components/MarqueeText/MarqueeText';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb Title="Blog"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Blog6></Blog6>
            <Cta1></Cta1>            
        </div>
    );
};

export default page;